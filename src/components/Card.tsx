import { Box, Container, Image } from "@chakra-ui/react";
import starIcon from "../assets/icon-star.svg";

const Card = () => {
  return (
    <Container>
      <Box>
        <Image src={starIcon} />
      </Box>
    </Container>
  );
};

export default Card;
