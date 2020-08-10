import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { PortfolioContext } from '../context/Portfolio';
import StyledContact from './Contact.styled';

const sendFeedback = (templateId, variables) => {
  window.emailjs.send('gmail', templateId, variables)
    .then(() => {
      Swal.fire(
        { title: 'Mensagem enviada com sucesso', icon: 'success', heightAuto: false },
      );
    })
    .catch((err) => console.error('Email Error:', err));
};

const handleSubmit = (variables, functions, event) => {
  const { name, email, message } = variables;
  const { setName, setEmail, setMessage } = functions;
  event.preventDefault();
  const templateId = 'template_8fvpOQf0';
  sendFeedback(templateId, {
    from_name: name,
    reply_to: email,
    message_html: message,
  });
  setName('');
  setEmail('');
  setMessage('');
};

const Contact = () => {
  const { setLocation } = useContext(PortfolioContext);

  useEffect(() => {
    setLocation('Contato');
  }, [setLocation]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <StyledContact>
      <form onSubmit={(event) => handleSubmit(
        { name, email, message }, { setName, setEmail, setMessage }, event,
      )}
      >
        <input
          type="text"
          name="name"
          onChange={(event) => setName(event.target.value)}
          value={name}
          placeholder="Nome"
          required
        />
        <input
          type="email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          placeholder="Email"
          required
        />
        <textarea
          type="text"
          name="message"
          onChange={(event) => setMessage(event.target.value)}
          value={message}
          placeholder="Escreva sua mensagem..."
          required
        />
        <button type="submit">Enviar!</button>
      </form>
    </StyledContact>
  );
};

export default Contact;
