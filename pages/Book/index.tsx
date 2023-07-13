import React, { useEffect, useState } from "react";

import Product from "@components/Product";

import Productdata from "../../data/Cdata";

import { Book, Content, Page, PageSection } from "./styles";

const division = (arr, n) => {
  var len = arr.length;
  var cnt = Math.floor(len / n) + (Math.floor(len % n) > 0 ? 1 : 0);
  var newArray = [];

  for (var i = 0; i <= cnt; i++) {
    newArray.push(arr.splice(0, n));
  }

  return newArray;
};

const Bookpage = () => {
  const [click, setClick] = useState(0);
  const [data, setData] = useState(Productdata);

  const Nextpage = () => {
    setClick(click + 1);
    console.log(click);
    if (click === 3) {
      setClick(0);
    }
  };

  return (
    <Book>
      <PageSection>
        <Page className={click === 0 ? "page1" : "active"} onClick={Nextpage}>
          <Content id="content1"></Content>
        </Page>
        {data.map((e, index) => {
          index = index + 2;

          return (
            <Page
              className={click === index - 1 ? `page${index}` : "active"}
              onClick={Nextpage}
            >
              <Content id="contents">
                <Product Productdata={e} />
              </Content>
            </Page>
          );
        })}

        {/* <Page className={click === 1 ? "page2" : "active"} onClick={Nextpage}>
          <Content id="contents">
            <Product />
          </Content>
        </Page>
        <Page className={click === 2 ? "page3" : "active"} onClick={Nextpage}>
          <Content id="contents">
            <Product />
          </Content>
        </Page>
        <Page className={click === 3 ? "page4" : "active"} onClick={Nextpage}>
          <Content id="contents">
            <Product />
          </Content>
        </Page> */}
      </PageSection>
    </Book>
  );
};

export default Bookpage;
