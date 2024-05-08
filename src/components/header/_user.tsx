import { Space, Avatar, theme } from "antd";
import { Typography } from "antd";
import { use } from "react";

import { IUser } from "@/types/auth";

import { ColorModeContext } from "@contexts/color-mode";
import { useGetIdentity } from "@refinedev/core";

const { Text } = Typography;
const { useToken } = theme;

const HeaderUser = () => {
  const { data: user } = useGetIdentity<IUser>();

  const { mode } = use(ColorModeContext);
  const { token } = useToken();

  return (
    <>
      {(user?.name || user?.avatar) && (
        <Space style={{ marginLeft: "8px" }} size="middle">
          {user?.name && (
            <Text
              strong
              style={{
                color: mode == "dark" ? token.colorTextLightSolid : token.colorText,
              }}
            >
              {user.name}
            </Text>
          )}
          {user?.avatar && <Avatar src={user?.avatar} alt={user?.name} />}
        </Space>
      )}
    </>
  );
};

export default HeaderUser;
