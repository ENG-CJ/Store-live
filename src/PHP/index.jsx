
import { Save } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import $ from 'jquery';
import  './main.css'
const InitialValues={
    username :"",
    password :"",
}
const Index=()=>{

 
    const [values,setValues]=useState({
        username : "",
        password: "",
        action: "saveUser"
    });
    const submitData=(e)=>{
     $.ajax({
        method: "POST",
        data: values,
        dataType: "JSON",
        url : "http://localhost/react/api.react.php",
        success: (response)=>{
           alert(response.response);
        },
        error: (response)=>{
            console.log(response);
        }
     })
    }
    const handleChange=(e)=>{
      setValues({
        ...values,
        [e.target.name]: e.target.value
      })

    }
    return(
      <>
          <ToastContainer position='top-center'
/>
       <div className='container'>

     

          <form >
          <div className='form-group'>
                <label>Username</label>
                <input value={values.username} name="username" onChange={handleChange} className='username' type="text"/>
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input value={values.password} name="password" onChange={handleChange} className='pass' type="text"/>
            </div>
            <div className='form-group'>
               
              <Button onClick={submitData} className='btn' startIcon={<Save/>} variant="contained">Save</Button>
            </div>
          </form>
       </div>
      </>
    )
}
export default Index;