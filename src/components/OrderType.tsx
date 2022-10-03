import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [orderType, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
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
          <MenuItem value={"Standard"}>Standard</MenuItem>
          <MenuItem value={"SaleOrder"}>Sale Order</MenuItem>
          <MenuItem value={"PurchaseOrder"}>Purchase Order</MenuItem>
          <MenuItem value={"TransferOrder"}>Transfer Order</MenuItem>
          <MenuItem value={"ReturnOrder"}>Return Order</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
