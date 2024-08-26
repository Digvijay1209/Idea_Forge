import React, { useEffect ,useState} from 'react';

import axios from 'axios';


import './App.css';

const App = () => {
    
    const [advice,setAdvice]=useState('');

    useEffect(()=>{
    fetchAdvice();
    },[]);

    const fetchAdvice=()=>{

        const randomAdvice=Math.floor(Math.random()*200)+1;
       axios.get(`https://api.adviceslip.com/advice/${randomAdvice}`)
       .then((response)=>
       {
          const data=response.data.slip.advice;
          setAdvice(data);
       }
    )
       .catch((err)=>{
        console.log(err);
       });

    }

  return (
    <div className="app">
     <div className="card">
     <h1 className="heading">{advice}</h1>
     <button className="button" onClick={fetchAdvice}>
        <span>GIVE ME ADVICE </span>
     </button>
     </div>
    </div>
  )
}

export default App