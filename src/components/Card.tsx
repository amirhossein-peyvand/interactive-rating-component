import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Circle from "./Circle";
import star from "../assets/icon-star.svg";
import "../sass/Button.scss";

const Card = () => {
  return (
    <Container
      bgColor="hsl(213, 19%, 18%)"
      borderRadius={30}
      paddingX={7}
      paddingY={6}
      display="flex"
      flexDirection="column"
      rowGap={8}
    >
      <Circle input={star} />
      <Box>
        <Heading
          as="h2"
          fontSize="2xl"
          color="hsl(0, 0%, 100%)"
          marginBottom={2}
        >
          How did we do?
        </Heading>
        <Text color="hsl(216, 12%, 54%)">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </Text>
      </Box>
      <Flex columnGap={2} justifyContent="space-between">
        <Circle input={1} />
        <Circle input={2} />
        <Circle input={3} />
        <Circle input={4} />
        <Circle input={5} />
      </Flex>
      <Button
        className="submitBtn"
        bgColor="hsl(25, 97%, 53%)"
        color="hsl(0, 0%, 100%)"
        borderRadius={20}
      >
        Submit
      </Button>
    </Container>
  );
};

export default Card;
