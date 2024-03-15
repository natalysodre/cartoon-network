import React, {useState} from "react"
import Dexter from "./imagensProgramacao/Dexter.png"
import VacaFrango from "./imagensProgramacao/VacaFrango.png"
import DuDuduEdu from "./imagensProgramacao/DuDuduEdu.png"
import Coragem from "./imagensProgramacao/Coragem.png"
import Jorel from "./imagensProgramacao/Jorel.png"
import Monica from "./imagensProgramacao/Monica.png"
import Steven from "./imagensProgramacao/Steven.png"
import BillyMandy from "./imagensProgramacao/BillyMandy.png"
import * as S from "./StyleProgramacao"

export default function Programacao(){
    const [desenhos, setDesenhos] = useState([
        {hora: "07:00h", espaço: "-", nome: "O LABORATÓRIO DE DEXTER", imagem: Dexter, desenhoManha: true},
        {hora: "08:00h", espaço: "-", nome: "A VACA E O FRANGO", imagem: VacaFrango, desenhoManha: true},
        {hora: "09:00h", espaço: "-", nome: "DU, DUDU E EDU", imagem: DuDuduEdu, desenhoManha: true},
        {hora: "10:00h", espaço: "-", nome: "CORAGEM, O CÃO COVARDE", imagem: Coragem, desenhoManha: true},
        {hora: "11:00h", espaço: "-", nome: "IRMÃO DO JOREL", imagem: Jorel, desenhoManha: true},
        {hora: "12:00h", espaço: "-", nome: "TURMA DA MÔNICA JOVEM", imagem: Monica, desenhoManha: false},
        {hora: "13:00h", espaço: "-", nome: "STEVEN UNIVERSO", imagem: Steven, desenhoManha: false},
        {hora: "14:00h", espaço: "-", nome: "BILLY E MANDY", imagem: BillyMandy, desenhoManha: false}   
    ])

    //Todos os desenhoManha que forem TRUE, vão ser armazenados em uma nova lista (desenhoTurnoManha)

    const desenhoTurnoManha = desenhos.filter((item)=> item.desenhoManha === true)

    return(
        <section>
            <S.SectionMap>
                {desenhos.map((item)=>(
                    <S.Card>
                        <S.H3> {item.hora} </S.H3>
                        <S.H3> {item.espaço} </S.H3>
                        <S.H3> {item.nome} </S.H3>
                        <img src={item.imagem} alt={item.nome} />
                    </S.Card>
                ))}
            </S.SectionMap>

            <S.SectionFilter>
                <S.Div>
                    <h2>PROGRAMAÇÃO DA MANHÃ:</h2>
                </S.Div>
                {desenhoTurnoManha.map((item)=>(
                    <S.CardManha>
                        <S.H3> {item.hora} </S.H3>
                        <S.H3> {item.espaço} </S.H3>
                        <S.H3> {item.nome} </S.H3>
                        <img src={item.imagem} alt={item.nome} />
                    </S.CardManha>
                ))}
            </S.SectionFilter>
        </section>
    )
}