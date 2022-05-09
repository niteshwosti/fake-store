import { Avatar, Card } from "antd";
import React from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  background-color: white;
  position: relative;
`;
interface CardProps {
  src?: any;
  productTitle?: string;
  price?: string;
  onClick?: () => void;
}

const ItemCard: React.FC<CardProps> = ({
  src,
  productTitle,
  price,
  onClick,
}) => {
  return (
    <>
      <MainWrapper>
        <Card
          hoverable
          cover={<img src={src} height="250" />}
          style={{ width: 250 }}
          onClick={onClick}
        >
          <Card.Meta title={productTitle} description={price} />
        </Card>
      </MainWrapper>
    </>
  );
};
export { ItemCard };
