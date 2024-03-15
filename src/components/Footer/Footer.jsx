import React from "react"
import * as S from "./StyleFooter"
import WB from "./imagensFooter/Warner.png"
import GitHub from "./imagensFooter/GitHub.png"
import LinkedIn from "./imagensFooter/LinkedIn.png"

export default function Footer(){
    return(
        <footer>
            <S.PrimeiraSectionFooter>
                <img src={WB} alt="" />

                <S.Ul>
                    <li>Sobre nós</li>
                    <li>Produtos</li>
                    <li>Personagens</li>
                </S.Ul>

                <S.Div>
                    <img src={GitHub} alt="" />
                    <img src={LinkedIn} alt="" />
                </S.Div>

            </S.PrimeiraSectionFooter>

            <S.SegundaSectionFooter>
                <p>© 2024 Cartoon Network</p>
            </S.SegundaSectionFooter>

        </footer>
    )
}