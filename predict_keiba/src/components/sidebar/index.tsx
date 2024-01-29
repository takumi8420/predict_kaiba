import React, { FC } from "react";
import { styled } from "@stitches/react";
import IconInSidebar, { IconInSidebarProps } from "../icon_in_sidebar";

// IconInSidebarPropsの配列を受け取りたい
type SidebarProps = {
  iconInSidebarProps: IconInSidebarProps[];
};

const Sidebar: FC<SidebarProps> = (props) => {
  const { iconInSidebarProps } = props;

  return (
    <Flex
      css={{
        width: "120px",
        // backgroundColor: "",
        gap: "16px",
        // zIndex: "20",
      }}
    >
      {/* iconInSidebarPropsの配列の要素分IconInSidebarを作成する */}
      {iconInSidebarProps.map((iconInSidebarProp) => (
        <IconInSidebar
          icon={iconInSidebarProp.icon}
          text={iconInSidebarProp.text}
        />
      ))}
    </Flex>
  );
};

export default Sidebar;

const Flex = styled("div", {
  display: "flex",
  flexDirection: "column",
  // justifyContent: "space-between",
  alignItems: "center",
  padding: "32px 16px",
  // height: "48px",
  // 背景を紺色にしたい
  zIndex: "100",
  backgroundColor: "#000080",
});
