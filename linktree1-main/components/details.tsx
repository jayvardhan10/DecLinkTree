// 'use client'

import {
  Button,
  Flex,
  FormControl, 
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
  Textarea,
  HStack,
  useToast,
  Spinner
} from '@chakra-ui/react'

import { useCallback, useEffect, useState } from "react";
import { type Doc, initJuno, setDoc, getDoc} from "@junobuild/core-peer";
import {User} from "./types"
import {useRouter} from "next/router"
import 'react-toastify/dist/ReactToastify.css';

type Record = {
  name : string,
  github_url ?: string;
  linkedin_url ?: string;
  twitter_url ?: string;
  medium_url ?: string;
  district_url ?: string;
};

const Details = () => {
    const [, setRecord] = useState<Doc<Record> | undefined>(undefined);
    const [loading, setLoading] = useState(false)
    const toast = useToast()

    const [user, setUser] = useState<User>({
      username:'',
      name: '',
      description: '',
      github_url: '',
      linkedin_url: '',
      twitter_url: '',
      medium_url: '',
      distrikt_url: ''
    });
    const router = useRouter();

    useEffect(() => {
        initJuno({
            satelliteId: "xqne3-5aaaa-aaaal-adcpq-cai"
        })
    },[])

    const checkUsername = useCallback(async (username: string) => {
      try {
          const doc = await getDoc({
              collection: "links",
              key: username
          });
          return doc !== null;
      } catch (error) {
          console.log(`error while checking username.......${error}`);
          return false;
      }
  },[]);

  const handleUsernameChange = async (e: any) => {
      const username = e.target.value;
      setUser({
          ...user,
          username: username
      });
      if (await checkUsername(username)) {
          console.log("username taken")
      }
  };

    const insert = useCallback(async () => {
      setLoading(true)
        try {
            const doc = await setDoc({
                collection: "links",
                doc: {
                  key: user.username,
                  data: {
                    name: user.name,
                    description: user.description,
                    github_url : user.github_url,
                    linkedin_url : user.linkedin_url,
                    twitter_url : user.twitter_url,
                    medium_url : user.medium_url,
                    district_url : user.distrikt_url
                  },
                },
          
              });
          
              setRecord(doc);
              toast({
                title: "File uploaded.",
                description: "Your file has been successfully uploaded.",
                status: "success",
                duration: 9000,
                isClosable: true,
              });
              router.push(`/${user.username}`)
              console.log(`submitted Successfully ${doc}`)
            
        } catch (error) {
          toast({
            title: "File upload failed.",
            description: "There was an error uploading your file.",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          console.log(`error while submitting the doc.......${error}`)
        } finally{
          setLoading(false)
        }
    },[user,toast, router]);

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      w={'full'}
      paddingTop={"12"}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <HStack  spacing={"12"}>
        <FormControl id="linktree_username" isRequired>
          <FormLabel>LinkTree username</FormLabel>
          <Input
            placeholder="UserName"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            value={user.username}
            onChange={handleUsernameChange}
          />
        </FormControl>
        <FormControl id="fullName" isRequired>
          <FormLabel>Full Name</FormLabel>
          <Input
            placeholder="Full Name"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            value={user.name}
            onChange={(e) => {
                setUser({
                    ...user,
                    name: e.target.value
                })
            }}
          />
        </FormControl>
        </HStack>
        <HStack spacing={"12"}>
        <FormControl id="github" isRequired>
          <FormLabel>Github</FormLabel>
          <Input
            placeholder=""
            _placeholder={{ color: 'gray.500' }}
            value={user.github_url}
            onChange={(e) => {
                setUser({
                    ...user,
                    github_url: e.target.value
                })
            }} 
          />
        </FormControl>
        <FormControl id="linkedin" isRequired>
          <FormLabel>LinkedIn</FormLabel>
          <Input
            placeholder="LinkedIn URL"
            _placeholder={{ color: 'gray.500' }}
            value={user.linkedin_url}
            onChange={(e) => {
                setUser({
                    ...user,
                    linkedin_url: e.target.value
                })
            }} 
          />
        </FormControl>
        </HStack>
        <HStack spacing={"12"}>
        <FormControl id="twitter" isRequired>
          <FormLabel>twitter</FormLabel>
          <Input
            placeholder="twitter"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            value={user.twitter_url}
            onChange={(e) => {
                setUser({
                    ...user,
                    twitter_url: e.target.value
                })
            }}
          />
        </FormControl>
        <FormControl id="medium" isRequired>
          <FormLabel>medium</FormLabel>
          <Input
            placeholder="medium"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            value={user.medium_url}
            onChange={(e) => {
                setUser({
                    ...user,
                    medium_url: e.target.value
                })
            }}
          />
        </FormControl>
        </HStack>
        <FormControl id="distrikt" isRequired>
          <FormLabel>distrikt</FormLabel>
          <Input
            placeholder="district"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            value={user.distrikt_url}
            onChange={(e) => {
                setUser({
                    ...user,
                    distrikt_url: e.target.value
                })
            }}
          />
        </FormControl>
        <FormControl id="description" isRequired>
          <FormLabel>description</FormLabel>
          <Textarea
            placeholder="description"
            _placeholder={{ color: 'gray.500' }}
            value={user.description}
            onChange={(e) => {
                setUser({
                    ...user,
                    description: e.target.value
                })
            }}
          />
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
            }}
            onClick={insert}
            >
            {loading ? <Spinner /> : "Submit"}
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}

export default Details;