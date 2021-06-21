import React,{useState,useEffect} from 'react'
import './App.css';
import axios from 'axios'
function App() {
  const [user, setUser] = useState([])
  const [text, setText] = useState('')
  useEffect(() => {
   const loaduser=async () =>{
     const response = await axios.get('https://reqres.in/api/users?page=2')
     console.log(response.data.data)
     setUser(response.data.data)
   } 
   loaduser()
  }, [])
  
  const onchangeHandler=(text)=>{
    setText(text)
  }
  console.log(text)
  return (
    <div className="container">
      <input className='col-md-12'type="text"onChange={(event)=>onchangeHandler(event.target.value)}></input>
     
    </div>
  );
}

export default App;
