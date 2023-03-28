import { FormControl,InputLabel,Input,FormHelperText,AppBar, CssBaseline, Toolbar,Typography, Container, Alert,Avatar, Card,CardHeader, IconButton, CardMedia, CardActionArea, CardActions, CardContent, Modal, Box, FormGroup, TextField, FormLabel, Button} from "@mui/material"
import {Favorite, Home, LoginOutlined, MoreVert, PhotoCamera} from '@mui/icons-material'
// import { Favorite } from "@mui/icons-material"
import ME from '../../images/me.jpeg'
import { Action } from "@remix-run/router"
import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"

const  Login=()=>{
   
    const [username,setUsername]=useState(null);
    const [password,setPassword]=useState(null);
 
    const handleSubmit=()=>{
       if(username==null || username=="")
      
       toast.error("Username is Required...",{
        position: "top-center",
        theme: "colored"
        
      })
        else  if(password==null || password=="")
        toast.error("Password is Required...",{
            position: "top-center",
            theme: "colored"
            
          })
        else{
            fetch(`http://localhost:7000/users?username=${username}&password=${password}`)
            .then(res=>res.json())
            .then(data=>{
                if(Object.keys(data).length>0){
                    toast.success("Hi Welcome! ",{
                        position: "top-center",
                        theme: "colored"
                        
                      })
                }else
                 { 
                
                    toast.error("Incorrect Username ",{
                    position: "top-center",
                    theme: "colored"
                    
                  })}
            })
            .catch(err=>alert(err));
        }
          
    }


    return(
       <>
         <CssBaseline/>
         <ToastContainer
             theme="colored"

         />
      <AppBar position="relative">
        <Toolbar >
            <PhotoCamera/>
            <Typography variant="h6" sx={{ml: 2}} >
                Authentication Mode
            </Typography>

        </Toolbar>
      </AppBar>

      <Container maxWidth="sm">
    
            <Card variant="outlined" sx={{my: 5}}>
                <CardHeader
            avatar={
                <Avatar src={ME}
                    variant="rounded"
                >

                </Avatar>
               
           
            } action={
                    <IconButton >
                        <MoreVert />
                    </IconButton>
                }
                title="ENG-CJ | SOFTARE DEVELOOER"
                subheader="ReactJS Complete Material UI"
                />

            
<CardContent>
<FormGroup>
<FormControl color="error" sx={{my: 2}}>
<FormLabel color="success">Username</FormLabel>
  <TextField onChange={(e)=>setUsername(e.target.value)} placeholder="Hello" id="my-input" type="text" aria-describedby="my-helper-text" />
</FormControl>
<FormControl sx={{my: 2}} color="error">
<FormLabel color="success">Password</FormLabel>
  <TextField   onChange={(e)=>setPassword(e.target.value)}  placeholder="Hello" id="my-input" type="password" aria-describedby="my-helper-text" />
</FormControl>

<Button onClick={handleSubmit} startIcon={<LoginOutlined/>} variant="outlined" color="success" sx={{my:3, width: 100}}>
    Login
</Button>

</FormGroup>

</CardContent>
             
            </Card>

      </Container>
       </>

    )
}
export default Login;