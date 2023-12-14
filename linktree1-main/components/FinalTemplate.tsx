import { useEffect, useState } from 'react';
// import Template from '../components/template'; 
import dynamic from 'next/dynamic';
import { getTheData } from '../components/linkdata'; 
import { User } from '../components/types'; 
import { Box } from '@chakra-ui/react';
import { initJuno} from "@junobuild/core-peer"; 
function extractLastText(url: string) {
    const regex = /\/([^\/]+)$/;
    const match = regex.exec(url);
  
    if (match) {
        return match[1];
    } else {
        return null;
    }
  } 
const FinalTemplate = () => {
    const [data, setData] = useState<User | undefined>(undefined);
  
  
    useEffect(() => {
        const id = extractLastText(window.location.href)
        initJuno({
          satelliteId: "xqne3-5aaaa-aaaal-adcpq-cai"
        }).then(() => {
          getTheData(id as string).then((fetchedData) => {
            setData(fetchedData as User);
          })
          .catch((error) => {
            console.error(error);
          });
        });
  
  
    }, [])
  
    const Template = dynamic(() => import("../components/template"))
    
    return (
      <>
        {/* <Nav /> */}
        <Box>
          {data ? (
            <Template data={data} />
          ) : (
            <p>Data not found for the specified ID.</p>
          )}
        </Box>
      </>
    );
};

export default FinalTemplate;