import { generate_massage } from "..";
import { TMassageTable } from "../../@types/book";
import axios from "axios";

export const fetchMassageList = async () => {
  const response = await axios.get<TMassageTable[]>(generate_massage);
  return response.data;
};
