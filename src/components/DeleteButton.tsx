import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import BaseTable from './BaseTable';
import Stack from '@mui/material/Stack';
import OrderService from '../api/api.tsx';
import Reac, { useState, useEffect } from "react";
import Order from '../models/Order.tsx';




export default function DeleteButton() {
  const [selectionModel, setSelectionModel] = React.useState([]);
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" startIcon={<DeleteIcon/>} onClick={() => {
        console.log(BaseTable.id);
        const selectedIDs = new Set(selectionModel)
        selectedIDs.forEach(element => {
          OrderService.remove(element)
            .then((response: any) => {
            })
            .catch((e: Error) => {
              console.log(e);
            });

        })
      }}
       sx={{mx:"auto"}}>Delete Selected</Button>
    </Stack>
  );
}
