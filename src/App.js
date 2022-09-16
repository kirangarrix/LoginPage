import {useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {
   const [values,setvalues]=useState({
     email:"",
     password:""
   })

   
  const  inputs =[
    {
      id:1,
      name:"email",
      type:"email",
      errorMessage:"it should be a valid email address",
      label:"Email",
      required:true
    },
    {
      id:2,
      name:"password",
      type:"text",
      errorMessage:"passowrd shouldn't be empty",
      label:"Passoword",
      required:true
    }
  ]

  const handleSubmit=(e)=>{
    e.preventDefault();
    // const data=new FormData(e.target)
    // console.log(Object.fromEntries(data.entries()))
  }

  const onChange=(e)=>{
    setvalues({...values,[e.target.name]:e.target.value})
  }



  return (
    <div className="app">
      <div className='Headline'>
      <h1>Reserve Fishing For Weekend</h1>
      <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Please Login</h2>
        {inputs.map((input)=>(
        <FormInput key={input.id} {...input} value={values[input.name]}
        onChange={onChange}/>
        ))}
        <button>Continue</button>
        <a>forget passowrd</a>
      </form>
    </div>
  );
}

export default App;
