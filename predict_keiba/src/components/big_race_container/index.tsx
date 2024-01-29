import react, { FC } from "react";

import React from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { styled } from "@stitches/react";
import { violet, mauve, blackA } from "@radix-ui/colors";

const BigRaceContainer: FC = () => {
  return (
    <Flex>
      <Title>TITLE</Title>
      <ScrollAreaRoot>
        <ScrollAreaViewport>
          <Box style={{ padding: "15px 20px" }}>
            <Text>Tags</Text>
            {TAGS.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Box>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar orientation="vertical">
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
        <ScrollAreaScrollbar orientation="horizontal">
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
        <ScrollAreaCorner />
      </ScrollAreaRoot>
    </Flex>
  );
};

const Flex = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",

  width: "100%",
  height: "100vh",

  backgroundColor: "#fff",
});

const Title = styled("div", {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#000",
});

const TAGS = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

const SCROLLBAR_SIZE = 10;

const ScrollAreaRoot = styled(ScrollArea.Root, {
  width: 200,
  height: 225,
  borderRadius: 4,
  overflow: "hidden",
  boxShadow: `0 2px 10px ${blackA.blackA4}`,
  backgroundColor: "white",
});

const ScrollAreaViewport = styled(ScrollArea.Viewport, {
  width: "100%",
  height: "100%",
  borderRadius: "inherit",
});

const ScrollAreaScrollbar = styled(ScrollArea.Scrollbar, {
  display: "flex",
  // ensures no selection
  userSelect: "none",
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: "none",
  padding: 2,
  background: blackA.blackA3,
  transition: "background 160ms ease-out",
  "&:hover": { background: blackA.blackA5 },
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: "column",
    height: SCROLLBAR_SIZE,
  },
});

const ScrollAreaThumb = styled(ScrollArea.Thumb, {
  flex: 1,
  background: mauve.mauve10,
  borderRadius: SCROLLBAR_SIZE,
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    minWidth: 44,
    minHeight: 44,
  },
});

const ScrollAreaCorner = styled(ScrollArea.Corner, {
  background: blackA.blackA5,
});

const Box = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  // justifyContent: "center",
  width: "100%",
  height: "100%",
});
const Text = styled("div", {
  color: violet.violet11,
  fontSize: 15,
  lineHeight: "18px",
  fontWeight: 500,
});
const Tag = styled("div", {
  color: mauve.mauve12,
  fontSize: 13,
  lineHeight: "18px",
  marginTop: 10,
  borderTop: `1px solid ${mauve.mauve6}`,
  paddingTop: 10,
});

export default BigRaceContainer;
