import type { VFC } from "react";
import React, { useEffect, useState } from "react";
import Cdata from "../../data/Cdata";
import { PromainContainer, ProbottomContainer } from "./styles";

const Product: VFC = () => {
  const [data, setData] = useState(Cdata);
  // console.log(data);

  return (
    <>
      {data.map((e) => {
        return (
          <PromainContainer>
            <h3>{e.name}</h3>
            <h6>{e.detail}</h6>
            <ProbottomContainer>
              <h4>
                <i>Price : {e.price}</i>
              </h4>
              <h4>
                <i>Alcoho : {e.alcohol}</i>
              </h4>
            </ProbottomContainer>
          </PromainContainer>
        );
      })}
    </>
  );
};

export default Product;
