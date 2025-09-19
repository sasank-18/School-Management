import type { RegisterOptions } from "react-hook-form";

export interface Book {
  id?: string;
  title: string;
  author: string;
  genre: string;
  year: number;
  status: "Available" | "Issued";
}




export interface Option {
  label: string;
  value: string | number;
}

export interface FieldConfig {
  name: string;
  label: string;
  type: "input" | "select" | "number";
  placeholder?: string;
  options?: Option[];
  rules?: RegisterOptions;
}

 export interface DynamicFormProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: Book) => void;
  config: FieldConfig[];
  initialData?: Book;
  title?: string;
}


export interface StatusBadgeProps {
  status: "Available" | "Issued";
}
