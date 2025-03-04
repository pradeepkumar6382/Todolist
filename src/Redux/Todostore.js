import { configureStore } from "@reduxjs/toolkit";
import TodolistSlice from "./Todolistslice";

const Store=configureStore({
    reducer:{
       Todoslice:TodolistSlice
    }
})

export default Store;