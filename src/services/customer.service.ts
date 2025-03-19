import { Login } from "@/schemas/login.schema";
import { Register } from "@/schemas/register.schema";
import { UpdateCustomer } from "@/schemas/updateCustomer.schema";
import { apiAuth, apiPublic } from "@/utils/api";


export const registerCustomer = async (customerData: Register) => {
  const { data } = await apiPublic.post("/auth/register/", customerData);
  return data;
};

export const loginCustomer = async (credentials: Login) => {
  const { data } = await apiPublic.post("/auth/login/", credentials);
  return data;
};

export const getCustomerProfile = async () => {
  const { data } = await apiAuth.get("/customer/profile/");
  return data;
};

export const updateCustomerProfile = async (profileData: UpdateCustomer) => {
  const { data } = await apiAuth.put("/customer/update/", profileData);
  return data;
};
