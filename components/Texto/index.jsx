import {Comic_Neue, Dancing_Script } from 'next/font/google'
import styles from './Texto.module.css'

const comicNeue = Comic_Neue({
    weight: '700',
    subsets: ['latin'],
    display: 'swap'
})

const dancingScript = Dancing_Script({
    weight: 'variable',
    subsets: ['latin'],
    display:'swap'
})


export default function Texto(){
    return(
        <div className={`pl-2 pr-2 ${styles.txtContent}`}>
            <p className={`${comicNeue.className} text-center text-cinza`}>Estamos felizes com a chegada do nosso 1º bebê e você é nosso convidado para participar desse momento tão especial.</p>
            <p className={`${comicNeue.className} text-center text-cinza`}>Vamos descobrir juntos se teremos</p>
            <p className={`${comicNeue.className} text-center text-cinza`}><span className={`${dancingScript.className} ${styles.txtNome} text-rosa`}>Giovanna</span> ou <span className={`${dancingScript.className} ${styles.txtNome} text-verde`}>Matheus</span> em nossas vidas!</p>
            <p className={`${comicNeue.className} text-center text-cinza`}>O Nosso</p>
            <p className={`${dancingScript.className} ${styles.txtRevela} text-center text-verde`}>Chá Revelação</p>
            <p className={`${comicNeue.className} text-center text-cinza`}>será no dia 19 de agosto de 2023</p>
            <p className={`${dancingScript.className} ${styles.txthora} text-center text-rosa`}>Sábado às 13h30</p>
            <p className={`${comicNeue.className} text-center text-cinza`}>Em São Joaquim</p>
            <p className={`${comicNeue.className} text-center text-cinza`}>Confirme sua presença até o dia 15/08.</p>
        </div>
    )
}