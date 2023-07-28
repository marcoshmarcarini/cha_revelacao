import styles from './Urso.module.css'
import Image from 'next/image'

export default function Urso(){
    return(
        <div className={styles.Urso}>
            <Image src={`/images/ursinhov2.png`} width={350} height={350} alt={'Ursinho'} />
        </div>
    )
}