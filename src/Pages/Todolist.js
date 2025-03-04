import { useState } from "react";
import Activelist from "./Todolistactive";
import Completelist from "./Todolistcomplete";
import { Alllist,Textbox,Completecheckbox,Buttontask } from "../Redux/Todolistslice";
import { useDispatch, useSelector } from "react-redux";
import './Todolist.css'
const Todolist=()=>{
    const dispatch = useDispatch();
    let value = useSelector((state) => (state.Todoslice.change)); 
    const alllist=useSelector((state)=>state.Todoslice.key)
    const button=useSelector((state)=>state.Todoslice.button)

    const handlechange=(e)=>{
        dispatch(Textbox(e.target.value))
    }

    const handleAdd=()=>{
        console.log(value)
        dispatch(Alllist(value))
        dispatch(Textbox(''))
        dispatch(Buttontask('All'))
    }
    const handlechangebutton=(e)=>{
       dispatch(Buttontask(e.target.value))
    }
    return (
    <>
 <div className="Todolist-info-card">
  <h2>🚀 Why is this TodoList Special?</h2>
  <p>
    Unlike most Todo apps that use local state, this app is built **entirely with Redux!**  
    This ensures **centralized state management**, making it easy to scale, debug, and maintain.
  </p>
  <p className="developer-credit">Developed by <strong>Pradeep Kumar</strong> ❤️</p>
</div>

        <div className="Todolist-addbox">
        <input type="text" onChange={handlechange} value={value || ''}/>
        <div className="Addbuttonclass">
        <button onClick={handleAdd}>ADD</button>
        </div> 
        </div>
        <div className="Todolist-buttons">
        <button onClick={()=> dispatch(Buttontask('All'))}>ALL TASKS</button>
        <button value={"Active"} onClick={handlechangebutton}>ACTIVE</button>       
        <button value={"Completed"} onClick={handlechangebutton}>COMPLETED</button>
        </div>
        <div className="Todolist-datas">
        {button==="All" &&
        <> 
        {alllist.map((item,index)=>{
            return (
                <li>
                {item.data}
                <input 
                    type="checkbox" 
                    checked={item.status==='completed'?true:false}
                    onChange={(event) => 
                    dispatch(Completecheckbox({
                        id: index, 
                        status: event.target.checked ? "completed" : "active"
                    }))
                    } 
                />
                </li>
            )
        })}
        </>
    }
    {button==="Active" &&  <Activelist/>}    
    {button==="Completed" &&   <Completelist/>   }
  
    </div>
    </>
    )
}

export default Todolist;