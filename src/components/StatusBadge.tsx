import type { StatusBadgeProps } from "../types/book";

export default function StatusBadge({ status }: StatusBadgeProps) {
  const color =
    status === "Available"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${color}`}>
      {status}
    </span>
  );
}
