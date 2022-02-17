// this will render the customer page

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SelectorBox from "../components/SelectorBox";
import axios from "axios";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";
import "react-notifications/dist/react-notifications.css";

function Customer() {
  // this is the state for the customer array
  const [selectedCustomer, setSelectedCustomer] = useState(undefined);
  const [customers, setCustomers] = useState([]);
  const [size, setSize] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // make axios post request
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_BASE_URL}/api/orders/`,
        data: {
          size,
          customer: selectedCustomer,
        },
      });
      createNotification("sent");
    } catch (error) {
      console.log(error);
      createNotification("error");
    }
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/api/customers`)
      .then((response) => response.json())
      .then((data) => setCustomers(data.data));
  }, []);

  const createNotification = (type) => {
    return () => {
      // eslint-disable-next-line default-case
      switch (type) {
        case "sent":
          NotificationManager.success("Order sent to vendor");
          break;
        case "error":
          NotificationManager.error("Error message", "Click me!", 5000, () => {
            alert("Order could not be sent");
          });
          break;
      }
    };
  };
  return (
    <MainDiv>
      <TopDiv>
        <h3>Make an order (Team 1 Branch)</h3>
        <div>
          <SelectorBox
            people={customers}
            selectedCustomer={selectedCustomer}
            setSelectedCustomer={setSelectedCustomer}
          />
        </div>
      </TopDiv>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            id="itemSize"
            name="itemSize"
            type="size"
            required
            onChange={(e) => setSize(e.target.value)}
            className="mt-4 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Gas size (6kg or 13kg)"
          />
          <input
            id="customerID"
            name="customerID"
            type="name"
            required
            disabled
            defaultValue={selectedCustomer && selectedCustomer.id}
            className="mt-4 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Customer ID - should be filled automatically"
          />
          <input
            id="item-name"
            name="item-name"
            type="name"
            required
            disabled
            defaultValue={selectedCustomer && selectedCustomer.name}
            className="mt-4 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Customer Name - should be filled automatically"
          />
          <input
            id="item-email"
            name="item-email"
            type="email"
            required
            disabled
            defaultValue={selectedCustomer && selectedCustomer.email}
            className="mt-4 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Customer Email - should be filled automatically"
          />
          <input
            id="item-location"
            name="item-location"
            type="location"
            required
            disabled
            defaultValue={selectedCustomer && selectedCustomer.location}
            className="mt-4 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Customer Location - e.g Nairobi"
          />
          <button
            type="submit"
            onClick={createNotification("info")}
            className="mt-4 w-full justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Submit
          </button>
        </div>
      </form>
      <NotificationContainer />
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
      > button {
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
`;
