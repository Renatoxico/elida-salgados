import React, { Component } from 'react';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from 'mdbreact';
import About from './About';

export default class Home extends Component {
    render() {
        return (
            <>
                {/* <a id="#Home"/> */}
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
                                    <MDBCardTitle className="hook-text">
                                        {/* O MELHOR SALGADO DE CONS. PENA */}
                                    </MDBCardTitle>
                                </div>
                                <div className="description">
                                    <MDBCardTitle className="h1-responsive jumbo-text  font-bold">Feitos com 
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
            </>
        )
    }
}
