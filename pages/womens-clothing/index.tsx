import React, { useEffect, useState } from "react";
import { NavBar } from "../../components/NavBar";
import { Card, Col, Layout, Row } from "antd";
import styled from "styled-components";
import { ItemCard } from "../../components/ItemCard";

const Wrapper = styled.div`
  .ant-layout-content {
    padding: 16px !important;
  }
  .ant-row {
    row-gap: 32px !important;
  }
`;

const WomensClothing = () => {
  const { Header, Content } = Layout;
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch(
        "https://fakestoreapi.com/products/category/women's clothing"
      );
      const jsonData = await data.json();
      setList(jsonData);
    };
    api();
    console.log("this is list", list);
  }, []);

  return (
    <>
      <Wrapper>
        <Header>
          <NavBar />
        </Header>
        {/* <h2>Electronic Devices</h2> */}
        <Content>
          <Row gutter={35}>
            {list.map((value) => {
              return (
                <Col>
                  <ItemCard
                    id={value.id}
                    price={"$" + value.price}
                    productTitle={value.title}
                    src={value.image}
                  />
                </Col>
              );
            })}
          </Row>
        </Content>
      </Wrapper>
    </>
  );
};
export default WomensClothing;
