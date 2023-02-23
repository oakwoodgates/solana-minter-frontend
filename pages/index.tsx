import Head from 'next/head'
import { Box, Center, Spacer, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Buildoors</title>
        <meta name="The NFT Collection for Buildoors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        w="full"
        h="calc(100vh)"
        bgImage={"url(/home-background.svg)"}
        backgroundPosition="center"
      >
        <Stack w="full" h="calc(100vh)" justify="center">
          { /* NavBar */ }

          <Spacer />
          <Center>
            { /* If connected, the second view, otherwise the first */ }
          </Center>
          <Spacer />

          <Center>
            <Box marginBottom={4} color="white">
              <a
                href="https://github.com/oakwoodgates/"
                target="_blank"
                rel="noopener noreferrer"
              >
                built by @oakwoodgates
              </a>
            </Box>
          </Center>
        </Stack>
      </Box>
    </div>
  )
}

export default Home
