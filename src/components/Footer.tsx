import React, { FC } from 'react'
import { Box, Flex, Styled } from 'theme-ui'

import { EmailForm } from './EmailForm'
import { Section } from './Section'
import { GitHub, LinkedIn, RSS, Twitter } from './Social'

type FooterProps = {}

export const Footer: FC<FooterProps> = () => (
  <Section secondaryBackground>
    <Flex
      sx={{
        flexDirection: ['column-reverse', 'row'],
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}
    >
      <Box
        sx={{
          flex: 1,
          width: '100%',
          textAlign: ['center', 'left'],
        }}
      >
        <Styled.h3
          sx={{
            display: ['none', 'block'],
          }}
        >
          Contact
        </Styled.h3>
        <GitHub />
        <LinkedIn />
        <Twitter />
        <RSS />
      </Box>
      <Box
        sx={{
          flex: 1,
          width: '100%',
          mb: [3, 0],
        }}
      >
        <Styled>
          <small style={{justifyContent:"center"}}>
             2020@ Alkemy made with love
          </small>
        </Styled>
      </Box>
    </Flex>
  </Section>
)
