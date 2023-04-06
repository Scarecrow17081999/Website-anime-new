import React from "react";
import {
  Card,
  CardHeader,
  Heading,
  Text,
  CardBody,
  CardFooter,
  Button,
  HStack,
  Avatar,
  Box,
  VStack
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

const data = [
  { name: "John", comment: "lololo", anime:'boruto' },
  { name: "Mary", comment: "lololo", anime:'boruto' },
  { name: "John", comment: "lololo", anime:'boruto' },
  { name: "John", comment: "lololo", anime:'boruto' },
  { name: "John", comment: "lololo", anime:'boruto' },
];
export default function Cards() {
    const [toggleDetail, setToggleDetail] = React.useState(true);
    const toggle=()=>{
setToggleDetail(!toggleDetail);
    }
  return (
    <VStack
      width="100%"
      marginTop={'30px'}
      style={{
        display: "flex",
        justifyContent: "flex-end",
       
      }}
    >

      <ChakraProvider>
        <Button onClick={toggle} colorScheme='teal' variant='teal'>{toggleDetail?"Show comments":"Hide comments"}</Button>
        <HStack 
          display={toggleDetail?'none':'flex'}
          spacing="30px"
          width="85%"
          p={"25px"}
        >
          {data.map((e) => {
            return (
                <Card style={{ margin: "auto" }} w={"240px"}>
                  <Box p={'15px'} display='flex' alignItems={'center'}>
                <Avatar size='md' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                <CardHeader>
                  <Heading size="md"> {e.name}</Heading>
                </CardHeader>

                </Box>
                <CardBody>
                  <Text>
                   {e.comment}
                  </Text>
                </CardBody>
                <CardFooter>
                  <Text>{e.anime}</Text>
                </CardFooter>
              </Card>
            );
          })}
        </HStack>
      </ChakraProvider>
    </VStack>
  );
}
