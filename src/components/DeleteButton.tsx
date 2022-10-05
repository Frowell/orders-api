import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import OrderService from '../api/api.tsx';
import Order from '../models/Order.tsx';



export default function DeleteButton() {
  const [selectionModel, setSelectionModel] = React.useState([]);
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" startIcon={<DeleteIcon/>} onClick={() => {
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
