import { useState } from "react";
import { Button, Layout } from "antd";
import SearchBar from "../components/SearchBar";
import BookTable from "../components/BookTable";
import Filter from "../components/Filters";
import { genreOptions, statusOptions } from "../config/filter";
import DynamicForm from "../components/DynamicForm";
import type { Book } from "../types/book";
import { bookFormConfig } from "../config/bookForm";

import { useDebounce } from "../hooks/useDebounce";
import { useBooks } from "../hooks/useBook";

const { Content } = Layout;

export default function Home() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("");
  const [editBook, setEditBook] = useState<Book | undefined>(undefined);
  const [open, setOpen] = useState(false);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const debouncedSearch = useDebounce(search, 300);

  // ✅ Use book hook
  const { booksQuery, addBookMutation, editBookMutation, deleteBookMutation } =
    useBooks({
      page,
      limit,
      genre,
      status,
      search: debouncedSearch,
    });

  const handleEdit = (book: Book) => {
    setEditBook(book);
    setOpen(true);
  };

  const handleDelete = (id: string) => {
    deleteBookMutation.mutate(id);
  };

  const handleSubmit = (formData: Book) => {
    if (editBook) {
      editBookMutation.mutate({ ...formData, id: editBook.id });
    } else {
      addBookMutation.mutate(formData);
    }
    setOpen(false);
    setEditBook(undefined);
  };

  return (
    <div className="min-h-screen">
      <Content className="py-6">
        <div className="flex flex-col mb-4 md:flex-row justify-between items-center gap-4">
          <SearchBar value={search} onChange={setSearch} />
          <div className="flex gap-4 max-sm:flex-col justify-between items-center w-full md:w-auto">
             <Filter
            label="Genre"
            value={genre}
            placeholder="Filter by Genre"
            options={genreOptions}
            onChange={setGenre}
          />
          <Filter
            label="Status"
            value={status}
            placeholder="Filter by Status"
            options={statusOptions}
            onChange={setStatus}
          />
          <Button className="w-full" type="primary" onClick={() => setOpen(true)}>
            + Add Book
          </Button>
          </div>
        </div>

        <BookTable
          books={booksQuery.data?.data || []}
          loading={booksQuery.isLoading}
          page={page}
          totalCount={booksQuery.data?.count || 0}
          limit={limit}
          onPageChange={(p, l) => {
            setPage(p);
            setLimit(l);
          }}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <DynamicForm
          visible={open}
          onClose={() => setOpen(false)}
          onSubmit={handleSubmit}
          config={bookFormConfig}
          title={editBook ? "Edit Book" : "Add Book"}
          initialData={editBook}
        />
      </Content>
    </div>
  );
}
