import { Table, Button, Popconfirm } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { Book } from "../types/book";

interface BookTableProps {
  books: Book[];
  loading: boolean;
  page: number;
  limit: number;
  onPageChange: (page: number, limit: number) => void;
  onEdit: (book: Book) => void;
  onDelete: (id: string) => void;
  totalCount: number;
}

const BookTable = ({
  books,
  loading,
  page,
  limit,
  totalCount = 0,
  onPageChange,
  onEdit,
  onDelete,
}: BookTableProps) => {


  
  const columns: ColumnsType<Book> = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Author", dataIndex: "author", key: "author" },
    { title: "Genre", dataIndex: "genre", key: "genre" },
    { title: "Published Year", dataIndex: "year", key: "year" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${
            status === "Available"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button type="link" onClick={() => onEdit(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this book?"
            onConfirm={() => onDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" danger>
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={books}
      rowKey="id"
      loading={loading}
      pagination={{
        current: page,
        total: totalCount,
        pageSize: limit,
        onChange: (p, l) => onPageChange(p, l || limit),
      }}
    />
  );
};

export default BookTable;
