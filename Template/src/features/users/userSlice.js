import { createAsyncThunk } from "@reduxjs/toolkit";

 

 export const useReg = createAsyncThunk('useReg', async (data) => {
    const resp = await fetch("")
 })