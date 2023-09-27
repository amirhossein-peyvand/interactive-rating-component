import { Container, Image, Text, Heading } from "@chakra-ui/react";
import thankYou from "../assets/illustration-thank-you.svg";
import useStore from "../store";

const Thankyou = () => {
  const count = useStore((s) => s.count);
  const reset = useStore((s) => s.reset);

  window.addEventListener("popstate", () => reset());

  return (
    <Container
      bgColor="hsl(213, 19%, 18%)"
      borderRadius={30}
      paddingX={7}
      paddingY={6}
      alignItems="center"
      display="flex"
      flexDirection="column"
      rowGap={8}
      width="clamp(200px, 90%, 450px)"
    >
      <Image src={thankYou} objectFit="cover" width="40%" margin="0 auto" />
      <Text
        padding="5px 10px"
        fontSize="sm"
        bgColor="hsl(216, 12%, 24%)"
        color="hsl(25, 97%, 53%)"
        borderRadius={20}
      >
        You selected {count} out of 5
      </Text>
      <Heading as="h2" color="hsl(0, 0%, 100%)">
        Thank you!
      </Heading>
      <Text textAlign="center" color="hsl(216, 12%, 54%)">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </Text>
    </Container>
  );
};

export default Thankyou;
