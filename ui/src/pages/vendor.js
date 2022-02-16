// this will render the vendor page

import React from "react";
import styled from "styled-components";

function Vendor() {
  return (
    <MainDiv>
      <h3>Vendor (Team 1 Branch)</h3>
      <OrdersList>
        <Order>
          <div>
            <p>OrderID</p>
            <p>customerID</p>
          </div>
          <div>
            <p>Gas Size</p>
          </div>
          <div>
            <p>Distance</p>
          </div>
        </Order>
      </OrdersList>
    </MainDiv>
  );
}

export default Vendor;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  padding-top: 10em;
  background-color: #f5f5f5;

  > h3 {
    font-size: 1.5em;
    margin-bottom: 1.5em;
    font-weight: 500;
  }
`;

const OrdersList = styled.div`
  width: 50%;
  height: auto;
`;

const Order = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 10em;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
  background-color: #9e9e9e;
  padding: 1em 2em 1em 2em;

  > div:first-child {
    p {
      margin: 1em;
    }
  }

  > div {
    p {
      font-size: 1.1em;
    }
  }
`;
