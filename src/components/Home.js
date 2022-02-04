import React, { Component } from 'react';
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCardTitle } from 'mdbreact';
import About from './About';
import ProductCard from './Product-card';
import coxinha from '../assets/images/a2d776612246d598c744792a62711a11_XL.jpg'
import enroladinho from '../assets/images/unnamed.jpg';
import pastelFrango from '../assets/images/pastel-frango-com-catupiry.jpg';
import croquete from '../assets/images/croquete-de-carne.jpg';    
import empadinha from '../assets/images/209041939_332096688532498_4563438401343223032_n-1024x1024.jpg';
import pastelAssado from '../assets/images/Pastel-Assado-Rápido-500x375.jpg';


export default class Home extends Component {
    render() {
        return (
            <>
                <MDBContainer id="jumboSalgado" className="col-md-12">
                    <MDBRow>
                        <MDBCol>
                        <MDBJumbotron className="jumbotronSalgados">
                            <MDBCol className="text-white text-center ">
                            <MDBCol className="">
                                <div className="name-hook">
                                    <MDBCardTitle className="company-name">
                                        Elidas Salgados
                                    </MDBCardTitle>
                                    <MDBCardTitle className="hook-text">Feitos com 
                                        {/* O MELHOR SALGADO DE CONS. PENA */}
                                    </MDBCardTitle>
                                </div>
                                <div className="description">
                                    <MDBCardTitle className="h1-responsive jumbo-text  font-bold">
                                        <MDBCardTitle className="highlights">AMOR <div className="andSymbol">&</div></MDBCardTitle>                                                              
                                        <MDBCardTitle className="highlights">CARINHO </MDBCardTitle> 
                                    </MDBCardTitle>       
                                </div>                         
                                {/* <MDBBtn outline color="white" className="mb-5"><MDBIcon icon="clone" className="mr-2"></MDBIcon> View project</MDBBtn> */}
                            </MDBCol>
                            </MDBCol>
                        </MDBJumbotron>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <About/>
                <br />
                <div className="container-fluid products-container-desk">
                    <h2 className="favProducts">Nossos Salgadinhos Favoritos!</h2>
                    <div className="card-group">
                        <ProductCard
                            productName={"Coxinha"}
                            img={coxinha}
                            descr={"Deliciosamente brasileira, a nossa coxinha sempre vai bem a qualquer hora do dia."}
                        />
                        <ProductCard
                            productName={"Enroladinho"}
                            img={enroladinho}
                            descr={"O classico enroladinho de salsicha feito com o carinho e amor da Tia Elida."}
                        />
                        <ProductCard
                            productName={"Pastel de Frango c/ Catupiry"}
                            img={pastelFrango}
                            descr={"Um salgado perfeito para um café da tarde reforçado."}
                        />                    
                    </div>
                    <div className="card-group">
                        <ProductCard
                            productName={"Croquete de Carne"}
                            img={croquete}
                            descr={"Delicioso e quentinho, o nosso croquete de carne é ideal para todo tipo de ocasião e para todo tipo de fome."}
                        />
                        <ProductCard
                            productName={"Pastel Assado"}
                            img={pastelAssado}
                            descr={"Um salgado assado delicioso e quentinho para sua festa no sabor queijo e presunto."}
                        />
                        <ProductCard
                            productName={"Empadinha"}
                            img={empadinha}
                            descr={"O nível perfeito de umidade do recheio, e claro, a azeitona, que não pode faltar."}
                        />
                    </div>
                </div>
                <div className="container products-container-mobile">
                    <h2 className="favProducts">Nossos Salgadinhos Favoritos!</h2>
                    <div className="card-deck">
                        <ProductCard
                            productName={"Coxinha"}
                            img={coxinha}
                            descr={"Deliciosamente brasileira, a nossa coxinha sempre vai bem a qualquer hora do dia."}
                        />
                        <ProductCard
                            productName={"Enroladinho"}
                            img={enroladinho}
                            descr={"O classico enroladinho de salsicha feito com o carinho e amor da Tia Elida."}
                        />
                                           
                    </div>
                    <br />
                    <div className="card-deck">
                        <ProductCard
                            productName={"Croquete de Carne"}
                            img={croquete}
                            descr={"Delicioso e quentinho, o nosso croquete de carne é ideal para todo tipo de ocasião e para todo tipo de fome."}
                        />
                        <ProductCard
                            productName={"Pastel Assado"}
                            img={pastelAssado}
                            descr={"Um salgado assado delicioso e quentinho para sua festa no sabor queijo e presunto."}
                        />
                    </div>
                    <br />
                    <div className="card-deck">
                        <ProductCard
                            productName={"Pastel Frango/Catupiry"}
                            img={pastelFrango}
                            descr={"Um salgado perfeito para um café da tarde reforçado."}
                        /> 
                        <ProductCard
                            productName={"Empadinha"}
                            img={empadinha}
                            descr={"O nível perfeito de umidade do recheio, e claro, a azeitona, que não pode faltar."}
                        />
                    </div>
                </div>
                <br />
            </>
        )
    }
}
