import React from "react";
import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../dataTableSource";
import { Button } from "@mui/material";

const DataTable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Button
              color="primary"
              variant="outlined"
              size="small"
              className="viewButton"
            >
              View
            </Button>
            <Button
              color="error"
              variant="outlined"
              size="small"
              className="deleteButton"
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="dataTable">
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
