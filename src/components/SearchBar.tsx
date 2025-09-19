import { Input } from "antd";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <Input.Search
      placeholder="Search by title or author"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      allowClear
      className="w-full"
    />
  );
}
