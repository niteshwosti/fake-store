import { Card, Layout } from "antd";
import React from "react";
import styled from "styled-components";
import { NavBar } from "../NavBar";

const MainWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  max-width: 1024px;
`;
const DetailsContainer = styled.div`
  padding: 16px;
`;
const TitleWrapper = styled.div``;
const PriceWrapper = styled.div``;
const DescriptionWrapper = styled.div``;
interface CardProps {
  src?: any;
  productTitle?: string;
  price?: string;
  category?: string;
  description?: string;
}

const DetailCard: React.FC<CardProps> = ({
  src,
  productTitle,
  price,
  category,
  description,
}) => {
  return (
    <>
      <Layout.Header>
        <NavBar />
      </Layout.Header>
      <MainWrapper>
        <Card
          cover={<img src={src}  />}
          title={productTitle}
        ></Card>
        <DetailsContainer>
          <PriceWrapper>Price:{"$" + price}</PriceWrapper>
          <div>Category:{category}</div>
          <DescriptionWrapper>Details:{description}</DescriptionWrapper>
        </DetailsContainer>
      </MainWrapper>
    </>
  );
};
export { DetailCard };
