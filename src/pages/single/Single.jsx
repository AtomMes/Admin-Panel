import React from "react";
import "./single.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { Button, Paper } from "@mui/material";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <Button className="editButton" color="secondary">
              Edit
            </Button>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="IMG"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane doe</h1>
                <div className="itemDetail">
                  <div className="itemKey">Email: </div>
                  <div className="itemValue">janedoe@gmail.com</div>
                </div>
                <div className="itemDetail">
                  <div className="itemKey">Phone: </div>
                  <div className="itemValue">+1 8946 89 26</div>
                </div>
                <div className="itemDetail">
                  <div className="itemKey">Address: </div>
                  <div className="itemValue">
                    Elton st. 234 Garden yt. New York
                  </div>
                </div>
                <div className="itemDetail">
                  <div className="itemKey">Country: </div>
                  <div className="itemValue">USA</div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={4 / 1} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        <Paper className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Table />
        </Paper>
      </div>
    </div>
  );
};

export default Single;
