import React,{useState} from 'react'
import './App.css'
const TodoClass = () => {
  const [inputValue,setInputValue]=useState("");
  const [arr,setArr]=useState([]);
  const onchangeHandeller=(e)=>{
setInputValue(e.target.value)
  }
const onclickHandeller=()=>{
if (inputValue!==""){
  setArr([inputValue,...arr])
  setInputValue("");
}

}
 const deletehandeller=(e)=>{
setArr(arr.filter((_,k)=>{ 
  return (k!==e.target.value)
}))
 }

return (
    <div className='background'>
        <h2>To Do</h2>
        <hr></hr>
        <input type="text" value={inputValue} onChange={onchangeHandeller} />
        <br></br>
        <button onClick={onclickHandeller}>ADD</button>
        {arr.length!==0?arr.map((value, key) => {
          return(<div><ol>
            <li key={key} value={key} onClick={deletehandeller}>
              {value}
            </li>
            </ol>
            </div>
          );
        }):<p>Add todo</p>}
    </div>
  )
}

export default TodoClass
