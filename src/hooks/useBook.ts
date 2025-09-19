// hooks/useBooks.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axiosFetch, { type FetchResponse } from "../utils/axiosFetch";
import { BOOK_APIS } from "../config/api";
import type { Book } from "../types/book";

export function useBooks(params: {
  page: number;
  limit: number;
  genre: string;
  status: string;
  search: string;
}) {
  const { page, limit, genre, status, search } = params;
  const queryClient = useQueryClient();

  //  Fetch all books
  const booksQuery = useQuery<FetchResponse<Book[]>>({
    queryKey: ["books", search, genre, status, page, limit],
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      try {
        return await axiosFetch<Book[]>({
          url: BOOK_APIS.GET_ALL_BOOKS(page, limit, { genre, status }, search),
          method: "get",
        });
      } catch (err) {
        toast.error(err?.message || "Failed to fetch books ❌");
        return { data: [], count: 0 , status : 500};
      }
    },
  });

  //  Add book
  const addBookMutation = useMutation({
    mutationFn: async (newBook: Book) =>
      axiosFetch({
        url: BOOK_APIS.CREATE_BOOK,
        method: "post",
        data: newBook,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
      toast.success("Book added successfully ✅");
    },
    onError: (err) => {
      toast.error(err?.message || "Failed to add book ❌");
    },
  });

  // Edit book
  const editBookMutation = useMutation({
    mutationFn: async (updatedBook: Book) => {
      if (!updatedBook.id) throw new Error("Book ID is required");
      return axiosFetch({
        url: BOOK_APIS.UPDATE_BOOK(updatedBook.id),
        method: "put",
        data: updatedBook,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
      toast.success("Book updated successfully ✅");
    },
    onError: (err) => {
      toast.error(err?.message || "Failed to update book ❌");
    },
  });

  // Delete book
  const deleteBookMutation = useMutation({
    mutationFn: async (id: string) =>
      axiosFetch({
        url: BOOK_APIS.DELETE_BOOK(id),
        method: "delete",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
      toast.success("Book deleted successfully ✅");
    },
    onError: (err) => {
      toast.error(err?.message || "Failed to delete book ❌");
    },
  });

  return {
    booksQuery,
    addBookMutation,
    editBookMutation,
    deleteBookMutation,
  };
}
