import { Box } from "@chakra-ui/react";
import styled from "styled-components";
import TMDBRanking from "../TMDBRanking";

export interface MovieCardInfoProps {
    title: string;
    tmdb: number;
    type: string;
}

const MovieTitle = styled.div`
  width: 100%;
  height: 46px;
  font-size: 18px;
  font-weight: 700;
  line-height: 23.44px;
  font-family: "DM Sans";
  color: #ffffff;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 11.5px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
`;

const MovieCategory = styled.div`
  margin-top: 14.5px;
  margin-bottom: 13px;
  font-size: 12px;
  font-weight: 700;
  line-height: 15.62px;
  font-family: "DM Sans";
  color: #9ca3af;
`;
const MovieCardInfo = ({ title, tmdb, type }: MovieCardInfoProps): JSX.Element => {
    return (
        <Box mt="21px" ml="12px" mr="16px">
            <MovieTitle>{title} </MovieTitle>
            <TMDBRanking gap={"30px"} tmdb={tmdb} color={"#FFFFFF"} />
            <MovieCategory>{type}</MovieCategory>
        </Box>
    );
};

export default MovieCardInfo;