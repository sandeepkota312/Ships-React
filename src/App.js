import React, { useEffect, useState } from "react";
import "./styles.css";
import gql from "graphql-tag";
import request from "./utils/request";
import Search from "./components/seach";
import Gather from "./components/gather";

export default function App() {
  const [rawData, setRawData] = useState(null);
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchShips = async () => {
    const response = await request(gql`
      {
        ships {
          name
          home_port
          image
        }
      }
    `);
    setRawData(response.data.ships);
    setIsLoading(false);
    console.log("response:" + response.data);
  };

  useEffect(() => {
    fetchShips();
  }, []);

  useEffect(() => {
    setSearchTerm("");
    setData(rawData);
  }, [rawData]);

  useEffect(() => {
    if (searchTerm.length !== 0) {
      setData((prevData) =>
        prevData.filter((ship) =>
          ship.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setData(rawData);
    }
  }, [searchTerm, rawData]);

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  return (
    <div className="App">
      <nav className="navbar">
        <h1 className="text">Ships Data</h1>
        {/* <span className="text">Search here</span> */}
        <Search
          changeSearchTerm={(inp) => setSearchTerm(inp)}
          searchTerm={searchTerm}
        />
      </nav>
      <div>
        {data && <Gather data={data} />}
        {isLoading && (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        )}
      </div>
    </div>
  );
}
