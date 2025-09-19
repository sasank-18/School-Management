import type { FieldConfig } from "../types/book";

export const bookFormConfig : FieldConfig[] = [
  {
    name: "title",
    label: "Title",
    type: "input",
    placeholder: "Enter title",
    rules: { required: "Title is required" },
  },
  {
    name: "author",
    label: "Author",
    type: "input",
    placeholder: "Enter author",
    rules: { required: "Author is required" },
  },
  {
    name: "genre",
    label: "Genre",
    type: "select",
    placeholder: "Select genre",
    options: [
      { label: "Fiction", value: "Fiction" },
      { label: "Sci-Fi", value: "Sci-Fi" },
    ],
    rules: { required: "Genre is required" },
  },
  {
    name: "year",
    label: "Published Year",
    type: "number",
    placeholder: "Enter year",
    rules: { required: "Year is required" },
  },
  {
    name: "status",
    label: "Status",
    type: "select",
    placeholder: "Select status",
    options: [
      { label: "Available", value: "Available" },
      { label: "Issued", value: "Issued" },
    ],
    rules: { required: "Status is required" },
  },
];
