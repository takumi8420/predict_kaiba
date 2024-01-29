import react, { FC } from "react";
import { styled } from "@stitches/react";

export type IconInSidebarProps = {
  icon: string;
  text: string;
};

const IconInSidebar: FC<IconInSidebarProps> = (props) => {
  const { icon, text } = props;

  return (
    <Flex>
      <ImageContainer>
        <img
          src={icon}
          alt={text}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "100%", // この行を追加
          }}
        />
      </ImageContainer>

      <Text>{text}</Text>
    </Flex>
  );
};

export default IconInSidebar;
const Flex = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  // justifyContent: "center",
  alignItems: "center",
  width: "100%",
  // height: "100px",
  backgroundColor: "#fff",
});

const ImageContainer = styled("div", {
  width: "60px",
  height: "60px",
  // borderRadius: "100%",
  backgroundColor: "transparent",
});

const Text = styled("div", {
  fontSize: "12px",
  fontWeight: "bold",
  color: "#000",
});
