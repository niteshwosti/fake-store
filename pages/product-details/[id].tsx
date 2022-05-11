import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DetailCard } from "../../components/DetailsCard";

const Wrapper = styled.div``;
const ProductDetails = () => {
  const router = useRouter();
  const [details, setDetails] = useState<any>({});

  useEffect(() => {
    const api = async () => {
      const data = await fetch(
        `https://fakestoreapi.com/products/${router.query.id}`
      );
      const jsonData = await data.json();
      setDetails(jsonData);
    };
    api();
  }, []);

  return (
    <>
      <Wrapper>
        <DetailCard
          src={details.image}
          price={details.price}
          description={details.description}
          category={details.category}
          productTitle={details.title}
        />
      </Wrapper>
    </>
  );
};
export default ProductDetails;
