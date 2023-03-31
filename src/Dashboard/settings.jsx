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
// import { useParams } from "react";
// import { useParams } from " react-router";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import styles from "./main.module.css";
const Settings = () => {
   
    var {id,name}=useParams();
    console.log(id,name)
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
        
            
<Alert color="error" severity="error">
   <strong>No Data Available For This Context</strong>
</Alert>
          </div>


           </div>
      </div>

      
    </Container>

    
  );
};
export default Settings;
