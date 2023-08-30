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
          <img
            src={
              "https://res.cloudinary.com/dhh5pzwvo/image/upload/v1693377221/first_uwcpy7.svg"
            }
          />
          <Text fontSize="25px" fontWeight="600">
            FindMe
          </Text>
        </HStack>
      </Box>
    </Flex>
  );
};

export default NavComponent;
