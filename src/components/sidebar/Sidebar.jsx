import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Sections = [
  {
    icon: <DashboardIcon className="icon" />,
    text: "Dashboard",
  },
  {
    icon: <PersonOutlineIcon className="icon" />,
    text: "Users",
  },
  {
    icon: <LocalShippingIcon className="icon" />,
    text: "Products",
  },
  {
    icon: <CreditCardIcon className="icon" />,
    text: "Orders",
  },
  {
    icon: <StoreIcon className="icon" />,
    text: "Delivery",
  },
  {
    icon: <InsertChartIcon className="icon" />,
    text: "Status",
  },
  {
    icon: <SettingsApplicationsIcon className="icon" />,
    text: "Notifications",
  },
  {
    icon: <ExitToAppIcon className="icon" />,
    text: "System Health",
  },
  {
    icon: <NotificationsNoneIcon className="icon" />,
    text: "Logs",
  },
  {
    icon: <SettingsSystemDaydreamOutlinedIcon className="icon" />,
    text: "Settings",
  },
  {
    icon: <PsychologyOutlinedIcon className="icon" />,
    text: "Profile",
  },
  {
    icon: <AccountCircleOutlinedIcon className="icon" />,
    text: "Logout",
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin Panel</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          {Sections.map((section, id) => (
            <>
              {section.text === "Dashboard" && <p className="title">Main</p>}
              {section.text === "Users" && <p className="title">Lists</p>}
              {section.text === "Status" && <p className="title">Useful</p>}
              {section.text === "System Health" && (
                <p className="title">Service</p>
              )}
              {section.text === "Profile" && <p className="title">User</p>}
              <li>
                {section.icon}
                <span>{section.text}</span>
              </li>
            </>
          ))}
          {/* <p className="title">Main</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">Lists</p>
          <li>
            <PersonOutlineIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <StoreIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">Useful</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Status</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">Service</p>
          <li>
            <ExitToAppIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">User</p>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Logout</span>
          </li> */}
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
