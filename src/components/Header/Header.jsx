import React from "react"
import * as S from "./StyleHeader"
import Logo from "./imagensHeader/logo.png"
import Jogos from "./imagensHeader/jogos.png"
import Programacao from "./imagensHeader/programação.png"

function Header(){
    return(
        <S.HeaderStyle>
            <img src={Logo} alt="Logo Cartoon Network" />

            <S.Section>
                <S.Div>
                    <S.Img src={Jogos} alt="Ícone de console" />
                    <h2>JOGOS</h2>
                </S.Div>

                <S.Div>
                    <S.Img src={Programacao} alt="Ícone de relógio" />
                    <h2>PROGRAMAÇÃO</h2>
                </S.Div>
            </S.Section>
        </S.HeaderStyle>
    )
}

export default Header