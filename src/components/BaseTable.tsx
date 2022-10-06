import React from 'react';
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
  Alert,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Box,
  TextField,
} from "@mui/material";
import { DataGrid, GridColDef, GridRowModel, GridRowId, GridValueGetterParams } from '@mui/x-data-grid';
import { faker } from "@faker-js/faker";
import ButtonBar from './ButtonBar';
import OrderService from '../api/api.tsx';
import Order from '../models/Order.tsx';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Reac, { useState, useEffect } from "react";
import Snackbar from '@mui/material/Snackbar';
import { v4 as uuidv4 } from 'uuid';

interface Order {
  id: string;
  createdDate: Date;
  createdByUsername: string;
  type: string;
  customerName: string;
}

let OrderType: string[] = ['Standard', 'Sale Order', 'Purchase Order', 'Transfer Order', 'Return Order'];
let OrderTypeMap = new Map<string, number>([
        ["Standard", 0],
        ["Sale Order", 1],
        ["SaleOrder", 1],
        ["Purchase Order", 2],
        ["PurchaseOrder", 2],
        ["Transfer Order", 3],
        ["TransferOrder", 3],
        ["Return Order", 4],
        ["ReturnOrder", 4],

    ]);

let ignore:boolean = false;

console.log("Something");
var ordersList: Array<Order> = [];
var deleteList: Array<Order> = [];

console.log("Next? " + ordersList);

const tableContainerSx: SxProps = {
  width: "inherit",
  marginLeft: 0,
  marginRight: 0,
  marginTop: 4,
  borderRadius: 2,
  maxHeight: 700
};

const useFakeMutation = () => {
  return React.useCallback(
    (order: Partial<Order>) =>
      new Promise<Partial<User>>((resolve, reject) =>
        setTimeout(() => {
          if (order.name?.trim() == '') {
            reject(new Error("Error while saving Order: customer name can't be empty."));
          } else {
            resolve({ ...order, name: order.customerName?.toUpperCase() });
          }
        }, 200),
      ),
    [],
  );
};

const createRandomRow = () => {
    let tempDate:Date = new Date();
    let tempOrder:Order = {id: uuidv4(), createdDate : tempDate, createdByUsername : "frowell", type : "Standard", customerName : "John Doe"};
    OrderService.create({id: tempOrder.id, createdDate : tempOrder.createdDate, createdByUsername : "frowell", type : 0, customerName : "John Doe"})      
              .then((response: any) => {
              })
              .catch((e: Error) => {
                console.log(e);
              });
  return tempOrder;
};

