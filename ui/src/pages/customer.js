// this will render the customer page

import React, {useState} from "react";
import styled from "styled-components";
import SelectorBox from "../components/SelectorBox";

// this is the default customer array
const customerArr = [
  {
    id: 999,
    name: 'Daniel King',
    email:'waruodaniel@gmail.com'
  },
  {
    id: 888,
    name: 'King Julian',
    email:'kingjulian@gmail.com'
  },
]

function Customer() {
  // this is the state for the customer array
  const [selectedCustomer, setSelectedCustomer] = useState(undefined)
  return (
    <MainDiv>
      <TopDiv><h3>Make an order (Team 1 Branch)</h3>
        <div>
          <SelectorBox people={customerArr}
                       selectedCustomer={selectedCustomer}
                       setSelectedCustomer={setSelectedCustomer}/></div>
      </TopDiv>
      <div>
        <input
          id="itemName"
          name="itemName"
          type="name"
          required
          className="mt-4 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Gas size (6kg or 13kg)"
        />
        <input
          id="customerID"
          name="customerID"
          type="name"
          required
          defaultValue={selectedCustomer && selectedCustomer.id}
          className="mt-4 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Customer ID - should be filled automatically"
        />
        <input
          id="item-name"
          name="item-name"
          type="name"
          required
          defaultValue={selectedCustomer && selectedCustomer.name}
          className="mt-4 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Customer Name - should be filled automatically"
        />
        <input
          id="item-email"
          name="item-email"
          type="email"
          required
          defaultValue={selectedCustomer && selectedCustomer.email}
          className="mt-4 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Customer Email - should be filled automatically"
        />
        <div>
          <button
            type="button"
            className="mt-4 w-full justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Submit
          </button>
        </div>
      </div>
    </MainDiv>
  );
}

export default Customer;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  margin-top: 10em;

  > h3 {
      font-size: 1.2em;
      font-weight: 600;
  }

  > div {
      margin-top: 2em;
      width: 35%;

      > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;  
        >  button {
            width: 100%;
      }
    }
  }
`;

const TopDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

> h3 {
    font-size: 1.2em;
    font-weight: 600;
}
`
