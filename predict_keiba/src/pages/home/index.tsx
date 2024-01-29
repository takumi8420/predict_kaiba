import React, { FC } from "react";
import { styled } from "@stitches/react";
import Sidebar from "../../components/sidebar";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarList } from "./data";
import BigRaceContainer from "../../components/big_race_container";

const Home: FC = () => {
  return (
    <Flex>
      <Sidebar iconInSidebarProps={SidebarList} />
      <ContentBox>
        <Title>TITLE</Title>
        <BigRaceContainer />
      </ContentBox>
    </Flex>
  );
};

export default Home;

const Flex = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  width: "100%",
});

const ContentBox = styled("div", {
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
