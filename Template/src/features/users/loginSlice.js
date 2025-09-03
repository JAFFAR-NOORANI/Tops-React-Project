import { createAsyncThunk } from "@reduxjs/toolkit";


export const userLogin = createAsyncThunk('userLogin', async (data, {rejectedWithValue} ) => {

const response = await fetch("")

})