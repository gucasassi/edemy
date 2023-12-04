import { useState } from "react";
import { useRouter } from "next/navigation";

import { Menu } from "antd";
import {
  AppstoreOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

const items = [
  {
    label: "App",
    key: "/",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Login",
    key: "login",
    icon: <LoginOutlined />,
  },
  {
    label: "Register",
    key: "register",
    icon: <UserAddOutlined />,
  },
];

const TopNav = () => {
  const router = useRouter();
  const [current, setCurrent] = useState("");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    router.push(e.key, { scroll: false });
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default TopNav;
