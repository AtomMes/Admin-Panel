import React from "react";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Table from "../../components/table/Table";
import Widget from "../../components/widget/Widget";
import "./home.scss";

const widgets = [
  {
    type: "user",
  },
  {
    type: "order",
  },
  {
    type: "earnings",
  },
  {
    type: "balance",
  },
];

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          {widgets.map((widget, i) => (
            <Widget key={i} type={widget.type} />
          ))}
        </div>
        <div className="charts" >
        <Featured />
        <Chart aspect={2/1} title={'Last 6 Months (Revenue)'}/>
        </div>
        <div className="listContainer">
          <div className="listTitle">
            Latest Transactions
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
