import React from 'react';


export default class Adress extends React.Component {
    render() {
        return (

            <div className="address">
                 <picture>
                    <source media="(max-width:768px)" srcSet="/img/whatsM.png"/>
                    <source media="(min-width:769px)" srcSet="/img/whatsL.png"/>
                    <img src="/img/whatsL.png" alt="Logomarca Consultorio"/>

                </picture>

               
                <strong>(xx)xxxx-xxxx</strong><br/>
                Modelo<br/>
                <strong>Mais Informações</strong> 
                
            </div>
            
        )
    }
}
