"use client";

import { Layout, Space, theme } from "antd";
import dynamic from "next/dynamic";

import type { RefineThemedLayoutV2HeaderProps } from "@refinedev/antd";

const HeaderUser = dynamic(() => import("./_user"), {
  ssr: false,
});
const ThemeToggle = dynamic(() => import("./_theme"), {
  ssr: false,
});

const { useToken } = theme;

export const Header: React.FC<RefineThemedLayoutV2HeaderProps> = ({ sticky }) => {
  const { token } = useToken();

  const headerStyles: React.CSSProperties = {
    backgroundColor: token.colorBgBase,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "0px 24px",
    height: "64px",
  };

  if (sticky) {
    headerStyles.position = "sticky";
    headerStyles.top = 0;
    headerStyles.zIndex = 1;
  }

  return (
    <Layout.Header style={headerStyles}>
      <Space>
        <ThemeToggle />
        <HeaderUser />
      </Space>
    </Layout.Header>
  );
};
