import { Layout } from "antd";
const { Header } = Layout;

export default function Navbar() {
  return (
    <Header className="flex justify-center  items-center shadow rounded-2xl">
      <h1 className="sm:text-xl font-bold text-blue-500">Book Dashboard</h1>
    </Header>
  );
}
