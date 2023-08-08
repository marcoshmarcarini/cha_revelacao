import Link from "next/link";
import Image from "next/image";
import styles from "./Botoes.module.css"
import { Montserrat } from "next/font/google";

const mont = Montserrat({
    weight: '400',
    subsets: ['latin'],
    display: 'swap'
})

export default function Botoes(){
    const text = `Presença Confirmada.`
    const url = `https://wa.me/5528999248804/?text=${text.replace(' ', '%20')}`
    const localizacao = `https://goo.gl/maps/VZVwruZyXQhkNNLW6`

    return(
        <div className={`flex gap-5 ${styles.btnContent}`}>
            <Link href={url} className={`${styles.btn} ${mont.className} bg-verde hover:bg-green-600 transition`}>
                <Image src={`images/whats.svg`} width={20} height={20} /> Confirmar
            </Link>
            <Link href={localizacao} className={`${styles.btn} ${mont.className} bg-rosa hover:bg-pink-600 transition`}>
                <Image src={`images/local.svg`} width={20} height={20} /> Localização
            </Link>
        </div>
    )
}