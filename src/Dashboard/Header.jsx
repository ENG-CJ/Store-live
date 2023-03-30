import { Settings, ShoppingBag } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import styles from "./main.module.css";


const Header=()=>{
    return(
        <div className={styles.header}>
           <div className={styles.header_content}>
                <div className={styles.brand}>
                    <ShoppingBag/>
                </div>
                <div className={styles.left_content}>
                    <ul>
                    <Settings size="small" className={styles.setting}/> <li>Settings</li>
                        <li>Logout</li>
                        <li><Avatar src="../../images/me.jpeg" label="User"/></li>
                    </ul>
                </div>
                
           </div>
        </div>
    )

}
export default  Header;