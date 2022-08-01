import React from "react";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Stack
  } from '@chakra-ui/react'

const Warning = ({message}) =>{

    return(<>
    <Stack spacing={3} width="20%">

  <Alert status='warning'>
    <AlertIcon />
    {message}
  </Alert>

  
</Stack>
    </>)
}

export {Warning};