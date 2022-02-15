import React, { Component } from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';

export class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            msg: ''    
        };

        this.nameChanged = this.nameChanged.bind(this);
        this.emailChanged = this.emailChanged.bind(this);
        this.msgChanged = this.msgChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    nameChanged(event) {
        this.setState({name: event.target.value});
    }

    emailChanged(event) {
        this.setState({email: event.target.value});
    }

    msgChanged(event) {
        this.setState({msg: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
    }

  render() {
    return <div className="contact">
        <br />
        <div className="container">
            <h3 className="order-title">Faça seu pedido AGORA!</h3>
            <button className="btn btn-success order-btn">
                <MDBIcon style={{ color: 'white' }} fab icon="whatsapp" />
                &nbsp;&nbsp;WhatsApp</button>
            <br />
            <hr style={{ color: 'white' }} />
            <h3 className="order-title">Nos envie uma mensagem!</h3>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name-text">Nome</label>
                    <input type="text" onChange={this.nameChanged} className="form-control" placeholder="Seu nome " id="name-text" />
                </div>
                <div className="form-group ">
                    <label htmlFor="email-text">E-mail</label>
                    <input type="text"  onChange={this.emailChanged} className="form-control" placeholder="Seu e-mail" id="email-text" />
                </div>
                <div className="form-group ">
                    <label htmlFor="contact-message">Deixe uma mensagem para nós!</label>
                    <textarea className="form-control" onChange={this.msgChanged} name="contact-message" id="contact-message" cols="30" rows="3"></textarea>
                </div>
                <button className="btn btn-submit" type="submit">Enviar</button>
            </form>
        </div>
    </div>;
  }
}

export default Contact;
