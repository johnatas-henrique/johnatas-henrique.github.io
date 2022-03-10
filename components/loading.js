import { useColorModeValue } from "@chakra-ui/react";
import { PacmanLoader } from "react-spinners";
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react'

const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content:center;
  height:80vh;
`

const Paragraph = styled.p`
  text-align: justify;
  margin-top: auto;
  font-size: 3em;
`

const Loading = () => (
  <Container>
    <PacmanLoader
      size={75}
      color={useColorModeValue('#171923', '#ffffff')}
      css={css`
          top: 0;
          left: 0;
          `}
    />
    <Paragraph>Carregando...</Paragraph>
  </Container>
)

export default Loading;
