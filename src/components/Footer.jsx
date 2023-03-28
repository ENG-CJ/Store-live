import styles from '../css/footer.module.css'

const Footer=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.footer_grid}>
                <div className={styles.footer}>
                    <p>Copyright @ENG-CJ | Software Developer</p>
                    <div className={styles.footer_links}>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-whatsapp"></i>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Footer;