import React from 'react';


export default class Logo extends React.Component {
    render() {
        return (

            <div className="logo">
                <picture>
                    <source media="(max-width:768px)" srcSet="/img/logomarcaM.png"/>
                    <source media="(min-width:769px)" srcSet="/img/logomarcaL.png"/>
                    <img src="/img/logomarcaL.png" alt="Logomarca Consultorio"/>

                </picture>
            </div>
            
        )
    }
}
