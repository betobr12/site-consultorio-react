import React from 'react';
import {Link} from 'react-router-dom';

import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class Nav extends React.Component {
    render() {
        return (

            <div className="nav">
                <Link to="/">Home</Link>                
                <AnchorLink href='#informationText' offset='22'>Informações</AnchorLink>
                <AnchorLink href='#mapa' offset='50'>Mapa</AnchorLink>    
                <AnchorLink href='#contact' >Contato</AnchorLink>
                            
                
            </div>
            
        )
    }
}
