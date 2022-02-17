// this will render the vendor page

import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Vendor() {
  const [orders, setOrders] = useState([])
  const baseAPIUrl = "https://team2-api-hackathon-2022.onrender.com/api"

  useEffect(async () => {

    const getVendor = async () => {
      const response = await fetch(`${baseAPIUrl}/vendor`);
      const vendor = await response.json();
      return vendor;
    }

    const getDistance = async (vendorLocation, customerLocation) => {

    }

    const getOrders = async () => {
      const response = await fetch(`${baseAPIUrl}/orders`);
      const order = await response.json();
      return order
    }

    // const vendors = await getVendor();
    // const distance = await getDistance("d","");
    const orders = await getOrders();
    console.log(orders)

    setOrders(orders);

  }, [])

  const dispatchOrder = async (id) => {
    // alert("Confirm order Dispatch")
    const payload = {
      id:id
    }
    const response = await fetch(`${baseAPIUrl}/orders`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(payload)
    })

    const data = await response.json();

    return data
  }

  return (
    <MainDiv>
      <h3>Vendor</h3>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Order ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Gas Size
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Distance
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      State
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Customer ID
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orders.map((order) => (
                    <tr key={order.orderID}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm text-gray-500">{order.orderID}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{order.gasSize}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold text-green-800">
                          {order.distance}km
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.state}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customerId}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900" onClick={async () => await dispatchOrder(order.orderID)}>
                          Mark Order as Dispatched
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
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
