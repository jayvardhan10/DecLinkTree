// 'use client'
import { Link, Stack, Box, Text,  Center, Heading, useColorModeValue, HStack } from "@chakra-ui/react";
import {User} from "./types"
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { SocialIcon } from 'react-social-icons'

export default function Template({data}: {data: User}) {

    return (
        <Center py={6}>
          <Box
            // maxW={'270px'}
            // w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'md'}
            margin={"16"}
            overflow={'hidden'}>
            <Box p={6}>
              <Stack align={'center'} mb={5} spacing={8}>
                <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                   {data?.name}
                </Heading>
                <Text color={'gray.500'}>{data?.description}</Text>
              {/* </Stack>
              <Stack direction={'column'} align={'center'} spacing={6}> */}
                <Box w={'full'}>
                  <HStack>
                   <SocialIcon network="github" />
                    <Link isExternal href={data?.github_url}>Checkout my github<ExternalLinkIcon mx='2px'/></Link>
                  </HStack>
                </Box>
                <Box w={'full'}>
                  <HStack>
                   <SocialIcon network="linkedin" />
                    <Link isExternal href={data?.linkedin_url}>Checkout my linkedIn<ExternalLinkIcon mx='2px'/></Link>
                  </HStack>
                </Box>
                <Box w={'full'}>
                  <HStack>
                   <SocialIcon network="x" />
                    <Link isExternal href={data?.github_url}>Checkout my twitter<ExternalLinkIcon mx='2px'/></Link>
                  </HStack>
                </Box>
                <Box w={'full'}>
                  <HStack>
                   <SocialIcon network="medium" />
                    <Link isExternal href={data?.twitter_url}>Checkout my medium<ExternalLinkIcon mx='2px'/></Link>
                  </HStack>
                </Box>
                <Box w={'full'}>
                  <HStack>
                   <SocialIcon network="distrikt" />
                    <Link isExternal href={data?.github_url}>Checkout my distrikt<ExternalLinkIcon mx='2px'/></Link>
                  </HStack>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Center>
      );
}

// export default Template;