import { Avatar, Card } from "antd";
import React from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  background-color: white;
  position: relative;
`;
const DetailsContainer = styled.div``;
const TitleWrapper = styled.div``;
const PriceWrapper = styled.div``;
const DescriptionWrapper = styled.div``;
interface CardProps {
  src?: any;
  productTitle?: string;
  price?: string;
  description?: string;
  onClick?: () => void;
}

const ItemCard: React.FC<CardProps> = ({
  src,
  productTitle,
  price,
  description,
  onClick,
}) => {
  return (
    <>
      <MainWrapper>
        <Card cover={<img src={src} width={200} height={300} />}></Card>
        <DetailsContainer>
          <TitleWrapper>{productTitle}</TitleWrapper>
          <PriceWrapper>{price}</PriceWrapper>
          <DescriptionWrapper>{description}</DescriptionWrapper>
        </DetailsContainer>
      </MainWrapper>
    </>
  );
};
export { ItemCard };
