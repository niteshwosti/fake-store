import { Menu } from "antd";
import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const Wrapper = styled.div`
.logo::after{
    border-bottom:none !important;
}

}
`;

const NavBar = () => {
  const router = useRouter();
  const [current, setCurrent] = useState(router.pathname);

  const handleClick = (e: any) => {
    setCurrent(e.key);
  };
  return (
    <>
      <Wrapper>
        <Menu mode="horizontal" selectedKeys={[current]} onClick={handleClick}>
          <Menu.Item onClick={() => router.push("/")} className="logo">
            <img src="logo.png" height={40} width={150} />
          </Menu.Item>

          <Menu.Item
            key={"/electronics"}
            onClick={() => router.push("/electronics")}
          >
            Electronics
          </Menu.Item>
          <Menu.Item key={"/jwellery"} onClick={() => router.push("/jwellery")}>
            Jwellery
          </Menu.Item>
          <Menu.Item
            key={"/mens-clothing"}
            onClick={() => router.push("/mens-clothing")}
          >
            Men's Clothing
          </Menu.Item>
          <Menu.Item
            key={"/womens-clothing"}
            onClick={() => router.push("/womens-clothing")}
          >
            Women's Clothing
          </Menu.Item>
          <Menu.Item
            key={"/create-product"}
            onClick={() => router.push("/create-product")}
          >
            Create Product
          </Menu.Item>
        </Menu>
      </Wrapper>
    </>
  );
};
export { NavBar };
