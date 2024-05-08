"use client";

import React from "react";

import { AppIcon } from "@components/app-icon";
import { Header } from "@components/header";
import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd";

export const ThemedLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2
      Header={() => <Header sticky />}
      Title={({ collapsed }) => (
        <ThemedTitleV2 collapsed={collapsed} text="Refine | Jereko" icon={<AppIcon />} />
      )}
    >
      {children}
    </ThemedLayoutV2>
  );
};
