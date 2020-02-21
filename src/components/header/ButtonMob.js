import React from 'react';
import { findByLabelText } from '@testing-library/react';


export default class ButtonMob extends React.Component {


    //Metodo construtor para trabalhar com estado

    constructor()
    {
        //classe super para trabalhar com estado
        super();
        this.state={
            visNav:'Flex',
        }
    }

    //esse metodo fará a função toggle
    clickMe(){
        //se visNav for = a flex 

        if(this.state.visNav === 'flex'){
            this.setState({
                visNav:'none'
            });
        }else{
                this.setState({
                    visNav:'flex'});            
        }

        document.querySelector(".nav").style.display=this.state.visNav;
        }

    render() {
        return (
            
            //bind informa que esta função esta atrelada com essa classe

            <div className="buttonMob" onClick={this.clickMe.bind(this)}>
                <img src="/img/botao.png" alt="botao mobile"/>
            </div>
            
        );
    }
}
