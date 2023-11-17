import React, { useEffect, useState } from "react";

export default function Table() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setTableData(data);
      });
  };

  return (
    <div>
      <table border="true">
        <tr>
            <th>SI.no</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
            <th>Image</th>
        </tr>
        {tableData.length &&
          tableData.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.price}</td>
                <td>{data.category}</td>
                <td>{data.description}</td>
                <td>
                  <img width="100" src={data.image} alt="."/>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}
