import type { VFC } from "react";
import React, { useEffect, useState } from "react";

import { PromainContainer, ProbottomContainer } from "./styles";

interface Props {
  Productdata: any;
}

const Product: VFC<Props> = (Productdata) => {
  const [data, setData] = useState(Object.entries(Productdata));

  console.log(data);

  return (
    <React.Fragment>
      {data.map((e) => {
        console.log(e[1]);
        return (
          <PromainContainer>
            <h3>{e[1].name}</h3>
            <h6>{e[1].detail}</h6>
            <ProbottomContainer>
              <h4>
                <i>Price : {e[1].price}</i>
              </h4>
              <h4>
                <i>Alcoho : {e[1].alcohol}</i>
              </h4>
            </ProbottomContainer>
          </PromainContainer>
        );
      })}
    </React.Fragment>
  );
};

export default Product;
