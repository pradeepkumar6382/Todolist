import { useDispatch, useSelector } from "react-redux"
import { Completecheckbox } from "../Redux/Todolistslice"

const Activelist=()=>{
    const tododatas=useSelector((state)=>state.Todoslice.key)
    const completestatus=tododatas.filter((item)=>item.status==='active')
    console.log(completestatus)
    return (
     <>{completestatus.map((item,index)=>{
        return (
                <li>{item.data}</li>
        )
     })}</>
    )
}

export default Activelist;