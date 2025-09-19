import { Select } from "antd";

interface FilterSelectProps {
  label?: string; // Optional label
  value?: string;
  placeholder: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
  width?: string; 
}

const { Option } = Select;

export default function Filter({
  value = "",
  placeholder,
  options,
  onChange,
  width = "w-full",
}: FilterSelectProps) {
  return (
    <div className="flex items-center w-full gap-2">
      {/* {label && <span className="font-medium">{label}:</span>} */}
      <Select
        value={value.length > 0 ? value : null}
        onChange={onChange}
        placeholder={placeholder}
        allowClear
        className={width}
      >
        {options.map((opt) => (
          <Option key={opt.value} value={opt.value}>
            {opt.label}
          </Option>
        ))}
      </Select>
    </div>
  );
}
