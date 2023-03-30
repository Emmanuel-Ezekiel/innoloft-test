import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

interface Props {
  url: string;
  id: string;
}

  //fetch Products
 export const getProduct = createAsyncThunk(
    "product/getProduct",
    async ({ url, id }: Props) => {
      const { data } = await axios.get(`${url}/${id}`);
      return data;
    }
  ); 

 export const updateProduct = createAsyncThunk(
    "product/updateProduct",
    async ({ url, id }: Props) => {
      const { data } = await axios.put(`${url}/${id}`);
      console.log(data)
      return data;
    }
  ); 

const ApiRequest = () => {
  const dispatch = useAppDispatch();

  //fetch postmanCollectios
  const getPostmanCollections = async () => {
    axios
      .get("https://api-test.innoloft.com/postman_collection.json")
      .then((response) => {
        const data = response.data.item;
        const host = data[0].request.url.host;
        const path = data[0].request.url.path[0];
        const url = `https://${host.join(".")}/${path}`;
        const ID = data[0].request.url.variable[0].value;

        console.log(data)

        //dispatch product to store
        dispatch(getProduct({ url: url, id: ID }));
        dispatch(updateProduct({ url: url, id: ID }));
      })
      .catch((error) => {
        console.error(error);
      });
  };



  return {
    getPostmanCollections,
  };
};

export default ApiRequest;
