// src/apis/bookApis.ts

export const BOOK_APIS = {
  // GET all books with optional pagination, filters, and search
  GET_ALL_BOOKS: (
    page?: number,
    limit?: number,
    filters?: Record<string, string>,
    search?: string
  ): string => {
    let query = `?_page=${page || 1}&_limit=${limit || 10}`;

    if (filters) {
      Object.keys(filters).forEach((key) => {
        if (filters[key]) query += `&${key}=${filters[key]}`;
      });
    }

     if (search) {
      // ✅ search in both title and author
      query += `&q=${encodeURIComponent(search)}`;
    }

    return `/books${query}`;
  },

  // GET single book by id
  GET_BOOK_BY_ID: (id: string) => `/books/${id}`,

  // CREATE a new book
  CREATE_BOOK: `/books`,

  // UPDATE a book by id
  UPDATE_BOOK: (id: string) => `/books/${id}`,

  // DELETE a book by id
  DELETE_BOOK: (id: string) => `/books/${id}`,
};
