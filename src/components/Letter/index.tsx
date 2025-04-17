import styles from "./styles.module.css"

type props = {
    value?: string


}



export function Letter({value = ""}: props){
    return (
        <div>
            <span>{value}</span>
        </div>
    )
}