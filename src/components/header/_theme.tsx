"use client";

import { Switch } from "antd";
import { use } from "react";

import { ColorModeContext } from "@contexts/color-mode";

const ThemeToggle = () => {
  const { mode, setMode } = use(ColorModeContext);

  return (
    <Switch
      checkedChildren="🌛"
      unCheckedChildren="🔆"
      onChange={() => setMode(mode === "light" ? "dark" : "light")}
      defaultChecked={mode === "dark"}
    />
  );
};

export default ThemeToggle;
