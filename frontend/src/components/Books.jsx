import { Card, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Books({ id, title, author, image, publisher, year }) {
  return (
    <Link to={`/books/${id}`} style={{ textDecoration: "none" }}>
      <Card
        key={id}
        my={4}
        p={4}
        cursor="pointer"
        shadow="dark-lg"
        bgColor="#F5F5F5"
        borderRadius="lg"
      >
        <VStack>
          <Heading size="md" color="#333">
            {title} ({year})
          </Heading>
          <Text color="#555">{author}</Text>
          <Image w={24} h={24} src={`http://localhost:8000/${image}`} />
          <Text color="#555">
            <span style={{ color: "#777" }}>Publisher: </span>
            {publisher}
          </Text>
        </VStack>
      </Card>
    </Link>
  );
}