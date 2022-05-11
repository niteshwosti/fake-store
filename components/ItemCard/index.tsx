import { Avatar, Card } from "antd";
import Link from "next/link";
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
  id?: any;
}
const ItemCard: React.FC<CardProps> = ({ src, productTitle, price, id }) => {
  return (
    <>
      <MainWrapper>
        <Link href={`/product-details/${id}`}>
          <Card
            hoverable
            cover={<img src={src} height="250" />}
            style={{ width: 250 }}
          >
            <Card.Meta title={productTitle} description={price} />
          </Card>
        </Link>
      </MainWrapper>
    </>
  );
};
export { ItemCard };
