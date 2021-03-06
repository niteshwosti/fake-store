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

const Jwellery = () => {
  const { Header, Content } = Layout;
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch(
        "https://fakestoreapi.com/products/category/jewelery"
      );
      const jsonData = await data.json();
      setList(jsonData);
    };
    api();
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
            {list.map((value, key) => {
              console.log(value.id);
              return (
                <Col>
                  <ItemCard
                    key={key}
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
export default Jwellery;
