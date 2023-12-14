// 'use client'

import {
  Box,
  Flex,
  Button,
  //   useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  HStack
} from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { signIn, signOut, initJuno, authSubscribe } from "@junobuild/core-peer"
import { useState, useEffect } from "react"
// import { useRouter } from "next/router"
// import { User } from "@junobuild/core"

// function extractLastText(url: string) {
//   const regex = /\/([^\/]+)$/;
//   const match = regex.exec(url);

//   if (match) {
//       return match[1];
//   } else {
//       return null;
//   }
// }

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode()
  const [isSignedIn, setIsSignedIn] = useState(false)
  // const [user, setUser] = useState<User | null>()
  //   const { isOpen, onOpen, onClose } = useDisclosure()
  // const router = useRouter()

  useEffect(() => {
    initJuno({
      satelliteId: "xqne3-5aaaa-aaaal-adcpq-cai"
    })
    const isSignedIn = localStorage.getItem('isSignedIn')
    if (isSignedIn === 'true') {
      setIsSignedIn(true)
    } else {
      setIsSignedIn(false)
    }
    authSubscribe(user => {
      console.log(user)
    })
    // const link = extractLastText(window.location.href)
  }, [])
  // authSubscribe(user => {
  //   setUser(user)
  // //   console.log("User:", user)
  // })
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} position="fixed" px={4} w={"100%"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box fontSize={"28px"} fontWeight={"bold"} fontFamily={"cursive"}>LinkTree</Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              {isSignedIn ? (
                <HStack spacing={6}>
                  <Button
                    onClick={async () => {
                      await signOut()
                      // router.push("/")
                      window.location.href = "/"
                      setIsSignedIn(false)
                      localStorage.removeItem('isSignedIn')
                    }}
                  >
                    SignOut
                  </Button>
                  <Button
                  onClick={() => {
                    window.location.href = "/detailspage"
                  }}
                >
                  Start
                </Button>
                </HStack>
              ) : (
                <Button
                  onClick={async () => {
                    if(window.location.href !== "/") {
                      await signIn()
                    } else {
                      await signIn()
                      window.location.href = "/detailspage"
                    }
                    setIsSignedIn(true)
                    localStorage.setItem('isSignedIn', 'true') 
                  }}
                >
                  SignIn
                </Button>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
