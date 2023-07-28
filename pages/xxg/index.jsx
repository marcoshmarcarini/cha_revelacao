import Urso from "@/components/Urso";
import Texto from "@/components/Texto";
import FraldasP from "@/components/FraldaP";
import Botoes from "@/components/Botoes";

export default function xxg(){
    return(
        <div  className={`flex flex-col items-center justify-center h-screen`}>
            <Urso />
            <Texto />
            <FraldasP tamanho={'XXG'} />
            <Botoes />
        </div>
    )
}