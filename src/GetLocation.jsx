import React, { useEffect } from "react";
import { getLocation } from "./helper";
import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const GetLocation = () => {

    const navigate = useNavigate()
  return (
    <Flex
      w="full"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap="4rem"
    >
      <Button onClick={() => getLocation(import.meta.env.VITE_GOOGLE_API_KEY)}>Get Location</Button>
      <Button onClick={() => navigate('/')}>Back</Button>
    </Flex>
  );
};

export default GetLocation;
