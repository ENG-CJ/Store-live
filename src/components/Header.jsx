import styles from '../css/header.module.css'

const Header=()=>{
    return(
       <div className={styles.container}>
           <div className={styles.nav}>
                <a className={styles.brand_header}>AAROO POS RESTAURANT</a>
                <nav>
                    <ul>
                        <li className={styles.settings}>
                        <i class="fa-solid fa-gear" style={{
                            color: "#2C3333",
                            opacity: "0.6"
                        }}></i> Settings</li>
                        <li><span className={styles.logout}>
                        <i class="fa-solid fa-arrow-right-from-bracket"></i> Sign Out</span></li>
                    </ul>
                </nav>
           </div>
       </div>
    )
}
export default Header;