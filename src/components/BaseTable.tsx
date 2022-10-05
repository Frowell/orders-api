import {
  Button,
  Link,
  Paper,
  Stack,
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
} from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { faker } from "@faker-js/faker";
import OrderService from '../api/api.tsx';
import Order from '../models/Order.tsx';

interface Order {
  id: string;
  createdDate: Date;
  createdByUsername: string;
  type: string;
  customerName: string;
}

let OrderType: string[] = ['Standard', 'Sale Order', 'Purchase Order', 'Transfer Order', 'Return Order'];


var orders: Array<Order> = [];
console.log("Something");
var ordersList: Array<Order> = [];
var deleteList: Array<Order> = [];
OrderService.getAll()      
      .then((response: any) => {
        for (let i = 0; i < response.data.length; i++) {
          console.log(response.data[i]);
          orders.push({
            id: response.data[i].id,
            createdDate: new Date(response.data[i].createdDate),
            createdByUsername: response.data[i].createdByUsername,
            type: OrderType[response.data[i].type],
            customerName: response.data[i].customerName
          });
        }
      })
      .catch((e: Error) => {
        console.log(e);
      });
console.log("Next? " + ordersList);

const tableContainerSx: SxProps = {
  width: "inherit",
  marginLeft: 0,
  marginRight: 0,
  marginTop: 4,
  borderRadius: 2,
  maxHeight: 700
};

export default function DataTable() {
  return (
    <div style={{ height: 800, width: '100%' }}>
      <DataGrid
        experimentalFeatures={{newEditingApi: true}}
        rows={orders}
        columns={[
          { field: 'id', headerName: 'ID', width: 300 },
          { field: 'createdDate', headerName: 'Created Date', width: 450 },
          { field: 'createdByUsername', headerName: 'Created by' },
          { field: 'type', headerName: 'Order Type', width: 150 },
          { field: 'customerName', headerName: 'Customer Name', width: 150, editable: true}
            ]}
        pageSize={15}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onSelectionModelChange={(ids) => {
          const selectedIDs = new Set(ids);
          const selectedRowData = orders.filter((row) =>
            selectedIDs.has(row.id.toString())
          );
          console.log(selectedRowData);
        }}

      />
    </div>
  );
}