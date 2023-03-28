import styles from "../css/profile.module.css";
import Card from "./Card";
import Button from './Button'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {

    const handleSave=()=>{
        toast.info("Origin Removed😋");
    }
  return (
    <div className={styles.container}>
      <h6>My Profile</h6>
      <div className={styles.rows}>
        <div className={styles.profile_left}>
          <Card padding="20px" width="300px">
            <div className={styles.profile_image}>
              <img src="../images/me.jpeg" alt="Not" />
            </div>
            <div className={styles.profile_user}>
              <span className={styles.username}>@Abdulrahman Haaji</span>
              <p className={styles.type}>Super Admin</p>
            </div>
          </Card>
        </div>
        <div className={styles.profile_right}>
          <Card padding="20px" width="600px" shadow={"0px 0px 1px 0px"}>
                <div className={styles.form_group}>
                    <label for="">FullName</label>
                    <input type="text" value="abdulrahman Haaji"/>
                </div>
                <div className={styles.form_group}>
                    <label for="">username</label>
                    <input type="text" value="@ENG-CJ"/>
                </div>
                <div className={styles.form_group}>
                    <label for="">Occupation</label>
                    <input type="text" value="Software Developer"/>
                </div>
                <div className={styles.form_group}>
                    <label for="">Access Mode</label>
                    <input type="text" value="ITT H00 @TR"/>
                </div>
                <div className={styles.form_group}>
                  <Button text="Save Changes" width="220px" padding="12px" event={handleSave}/>
                  <ToastContainer
                  position="top-center"
                  closeOnClick
                  hideProgressBar={false}
                  pauseOnFocusLoss={false}
                  pauseOnHover={true}
                  theme='colored'
                  >

                  </ToastContainer>

                </div>
              
          </Card>
        </div>
      </div>
      <p>lorem sajskajk</p>
      <p>lorem sajskajk</p>
      <p>lorem sajskajk</p>
      <p>lorem sajskajk</p>
    </div>
  );
};
export default Profile;
