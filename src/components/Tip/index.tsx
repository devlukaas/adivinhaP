import styles from "./style.module.css"
import tipIcon from "../../assets/tip.svg"

type props = {
    tip: string
}



export function Tip( { tip}: props){
    return <div>
        <img src={tipIcon} alt="icone de dica " className={styles.icon} /></div>
}