import * as React from 'react';
import CreateButton from './CreateButton';
import DeleteButton from './DeleteButton';
import SearchBar from './SearchBar';
import OrderType from './OrderType';
import Stack from '@mui/material/Stack';

export default function SearchButton() {
  return (
    <Stack direction={{sm: 'column', md: 'row' }} spacing={2} sx={{mt: 10, mr:"auto"}}>
      <SearchBar></SearchBar>
      <CreateButton></CreateButton>
      <DeleteButton></DeleteButton>
      <OrderType></OrderType>
    </Stack>
  );
}
