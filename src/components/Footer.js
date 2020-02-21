import React from 'react';


export default class Footer extends React.Component {
    render() {
        return (

            <div className="footer">
            <div>
                <img src="/img/logomarcaFooter.png" alt="Logomarca Consultorio Medico"/>
            </div>
            <div>
                Endereço: rua teste, n, bairro - SP<br/>
                Telefone: (xx)xxxx-xxxx<br/>
                Email: consultoriomedico@consultoriomedico.com.br
            </div> 

            </div>

            
        );
    }
}
