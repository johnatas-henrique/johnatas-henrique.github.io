import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const ProjectGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" align="center">
    <NextLink href={`/projects/${id}`} passHref>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          width="100%"
          height="60%"
          layout="responsive"
          objectFit="contain"
        />
        <LinkOverlay href={`/projects/${id}`}>
          <Text mt={2} fontSize={24}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={16} align="justify">
          {children}
        </Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
    .grid-item-thumbnail {
      border-radius: 24px;
    }
    `}
  />
)
