import { Login } from "@/schemas/login.schema";
import { Register } from "@/schemas/register.schema";
import { UpdateCustomer } from "@/schemas/updateCustomer.schema";
import api from "@/utils/api";

export const registerCustomer = async (customerData: Register) => {
  const { data } = await api.post("/customer/register/", customerData);
  return data;
};

export const loginCustomer = async (credentials: Login) => {
  const { data } = await api.post("/customer/login/", credentials);
  return data;
};

export const getCustomerProfile = async () => {
  const { data } = await api.get("/customer/profile/");
  return data;
};

export const updateCustomerProfile = async (profileData: UpdateCustomer) => {
  const { data } = await api.put("/customer/update/", profileData);
  return data;
};
