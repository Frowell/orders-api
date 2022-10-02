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
import { faker } from "@faker-js/faker";

interface Order {
  orderId: string;
  creatonDate: Date;
  createdBy: string;
  orderType: string;
  customerName: string;
}

const orders: Array<Order> = [];

for (let i = 0; i < 20; i++) {
  orders.push({
    orderId: faker.datatype.uuid(),
    creatonDate: faker.date.recent(),
    createdBy: faker.name.fullName(),
    orderType: faker.finance.transactionType(),
    customerName: faker.name.fullName()
  });
}

const tableContainerSx: SxProps = {
  width: "inherit",
  marginLeft: 0,
  marginRight: 0,
  marginTop: 4,
  borderRadius: 2,
  maxHeight: 500
};

export default function TutorialTable() {
  return (
    <>
      <TableContainer
        component={Paper}
        sx={tableContainerSx}
      >
        <Table stickyHeader={true}>
          <TableHead>
            <TableRow>
              <TableCell scope="header" color="primary"><Checkbox/></TableCell>
              <TableCell scope="header">Order Id</TableCell>
              <TableCell scope="header">Creation Date</TableCell>
              <TableCell scope="header">Created by</TableCell>
              <TableCell scope="header">Order Type</TableCell>
              <TableCell scope="header">Customer Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((address) => (
              <TableRow key={address.orderId}>
              <TableCell scope="header"><Checkbox  color="primary"/></TableCell>
                <TableCell scope="row">
                  <Stack direction="column">
                    <div>
                    {address.orderId}
                    </div>
                  </Stack>
                </TableCell>
                <TableCell scope="row">
                    <div>
                    {address.creatonDate.getDate()}
                    </div>
                </TableCell>
                <TableCell scope="row">{address.createdBy}</TableCell>
                <TableCell scope="row">
                  {address.orderType}
                </TableCell>                
                <TableCell scope="row">
                    {address.customerName}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}