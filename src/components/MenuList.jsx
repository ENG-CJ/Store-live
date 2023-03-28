
import styles from '../css/content.module.css'
import Button from './Button';
import Card from './Card';


const MenuList=()=>{

    return(
        <section className={styles.container}>
        <h3>Menus Offer</h3>
            <div className={styles.content}>
                <div className={styles.row}>
                   
                    <div className={styles.menu_list}>
                        <Card radius={7}>
                         <div className={styles.card_body}>
                         <div className={styles.image}>
                            <img src='../images/sandwitch.jpg'/>
                            </div>
                            <div className={styles.details}>
                                <span>Salaad Hajio</span>
                                <p>Fresh Father Sakad Food</p>
                            </div>
                            <div className={styles.actions}>
                          
                            </div>
                         </div>
                        </Card>
                    </div>
                    <div className={styles.menu_list}>
                        <Card radius={7}>
                         <div className={styles.card_body}>
                         <div className={styles.image}>
                            <img src='../images/sandwitch.jpg'/>
                            </div>
                            <div className={styles.details}>
                                <span>Salaad Hajio</span>
                                <p>Fresh Father Sakad Food</p>
                            </div>
                            <div className={styles.actions}>
                          
                            </div>
                         </div>
                        </Card>
                    </div>
                    <div className={styles.menu_list}>
                        <Card radius={7}>
                         <div className={styles.card_body}>
                         <div className={styles.image}>
                            <img src='../images/sandwitch.jpg'/>
                            </div>
                            <div className={styles.details}>
                                <span>Salaad Hajio</span>
                                <p>Fresh Father Sakad Food</p>
                            </div>
                            <div className={styles.actions}>
                          
                            </div>
                         </div>
                        </Card>
                    </div>
                    <div className={styles.menu_list}>
                        <Card radius={7}>
                         <div className={styles.card_body}>
                         <div className={styles.image}>
                            <img src='../images/sandwitch.jpg'/>
                            </div>
                            <div className={styles.details}>
                                <span>Salaad Hajio</span>
                                <p>Fresh Father Sakad Food</p>
                            </div>
                            <div className={styles.actions}>
                          
                            </div>
                         </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default MenuList;