import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/AxiosInstance";
import toast from "react-hot-toast";
import { act } from "react";
const initialState= {
    // isLoggedIn: localStorage.getItem('isLoggedIn')=='true' || false,
    // role: localStorage.getItem('role') || '', 
    // data: JSON.parse(localStorage.getItem('data')) || {}
};
export const createAccount =createAsyncThunk('buyscrap',async (data)=>{
    console.log("incoming data",data);
    try {
        
        const response= axiosInstance.post('/buyScrap',data);
        toast.promise(response,{
            success:(resolvedpromise)=>{
                return resolvedpromise?.data?.message
            },
            loading:"Hold tight",
            error:"Something went wrong"
        })
        return response

    } catch (error) {
        console.log(error)
    }
})


const AuthSlice = createSlice({
    name:'product',
    initialState,
    reducers:{},
  
})
export default AuthSlice.reducer