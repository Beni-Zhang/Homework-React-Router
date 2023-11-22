import { VStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Books from "../components/Books";
import { getAllBooks } from "../modules/fetch";

export default function Homepage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const fetchedBooks = await getAllBooks();
      setBooks(fetchedBooks);
    };
    fetchBooks();
  }, []);

  return (
    <VStack w="100%" spacing={6} align="center" mt={8}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Featured Books
      </Text>
      {books?.books?.map((book) => (
        <Books key={`${book.id} ${book.title}`} {...book} />
      ))}
    </VStack>
  );
}