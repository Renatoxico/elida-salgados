import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ownerImage from '../assets/images/onde-comprar-mini-salgados-para-festa.jpg'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

export class About extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="col-sm-12  flex-xs-column about-us">
                <div className="col-sm-6  align-items-center about-body">
                    <h1 className="about-title">Empresa</h1>
                    <p className="about-text">
                        A Central de Salgados tem no cardápio grande variedade de salgados fritos, 
                        assados e refinados além de tortas e doces. Atende festas, comemorações, 
                        coquetéis e casamentos na Grande Florianópolis.
                      Há duas décadas a Central de Salgados desenvolve um trabalho que une qualidade 
                      e preços diferenciados. Uma empresa familiar que aceita encomendas do tamanho 
                      do seu evento. Com uma equipe ágil e qualificada a Central de Salgados é garantia 
                      de qualidade e ótimos preços.</p>
                    <span className="about-highlight">O melhor salgado de Conselheiro Pena!</span>
                </div>
                <div className="col-sm-6 about-img">
                    <div className="border_on">
                        <img className="about-img" src={ownerImage} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default About
