import { createSlice } from "@reduxjs/toolkit";

const Todoslice=createSlice({
    name:"todolist",
    initialState:{key:[],change:"",button:'All'},
    reducers:{
        Alllist: (state, action) => {
            state.key.push({data:action.payload,status:'active'}) 
        },        
        Textbox:(state,action)=>{
            state.change=action.payload
        },
        Completecheckbox:(state,action)=>{
            console.log(action.payload)
            state.key[action.payload.id].status=action.payload.status;
        },
        Buttontask:(state,action)=>{
           state.button=action.payload
        }
    }
})

export const {Alllist,Textbox,Completecheckbox,Buttontask}=Todoslice.actions
export default Todoslice.reducer;