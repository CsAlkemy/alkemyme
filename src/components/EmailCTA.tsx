/** @jsx jsx */

import { FC } from 'react'
import { Box, Flex, Styled, jsx } from 'theme-ui'
type EmailCTAProps = {
  tags?: string[]
}

export const EmailCTA: FC<EmailCTAProps> = ({ tags = [] }) => (
  <Box
    sx={{
      marginBottom: 4,
      //   maxWidth: '80%',
      mx: 'auto',
    }}
  >
    <Flex
  
    >

    </Flex>
  </Box>
)
