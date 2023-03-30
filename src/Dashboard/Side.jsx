import styles from "./main.module.css";
import { Avatar, Divider } from "@mui/material";
import { CodeOutlined, Dashboard, DeveloperBoard } from "@mui/icons-material";
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
const Side=()=>{
    return(
        <div className={styles.sideBar}>
            <div className={styles.side_content}>
            <div className={styles.user_details}>
            <Avatar src="../../images/me.jpeg" size="large" label="User"/>
            <div className={styles.details}>
            <span className={styles.username}>ENG-CJ</span>
            <span className={styles.type}>@admin</span>
            </div>
            </div>

            <div className={styles.menuLists}>
                <div className={styles.menuItems}>
                    <div className={styles.item}>
                    <Dashboard fontSize="13" className={styles.icons}/>
                        <span>Dashboard</span>
                    </div>
                    <div className={styles.item}>
                  {/* <CodeOutlined/> */}
                    <SettingsSuggestIcon className={styles.icons} fontSize="15"/>
                        <span>Settings</span>
                    </div>
                </div>
            </div>


            </div>
        </div>
    )
}
export default Side;