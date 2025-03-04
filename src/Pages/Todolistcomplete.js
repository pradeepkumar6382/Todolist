import { useSelector } from "react-redux";


const Completelist=()=>{
    const tododatas=useSelector((state)=>state.Todoslice.key)
    console.log(tododatas)
    const completestatus=tododatas.filter((item)=>item.status==='completed')
    console.log(completestatus)

    return (
     <>{completestatus.map((item)=>{
        return (
                <li>{item.data}</li>
        )
     })}</>
    )
}
export default Completelist;