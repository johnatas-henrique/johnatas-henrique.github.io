import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { PortfolioContext } from '../context/Portfolio';
import StyledContact from './Contact.styled';
import whatsapp from '../images/whatsapp.png';
import gitHub from '../images/githubBlack.png';
import linkedIn from '../images/linkedinBlue.png';

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
      <div className="flex-container">
        <h1 className="title">ENTRE EM CONTATO</h1>
        <div className="form-contact">
          <form onSubmit={(event) => handleSubmit(
            { name, email, message }, { setName, setEmail, setMessage }, event,
          )}
          >
            <input
              type="text"
              name="name"
              onChange={(event) => setName(event.target.value)}
              value={name}
              placeholder="Seu nome"
              required
            />
            <input
              type="email"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              placeholder="Seu e-mail"
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
            <br />
            <button className="btn" type="submit">Enviar!</button>
          </form>
        </div>
        <div className="text">
          <h4 className="contact-text">
            Se gostou do que viu ou deseja entrar em contato, fique a
            vontade que eu respondo o mais breve possível.
          </h4>
          <h4 className="contact-text">
            Caso ache melhor, pode me encontrar também nas redes sociais:
          </h4>
          <h4 className="contact-icon">
            <a href="https://tinyurl.com/y3udj3hr" target="_blank" rel="noopener noreferrer">
              <img className="icon" src={whatsapp} alt="WhatsApp logo" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/johnatashenrique/">
              <img className="icon" src={linkedIn} alt="LinkedIn Logo" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/johnatas-henrique">
              <img className="icon" src={gitHub} alt="GitHub Logo" />
            </a>
          </h4>
        </div>
      </div>
    </StyledContact>
  );
};

export default Contact;
