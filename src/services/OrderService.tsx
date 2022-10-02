import axios from 'axios';

type Order = {
	Id: string;
	orderType: string;
	customerName: string;
	cretedDate: Date;
	createdByUsername: string;
};

type GetOrdersResponse = {
	data: Order[];
};
type CreateOrderResponse = {
	Id: string;
	orderType: string;
	customerName: string;
	cretedDate: Date;
	createdByUsername: string;
}

type UpdateOrderResponse = {
	Id: string;
	orderType: string;
	customerName: string;
	cretedDate: Date;
	createdByUsername: string;
}

type DeleteOrderResponse = '';

type SelectOrdersByTypeResponse = {
	data: Order[];
}

async function getOrders() {
  try {
    // 👇️ const data: GetOrdersResponse
    const { data, status } = await axios.get<GetOrdersResponse>(
      'https://reqres.in/api/Orders',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    console.log(JSON.stringify(data, null, 4));

    // 👇️ "response status is: 200"
    console.log('response status is: ', status);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

type CreateOrderResponse = {
  name: string;
  job: string;
  id: string;
  createdAt: string;
};

async function createOrder() {
  try {
    // 👇️ const data: CreateOrderResponse
    const { data } = await axios.post<CreateOrderResponse>(
      'https://reqres.in/api/Orders',
      { name: 'John Smith', job: 'manager' },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );

    console.log(JSON.stringify(data, null, 4));

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      // 👇️ error: AxiosError<any, any>
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

async function updateOrder() {
  try {
    // 👇️ const data: UpdateOrderResponse
    const { data } = await axios.put<UpdateOrderResponse>(
      'https://reqres.in/api/Orders/2',
      { name: 'John Smith', job: 'manager' },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );

    console.log(JSON.stringify(data, null, 4));

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      // 👇️ error: AxiosError<any, any>
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

async function deleteOrder() {
  try {
    // 👇️ const data: UpdateOrderResponse
    const { data, status } = await axios.delete<DeleteOrderResponse>(
      'https://reqres.in/api/Orders/2',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    console.log('response is: ', data);

    // 👇️ response status is: 204
    console.log('response status is: ', status);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      // 👇️ error: AxiosError<any, any>
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}