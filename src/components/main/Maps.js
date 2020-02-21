import React from 'react';


export default class Maps extends React.Component {
    render() {
        return (

            <div className="maps">
                <h1 id="mapa">CONHEÇA NOSSO LOCAL:</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14638.980857819044!2d-46.54515251355678!3d-23.46965319522936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef5425342cf33%3A0x4865a7fbac437982!2sUniClin!5e0!3m2!1spt-BR!2sbr!4v1581444324472!5m2!1spt-BR!2sbr"  allowfullscreen=""></iframe>
            </div>
            
        )
    }
}
