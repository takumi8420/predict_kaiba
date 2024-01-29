import react, { FC } from "react";
import { styled } from "@stitches/react";

export type RaceCardProps = {
  raceNumber: string;
  stadium: string;
  date: Date;
};

const RaceCard: FC<RaceCardProps> = (props) => {
  const { raceNumber, stadium, date } = props;
  return (
    <Flex>
      <Container>
        <Stadium>{stadium}</Stadium>
        <RaceNumber>{raceNumber}</RaceNumber>
        <Date>{date}</Date>
      </Container>

      <Text>Google</Text>
    </Flex>
  );
};

export default RaceCard;
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

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  // justifyContent: "center",
  alignItems: "center",
  width: "100%",
  // height: "100px",
  backgroundColor: "#fff",
});

const Stadium = styled("div", {
  fontSize: "12px",
  fontWeight: "bold",
  color: "#000",
});

const RaceNumber = styled("div", {
  fontSize: "12px",
  fontWeight: "bold",
  color: "#000",
});

const Date = styled("div", {
  fontSize: "12px",
  fontWeight: "bold",
  color: "#000",
});
