import Urso from "@/components/Urso";
import Texto from "@/components/Texto";
import FraldasP from "@/components/FraldaP";
import Botoes from "@/components/Botoes";

export default function xg(){
    return(
        <div  className={`flex flex-col items-center justify-center h-screen`}>
            <Urso />
            <Texto />
            <FraldasP tamanho={'XG'} />
            <Botoes />
        </div>
    )
}