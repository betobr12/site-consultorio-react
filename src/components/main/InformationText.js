import React from 'react';
import InformationItem from './InformationItem';


export default class InformationText extends React.Component {
    render() {
        return (


                <div className="informationText" id="informationText" >
                    <h1>NOSSO PROPÓSITO É CUIDAR DA SAÚDE DAS PESSOAS PARA QUE ELAS POSSAM VIVER MELHOR.</h1>
                    <ul>
                     Somos uma rede de clínicas que compreende a medicina e repensa a saúde para que a experiência de cuidar-se seja singular, segura e impecável. Estamos próximos aos nossos pacientes em clínicas interligadas pelo metrô e trem, e de um jeito simples e assertivo, trazemos inovações aos serviços que oferecemos, com conforto, alta tecnologia e competência médica, em um único lugar.
                    
                    </ul>

                    <div className="vantagens">
                    
                    <InformationItem image="a.png" alt="Otimo atendimento" text="Otima estrutura de atendimento"/>
                    <InformationItem image="b.png" alt="Otimo atendimento" text="Otima estrutura de atendimento"/>
                    <InformationItem image="c.png" alt="Otimo atendimento" text="Otima estrutura de atendimento"/>
                </div>

             </div>
        
                
         
            
            
        )
    }
}
