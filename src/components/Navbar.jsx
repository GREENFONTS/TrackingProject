import { Flex, Box, Text, HStack, useColorModeValue } from "@chakra-ui/react";

const NavComponent = () => {
  const shadow = useColorModeValue("#333", "#000");
  return (
    <Flex
      p={{ base: "3", md: "3", lg: "3" }}
      h={{ sm: "55px", md: "60px", lg: "56px" }}
      justifyContent="space-between"
      boxShadow={`0px 0px 5px ${shadow}`}
      position="sticky"
      zIndex={999}
      top="0"
      w="100%"
    >
      <Box>
        <HStack spacing="10px">
          <svg
            width="40"
            height="36"
            viewBox="0 0 40 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 9.3913C0 4.20463 4.20463 0 9.3913 0H26.6087C31.7954 0 36 4.20463 36 9.3913V26.6087C36 31.7954 31.7954 36 26.6087 36H9.3913C4.20463 36 0 31.7954 0 26.6087V9.3913Z"
              fill="#2E3F6C"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.3387 27.7826H14.512V11.5517H8.21741V8.21738H14.5556V8.21737H27.7826V11.5517L24.6056 11.5517H18.3823V16.5946H26.202V19.6809H18.3823V27.7826L18.3387 27.7826Z"
              fill="white"
            />
          </svg>
          <Text fontSize="25px" fontWeight="600">
            FindMe
          </Text>
        </HStack>
      </Box>
    </Flex>
  );
};

export default NavComponent;
