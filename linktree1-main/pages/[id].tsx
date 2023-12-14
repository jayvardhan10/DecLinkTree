"use client"

// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import Template from '../components/template'; 
import dynamic from 'next/dynamic';
// import { getTheData } from '../components/linkdata'; 
// import { User } from '../components/types'; 
// import { Box } from '@chakra-ui/react';
// import { initJuno} from "@junobuild/core-peer";  
// import Nav from '../components/navbar';
// import { signIn, signOut, authSubscribe } from "@junobuild/core";




const UserDetails = () => {
  // const router = useRouter();
  // const { id } = router.query;
  // const url = typeof window !== 'undefined' ? window.location.href : ''
  // const id = extractLastText(url)
  // console.log({id})
  // const [data, setData] = useState<User | undefined>(undefined);


  // useEffect(() => {
  //     initJuno({
  //       satelliteId: "xqne3-5aaaa-aaaal-adcpq-cai"
  //     }).then(() => {
  //       getTheData(id as string).then((fetchedData) => {
  //         setData(fetchedData as User);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //     });


  // }, [id])

  const FinalTemplate = dynamic(() => import("../components/FinalTemplate"))
  
  return (
    <>
      {/* <Nav /> */}
      <FinalTemplate />
    </>
  );
};

export default UserDetails;