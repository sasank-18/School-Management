import { Layout } from "antd";
const { Header } = Layout;

export default function Navbar() {
  return (
    <Header className="flex justify-between items-center shadow rounded-2xl">
      <h1 className="text-xl font-bold text-blue-500">Book Dashboard</h1>
    </Header>
  );
}
