import React from 'react';
import Swal from 'sweetalert2';
import './Contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const templateId = 'template_8fvpOQf0';
    const { name, email, message } = this.state;
    this.sendFeedback(templateId, {
      from_name: name,
      reply_to: email,
      message_html: message,
    });
    this.setState({
      name: '',
      email: '',
      message: '',
    });
  }

  sendFeedback(templateId, variables) {
    Swal.fire({ title: 'Mensagem enviada com sucesso', icon: 'success', heightAuto: false });
    /* window.emailjs.send('gmail', templateId, variables)
      .then((res) => {
        Swal.fire({ title: 'Email Successfully Sent', icon: 'success' });
      })
      .catch((err) => console.error('Email Error:', err)); */
  }

  render() {
    return (
      // Form layout that requires a Name, Email, and message
      <form>
        <input type="text" className="form-control" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Nome" />
        <input type="email" className="form-control" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Email" />
        <textarea type="text" name="message" className="form-control" onChange={this.handleChange} value={this.state.message} placeholder="Escreva sua mensagem..." />
        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Send</button>
      </form>
    );
  }
}

export default Contact;
