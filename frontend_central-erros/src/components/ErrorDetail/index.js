import React, {useState} from "react";
import { Link } from "react-router-dom";

import "./ErrorDetail.css"

import api from "../../services/api"

export default function Detail({ history }) { 

  return (
  <div className="container-error-detail">
    <div className="container-error-title">
        
            <Link to="/main">
                <button>Voltar</button>
            </Link>
        
        <h2>Erro no servidor 10.01.2</h2>
    </div>
    <div className="container-body">
        <div className="container-describe">
        
            <div className="container-body-title">
                <h4>Título</h4>
                <p> Ocorreu um erro no servidor 10.01.2 as 2019-12-21 08:35:47.726 
                o erro ocorreu de madrugada</p>
            </div>
            <div className="container-body-detail">
                <h4>Detalhes</h4>
                <p>org.h2.engine.Session.prepareCommand(Session.java:595) ~[h2-1.4.200.jar:1.4.200]
                org.h2.engine.Session.prepareCommand(Session.java:200) ~[h2-1.4.200.jar:1.4.100]
                org.h2.engine.Session.prepareCommand(Session.java:100) ~[h2-1.4.200.jar:1.4.50]</p>
            </div>
        
        </div>
            <div className="container-body-infos">
            <p>debug</p>

            <h5>Eventos</h5>
            <p>1000</p>
            
            <h5>Coletado por</h5>
            <p>Token do Usuário: bXq12w4evcO9TEuYfBsC</p>
            </div>
    </div>
  </div>
);
}