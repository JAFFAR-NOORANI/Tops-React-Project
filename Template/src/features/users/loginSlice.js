import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userLogin = createAsyncThunk(
  "userLogin",
  async (data, { rejectedWithValue }) => {
    const response = await fetch(
      "https://tops-react-project.onrender.com/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    console.log(response.json());
    
    return await response.json();
  }
);

const token = localStorage.getItem("token");

const role = localStorage.getItem("role");

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoading: false,
    token: token ? token : null,
    isError: false,
    isAuthenticated: !!token,
    sucess: null,
    error: null,
    role: role ? role : null,
  },
  reducers: {
    logout: (state) => {
      (state.token = null), (state.isAuthenticated = false);
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action.payload.authtoken;
      state.role = action.payload.role;

      if (action.payload.error) {
        state.isAuthenticated = false;
        state.error = "something went wrong !!!";
      } else {
        state.isAuthenticated = true;
        localStorage.setItem("token", action.payload.authtoken);
        localStorage.setItem("role", action.payload.role);
      }
      state.sucess = "Login Sucess";
    });

    builder.addCase(userLogin.rejected, (state, action) => {
      state.isError = true;
      state.error = "Something Went Wrong !";
      state.isAuthenticated = false;
    });
  },
});

export const { logout } = loginSlice;
export default loginSlice.reducer;