export default function DataTable() {
    const mutateRow = useFakeMutation();
    const [orders, setDataGridRows] = useState([]);
    const [selectionModel, setSelectionModel] = React.useState<GridSelectionModel>([]);
    const [orderType, setOrder] = React.useState('');
    const [snackbar, setSnackbar] = React.useState<Pick<
    AlertProps,
    'children' | 'severity'
  > | null>(null);
    const [idSearch, setIdSearch] = useState('');
    const OrderTypeMap2 = new Map<string, number>([
        ["Standard", 0],
        ["Sale Order", 1],
        ["SaleOrder", 1],
        ["Purchase Order", 2],
        ["PurchaseOrder", 2],
        ["Transfer Order", 3],
        ["TransferOrder", 3],
        ["Return Order", 4],
        ["ReturnOrder", 4],

    ]);

    const handleCloseSnackbar = () => setSnackbar(null);

    useEffect(() => {
        if(!ignore) {
            OrderService.getAll()      
              .then((response: any) => {
                for (let i = 0; i < response.data.length; i++) {
                  console.log(response.data[i]);
                  setDataGridRows(orders => [...orders, {
                    id: response.data[i].id,
                    createdDate: new Date(response.data[i].createdDate),
                    createdByUsername: response.data[i].createdByUsername,
                    type: OrderType[response.data[i].type],
                    customerName: response.data[i].customerName
                  }]);
                }
              })
              .catch((e: Error) => {
                console.log(e);
              });
              ignore = true;
        }
    })

    const processRowUpdate = React.useCallback(
    async (newRow: GridRowModel) => {
        console.log("New Row: " + newRow);
        OrderService.update(newRow.id, {'id': newRow.id, 'createdDate' : newRow.createdDate, 'createdByUsername' : newRow.createdByUsername, 'type' : OrderTypeMap[newRow.type], 'customerName' : newRow.customerName})
              .then((response: any) => {
                console.log("Resp: " + response);
                setSnackbar({ children: 'User successfully saved', severity: 'success' });
              })
              .catch((e: Error) => {
                console.log(e);
              });
              console.log("Resp: " + response);
      return response;
    },
    [mutateRow]
  );
      const handleProcessRowUpdateError = React.useCallback((error: Error) => {
        setSnackbar({ children: error.message, severity: 'error' });
      }, []);

    const handleDeleteClick = (id: GridRowId) => () => {
        const selectedIDs = new Set(selectionModel);
        id.filter((x) => !selectedIDs.has(x.id)).forEach(element =>
            OrderService.remove(element)
                .then((response: any) => {
                })
                .catch((e: Error) => {
                  console.log(e);
                })
            );
        setDataGridRows((r) => r.filter((x) => !selectedIDs.has(x.id)));
    };

    const handleChange = (event: SelectChangeEvent) => {
            setOrder(event.target.value as string);
            let orderTypeForMapping:string = event.target.value.toString();
            let orderTypeMapped:number = event.target.value;
            console.log("Event2: " + event.target.value);
            console.log("Event: " + OrderType[orderTypeForMapping] + "Type Map: " + OrderTypeMap2["Sale Order"]);
            OrderService.findByType(orderTypeMapped)
              .then((response: any) => {
                    let orderList: Array<Order> = [];
                    for (let i = 0; i < response.data.length; i++) {
                        let tempDate:date = new Date(response.data[i].createdDate);
                        let temp:Order = {'id': response.data[i].id, 'createdDate' : tempDate, 'createdByUsername' : response.data[i].createdByUsername, 'type' : OrderType[response.data[i].type], 'customerName' : response.data[i].customerName};
                        orderList[i] = temp;
                      };
                  setDataGridRows(orderList);
                }
              )              
              .catch((e: Error) => {
                console.log("Event: " + event.target.value);
                console.log(e);
              });
                

     };
     const handleIdSearch = (event: SelectChangeEvent) => {
            OrderService.get(idSearch)
              .then((response: any) => {

                  
                  let orderById:Order = {'id': response.data.id, 'createdDate' : response.data.createdDate, 'createdByUsername' : response.data.createdByUsername, 'type' : OrderType[response.data.type], 'customerName' : response.data.customerName};
                  let orders:Array<Order> = [orderById];
                  setDataGridRows(orders);
                }
              )              
              .catch((e: Error) => {
                console.log("Event: " + event.target.value);
                console.log(e);
              });
                

     };

    const handleAddRow = () => {
        setDataGridRows((prevRows) => [...prevRows, createRandomRow()]);
    };

  return (
    <div style={{width: '100%'}}>

    <div style={{ height: 800, width: '100%' }}>

    <Stack direction={{sm: 'column', md: 'row' }} spacing={2} sx={{mt: 10, mr:"auto"}}>
        <Stack direction="row" spacing={2}>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="Customer Search" variant="outlined" onChange={(event) => {setIdSearch(event.target.value)}}/>
            </Box>
            <Stack direction="row" spacing={2}>
                <Button variant="contained" startIcon={<SearchIcon/>} sx={{mx:"auto"}} onClick={handleIdSearch}></Button>
            </Stack>
        </Stack>
        <Stack direction="row" spacing={2}>
            <Button variant="contained" startIcon={<AddIcon/>} sx={{mx:"auto"}} onClick={handleAddRow}>Create Order</Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" startIcon={<DeleteIcon/>} onClick={      
            handleDeleteClick(selectionModel)
          }
           sx={{mx:"auto"}}>Delete Selected</Button>
        </Stack>
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="order-type-select-label">Order Type</InputLabel>
        <Select
          labelId="order-type-select-label"
          id="order-type-select"
          value={orderType}
          label="Order Type"
          onChange={handleChange}
        >
          <MenuItem value={"5"}>Order Type</MenuItem>
          <MenuItem value={"0"}>Standard</MenuItem>
          <MenuItem value={"1"}>Sale Order</MenuItem>
          <MenuItem value={"2"}>Purchase Order</MenuItem>
          <MenuItem value={"3"}>Transfer Order</MenuItem>
          <MenuItem value={"4"}>Return Order</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </Stack>
      <DataGrid
        experimentalFeatures={{newEditingApi: true}}
        rows={orders}
        columns={[
          { field: 'id', headerName: 'ID', width: 300 },
          { field: 'createdDate', headerName: 'Created Date', width: 450 },
          { field: 'createdByUsername', headerName: 'Created by', editable: true},
          { field: 'type', headerName: 'Order Type', width: 150, type: 'singleSelect', valueOptions: ['Standard', 'Sale Order', 'Purchase Order', 'Transfer Order', 'Return Order'], editable: true},
          { field: 'customerName', headerName: 'Customer Name', width: 150, editable: true}
            ]}
        pageSize={15}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
          console.log(newSelectionModel);
        }}
        selectionModel={selectionModel}
        processRowUpdate={processRowUpdate}
        onProcessRowUpdateError={handleProcessRowUpdateError}

      />

    {!!snackbar && (
        <Snackbar
          open
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          onClose={handleCloseSnackbar}
          autoHideDuration={6000}
        >
          <Alert {...snackbar} onClose={handleCloseSnackbar} />
        </Snackbar>
      )}
    </div>
    </div>
  );
}