import React from "react";
import { NavBar } from "../../components/NavBar";
import { Button, Form, Input, Layout, Select, Upload } from "antd";
import styled from "styled-components";
import { UploadOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
import { useFormik } from "formik";

const MainWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  min-width: 40%;
  padding: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  h1 {
    text-align: center;
  }
`;

const CreateProduct = () => {
  const { Header, Content } = Layout;
  const categories = [
    {
      label: "Electronics",
      value: "electronics",
    },
    {
      label: "Jwellery",
      value: "jwellery",
    },
    {
      label: "Men's Clothing",
      value: "mens",
    },
    {
      label: "Women's Clothing",
      value: "womens",
    },
  ];
  const handleSubmit = () => {
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify(formik.values),
    });
  };
  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      image: "",
      category: "",
      description: "",
    },
    enableReinitialize: true,
    onSubmit: handleSubmit,
  });
  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <MainWrapper>
        <Wrapper>
          <Content>
            <div>
              <h1>Create Product</h1>
              <Form onFinish={formik.handleSubmit}>
                <Form.Item>
                  <label>Product Title</label>
                  <Input
                    type="text"
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                  />
                </Form.Item>
                <Form.Item>
                  <label>Price</label>
                  <Input
                    type="text"
                    name="price"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                  />
                </Form.Item>
                <Form.Item>
                  <label>Category</label>
                  <Select
                    allowClear
                    options={categories}
                    value={formik.values.category}
                    onChange={(value) =>
                      formik.setFieldValue("category", value)
                    }
                  />
                </Form.Item>
                <Form.Item>
                  <label>Add Image</label>
                  <br />
                  <Upload
                    onChange={({ file }) => {
                      formik.setFieldValue("image", file.originFileObj);
                    }}
                  >
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                  </Upload>
                </Form.Item>
                <Form.Item>
                  <label>Description</label>
                  <TextArea
                    rows={4}
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                  />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Add Product
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Content>
        </Wrapper>
      </MainWrapper>
    </>
  );
};

export default CreateProduct;
