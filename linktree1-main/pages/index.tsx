// "use client";

import { useEffect } from "react";
import { initJuno } from "@junobuild/core-peer";  
// import Details from "../components/details";
// import Nav from "../components/navbar"
import Landing from "../components/landing";

export default function Home() {

  // useEffect(() => {
  //   (async () =>   
  //     await initJuno({
  //       satelliteId: "xqne3-5aaaa-aaaal-adcpq-cai",
  //     }))();
  // }, []);

  useEffect(() => {
    initJuno({
      satelliteId:"xqne3-5aaaa-aaaal-adcpq-cai",
    })
  })


  return (
    <>
      {/* <Nav /> */}
      <Landing />
    </>
  );
}