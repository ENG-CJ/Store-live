




import styles from '../css/card.module.css'


const Card=(props)=>{

    return(
       <div className={styles.card}
        style={
            {boxShadow: props.shadow, padding: props.padding,
             borderRadius: props.radius, width: props.width}}>
        {props.children}
       </div>

    )
}
export default Card;