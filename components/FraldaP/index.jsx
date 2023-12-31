import { Dancing_Script } from "next/font/google"
import styles from "./FraldasP.module.css"

const dancingScript = Dancing_Script({
    weight: 'variable',
    subsets: ['latin'],
    display:'swap'
})

export default function FraldasP({tamanho}){
    return(
        <div className={`flex justify-center ${styles.fraldasContent}`}>
            <p className={`${dancingScript.className} ${styles.txtFralda} text-center text-verde`}>Fralda {tamanho}</p>
        </div>
    )
}