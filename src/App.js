import React,{useState,useEffect} from 'react'
import './App.css';
import axios from 'axios'
function App() {
  const [user, setUser] = useState([])
  const [text, setText] = useState('')
  const [suggestion, setsuggestion] = useState([])
  useEffect(() => {
   const loaduser=async () =>{
     const response = await axios.get('https://reqres.in/api/users?page=2')
    //  console.log(response.data.data)
     setUser(response.data.data)
   } 
   loaduser()
  }, [])
  
  const onsugestion=(text)=>{
    setText(text)
    setsuggestion([])
    console.log(text)
    console.log(suggestion)
  }

  
  const onchangeHandler=(text)=>{
    let matches=[]
    if (user.length>0) {
      matches=user.filter(usr=>{
        const refex=new RegExp(`${text}`,"gi"); 
        return usr.email.match(refex)
      })
    }
    console.log('match',matches)
    setsuggestion(matches)
    setText(text)
  }
  // console.log(text)
  return (
    <div className="container">
      <input className='col-md-12' style={{marginTop: 20 }} type="text"onChange={(event)=>onchangeHandler(event.target.value)} value={text}
      onBlur={()=>{
        setTimeout(() => {
          setsuggestion([])
        }, 100);
      }}></input>
     {/* <h1>{text}</h1> */}
     <div className="boxsug">
     {suggestion && suggestion.map((item,acc)=>
        <div key={acc} className=" col-md-12 suggestion" onClick={()=>onsugestion(item.email)}>{item.email}</div>
     )}
     </div>
    </div>

  );
}

export default App;
