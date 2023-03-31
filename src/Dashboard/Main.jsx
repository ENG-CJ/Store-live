import { Add, FacebookRounded, GitHub, HtmlRounded, LinkedIn } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Fab,
  Tooltip,
  Typography,
  CircularProgress,
  Alert
} from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import styles from "./main.module.css";
const Main = (props) => {
    props.data.dev.forEach((value) =>{
        (value.programming_languages.map((v)=>console.log(v)))
    })
    
  return (
    <Container>
      <div className={styles.content_banner}>
        <Typography variant="h6" component={"h5"}>
          Most Developer Accurate
        </Typography>
        <span>Json Califies Most Pro Develpers In Board</span>

<ToastContainer

position="top-center"

/>
        <div className={styles.developer_container}>
          <div className={styles.dev_details}>
        
            {props.data.dev.length>0? props.data.dev.map((value) => {
               return(
                <Card key={value.username}>
                <CardHeader
                  avatar={<Avatar src={value.image} />}
                  action={
                  <Tooltip title="Follow This Developer">
                      <Fab>
                      <Link to={"/settings/"+value.username+'/'+value.name}><Add  /></Link>
                    </Fab>
                  </Tooltip>
                  }
                  title={`${value.username} | ${value.name}`}
                  subheader={`${value.position} | ${value.country} | ${value.University}`}
                ></CardHeader>
                <Divider />
                <CardContent>
                  <Typography variant="h6">Description</Typography>
                  <p>{value.description}</p>
                  <div className={styles.skills}>
                  <span>Language</span>
                 {
                    
                    value.programming_languages.map((v)=>{
                        
                      return(
                        <Chip
                        sx={{mr: 2}}
                        variant="outlined"
                      color="success"
                      clickable={true}
                     
                      label={" "+v+" "}
                    ></Chip>
                      )
                    
                    })
                 }
                      
                  
                  </div>
                </CardContent>
                <Divider />
                <CardActions>
                  <div className={styles.actions}>
                    <FacebookRounded />
                    <GitHub/>
                    <LinkedIn/>
                  </div>
                </CardActions>
              </Card>
               )
            }): 
<Alert color="error" severity="error">
   <strong>No Data Available For This Context</strong>
</Alert>}
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Main;
