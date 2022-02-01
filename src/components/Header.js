import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

import logo from '../assets/images/elidaSalgados[Novo-V2].png'
const Header = () => {
    return (
        <div>
            <Navbar expand="lg">
                <Container>
                    <Container>
                        <div className="logo">
                            <Nav.Link href="#Home">                        
                                <img className="App-logo" src={logo} alt="" />
                            </Nav.Link>
                        </div>
                    </Container>
                    <Container id="linkbar">
                        <Nav>
                            <Nav.Link href="#SobreNos"> Empresa</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#Produtos"> Produtos</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#Combos"> Combos</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#Contato"> Contato</Nav.Link>
                        </Nav>
                    </Container>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
