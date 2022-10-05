import http from "../http-common";
import Order from "../models/Order.tsx";

const getAll = () => {
  return http.get<Array<Order>>("/Orders");
};

const get = (id: any) => {
  return http.get<Order>(`/Orders/${id}`);
};

const create = (data: Order) => {
  return http.post<Order>("/Orders", data);
};

const update = (id: any, data: Order) => {
  return http.put<any>(`/Orders/${id}`, data);
};

const remove = (id: any) => {
  return http.delete<any>(`/Orders/${id}`);
};

const findByType = (type: string) => {
  return http.get<Array<Order>>(`/Orders/OrdersByType/${type}`);
};

const OrderService = {
  getAll,
  get,
  create,
  update,
  remove,
  findByType,
};

export default OrderService;