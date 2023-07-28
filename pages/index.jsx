import Botoes from '@/components/Botoes'
import FraldasP from '@/components/FraldaP'
import Texto from '@/components/Texto'
import Urso from '@/components/Urso'


export default function Home(){
  return(
    <div className={`flex flex-col items-center justify-center h-screen`}>
      <Urso />
      <Texto />
      <FraldasP tamanho={'P'} />
      <Botoes />
    </div>
  )
}