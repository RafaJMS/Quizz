import React, { useState } from "react";
import "./quiz.css"
import { Perguntas } from "../data/perguntas";

export default function Quizz(){
    const questions = Perguntas ?? []
    const [perguntaAtual,setPerguntaAtual] = useState(0)
    const [pontuacao, setPontuacao] = useState(false)
    const [pontos,setPontos] = useState(0)

    function proximaPergunta(correta){
        const proximaPergunta = perguntaAtual+1
        
        if(correta){
            setPontos(pontos + 1)
        }
        if(proximaPergunta < questions.length){
            setPerguntaAtual(proximaPergunta)
        }else{
           setPontuacao(true)}
    }
    
    return(
        
        <div className="container">
        <h1>Rafa's QUIZZ</h1>
        {pontuacao ? (
            <div className='pontuacao'>
                <span>Sua pontuação é {pontos} de {questions.length}</span>
            </div>
        ):(
        <>
        <div className='infoPerguntas'>
            <div className='contagemPerguntas'>
                <span>Pergunta {perguntaAtual + 1}/{questions.length}</span>
            </div>
            <div className='pergunta'>{questions[perguntaAtual].pergunta}</div>
        </div>
        <div className='resposta'>
            {questions[perguntaAtual].opcoesResposta.map((opcoesResposta) =>
            <div className='grupoResposta'>
                <span>{opcoesResposta.alternativa}</span>
                <button onClick={() => proximaPergunta(opcoesResposta.correta)}>{opcoesResposta.resposta}</button>
            </div>)}
            
        </div>
    </>
    )}
   </div>    
  )
}