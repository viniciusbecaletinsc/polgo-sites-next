import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'

import PolgoPromoImg from '@/app/(site)/assets/polgo-promo.webp'

export function Hero() {
  return (
    <Flex as="section" minH="100vh" alignItems="center">
      <Container
        w="100%"
        maxW="calc(100vw - ((100vw - 1200px) / 2))"
        ml="auto"
        mr="0"
        pr="0"
      >
        <Flex flexDirection={['column', 'column', 'row']} alignItems="center">
          <Box>
            <Heading>
              Aumente as vendas do seu supermercado com a Polgo.
            </Heading>
            <Text>
              Supermercados e Atacadistas <br /> Descubra como líderes do seu
              setor alcançaram resultados supreendentes com nossa ajuda.
            </Text>
          </Box>
          <Box>
            <Image src={PolgoPromoImg} alt="" />
          </Box>
        </Flex>
      </Container>
    </Flex>
  )
}
