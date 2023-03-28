
import styles from '../css/customButton.module.css'


const  Button=(props)=>{
    return(
        <button
        className={styles.custom_button}
        style={{
            color: props.color,
            background: props.back,
            padding: props.padding,
            borderRadius: props.radius,
            fontSize: props.size,
            width: props.width,
            border: props.border
        }}
        
        onClick={props.event==null ? console.log("Event nor provided"): props.event}
        >

{props.text}


        </button>
    )
}
export default Button;