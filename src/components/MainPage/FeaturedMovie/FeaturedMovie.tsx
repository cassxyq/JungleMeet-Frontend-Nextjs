import styled from "styled-components";
import { SectionHeaderContainer, SectionTitle } from "../Containers";
import SeeMore from "../SeeMore";
import Movies from "./Movies";

const SectionContainer = styled.div`
  width: 840px;
  padding: 10px;
`;

const FeaturedMovie = () => {
    return (
        <SectionContainer>
            <SectionHeaderContainer>
                <SectionTitle>Featured Movie</SectionTitle>
                <SeeMore />
            </SectionHeaderContainer>
            <Movies />
        </SectionContainer>
    );
};

export default FeaturedMovie;