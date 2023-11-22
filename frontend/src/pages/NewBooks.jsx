import { Box, Heading } from "@chakra-ui/react";
import BookForm from "../components/BookForm";

export default function NewBookPage() {
  return (
    <Box p={4} bgColor="#E1E1E0" borderRadius="xl" width="70%" margin="auto">
      <Heading as="h2" size="xl" mb={4}>
        Add a New Book
      </Heading>
      <BookForm />
    </Box>
  );
}