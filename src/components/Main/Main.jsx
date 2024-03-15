import React, {useState} from "react"
import Scooby from "./imagensMain/Scooby.png"
import Ben10 from "./imagensMain/Ben10.png"
import Looney from "./imagensMain/Looney.png"

import Gumball from "./imagensMain/Gumball.png"
import Meninas from "./imagensMain/Meninas.png"
import TomJerry from "./imagensMain/TomeJerry.png"

import * as S from "./StyleMain.jsx"
import Programacao from "../Programação/Programacao.jsx"


function Main(){

    const [galeria, setGaleria] = useState([
        Gumball,
        Meninas,
        TomJerry
    ])

    return(
        <main>
            <S.PrimeiraSection>
                <img src={Scooby} alt="Desenho animado Scooby-Doo" />
                <img src={Ben10} alt="Desenho animado Ben 10" />
                <img src={Looney} alt="Desenho animado Looney Tunes" />
            </S.PrimeiraSection>

            <S.SegundaSection>
                {galeria.map((item)=>(
                    <img src={item} alt="" />
                ))}
            </S.SegundaSection>

            <Programacao />

        </main>
    )
}

export default Main