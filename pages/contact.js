import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { FormControl, FormLabel, Heading, Input, Link, Stack, Textarea, useColorModeValue } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import whatsapp from '../public/images/whatsapp.png';
import linkedIn from '../public/images/linkedin.png';
import Image from 'next/image';

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const isInputFilled = () => {
    if (name === '' || email === '' || message === '') return true;
    return false;
  }

  const sendEmail = (e) => {
    e.preventDefault();
    const messageObj = { from_name: name, reply_to: email, message_html: message };

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE,
      process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE,
      messageObj,
      process.env.NEXT_PUBLIC_EMAIL_JS_USER
    )
      .then(() => {
        Swal.fire({ title: 'Mensagem enviada com sucesso', icon: 'success', heightAuto: false });
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => console.error('Email Error:', err));
  };

  const isNameError = name === '';
  const isEmailError = email === '';
  const isMessageError = message === '';
  const githubImg = `/images/github${useColorModeValue('', '-dark')}.png`;

  return (
    <Layout>
      <form ref={form} onSubmit={sendEmail} color={useColorModeValue('gray200', 'whiteAlpha900')}>
        <Stack
          spacing={3}
          flexWrap='wrap'
          flexDirection='row'
          justifyContent='center'
          textAlign='center'
          mt={4}
        >
          <FormControl mt={3} w='100%' isInvalid={isNameError} isRequired>
            <FormLabel htmlFor='user_name' textAlign='center'>Nome</FormLabel>
            <Input
              type="text"
              id="user_name"
              _autofill='red'
              variant='filled'
              onChange={(event) => setName(event.target.value)}
              value={name}
              placeholder="Seu nome"
              color={useColorModeValue('gray200', 'whiteAlpha900')}
              maxW='container.xl'
              errorBorderColor='glassTeal'
              required
            />
          </FormControl>
          <FormControl w='100%' isInvalid={isEmailError} isRequired>
            <FormLabel htmlFor='user_email' textAlign='center'>E-Mail</FormLabel>
            <Input
              type="email"
              id='user_email'
              variant='filled'
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              placeholder="Seu e-mail"
              color={useColorModeValue('gray200', 'whiteAlpha900')}
              maxW='container.xl'
              errorBorderColor='glassTeal'
              required
            />
          </FormControl>
          <FormControl isInvalid={isMessageError} isRequired>
            <FormLabel htmlFor='user_message' textAlign='center'>Mensagem</FormLabel>
            <Textarea
              id='user_message'
              variant='filled'
              onChange={(event) => setMessage(event.target.value)}
              value={message}
              placeholder="Escreva sua mensagem..."
              color={useColorModeValue('gray200', 'whiteAlpha900')}
              maxW='container.xl'
              errorBorderColor='glassTeal'
              required
            />
          </FormControl>
          <Input
            type="submit"
            disabled={isInputFilled()}
            value="Enviar"
            color={useColorModeValue('whiteAlpha900', 'gray200')}
            background={useColorModeValue('orange', 'purple')}
            maxW='container.xl'
            cursor='pointer'
          />
        </Stack>
      </form>

      <div className="text">
        <Heading as='h4' mt={8} mx={4} textAlign='justify'>
          Se gostou do que viu ou deseja entrar em contato, fique à
          vontade que eu respondo o mais breve possível.
        </Heading>
        <Heading as='h4' mt={4} mx={4} textAlign='justify'>
          Caso ache melhor, pode me encontrar também nas redes sociais:
        </Heading>
        <Heading as='h5' display='flex' justifyContent='space-evenly' mt={10}>
          <Link target="_blank" w='10%' href="https://tinyurl.com/y3udj3hr" >
            <Image src={whatsapp} alt="WhatsApp logo" />
          </Link>
          <Link target="_blank" w='10%' href="https://www.linkedin.com/in/johnatashenrique/">
            <Image src={linkedIn} alt="LinkedIn Logo" />
          </Link>
          <Link target="_blank" w='10%' href="https://github.com/johnatas-henrique">
            <Image src={githubImg} width={100} height={100} alt="GitHub Logo" />
          </Link>
        </Heading>
      </div>

    </Layout>
  );
};

export default Contact;
