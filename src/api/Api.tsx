import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import {
  setTrl,
  setUpdate,
  setId,
  setBody,
  setSelectedTRL,
  setConfig
} from "../features/editSlice/editSlice";

interface Props {
  url: string;
  id: string;
  body?: string;
}

//fetch Products
export const getProduct = createAsyncThunk(
  "product/getProduct",
  async ({ url, id }: Props) => {
    const { data } = await axios.get(`${url}/${id}`);
    return data;
  }
);

export const getTrl = createAsyncThunk(
  "product/getProduct",
  async ({ url }: Props) => {
    const { data } = await axios.get(`${url}`);
    console.log("get", data);
    return data;
  }
);




// export const getTrl = async (url: any) => {
//   const {data} = await axios.get(url);

//   console.log("get", data)
//   return data;
// }

const ApiRequest = () => {
  const dispatch = useAppDispatch();

  const Config = createAsyncThunk(
    "product/updateProduct",
    async ({ url, id }: Props) => {
      const { data } = await axios.get(`${url}/${id}`);
      dispatch(setConfig(data));
      return data;
    }
  );

  //fetch postmanCollectios
  const getPostmanCollections = async () => {
    axios
      .get("https://api-test.innoloft.com/postman_collection.json")
      .then((response) => {
        const data = response.data.item;
        const host = data[0].request.url.host;
        const path = data[0].request.url.path[0];
        const host2 = data[3].request.url.host;
        const path2 = data[3].request.url.path[0];
        const url = `https://${host.join(".")}/${path}`;
        const url2 = `https://${host2.join(".")}/${path2}`;
        const ID = data[0].request.url.variable[0].value;
        const ID2 = data[3].request.url.variable[0].value;
        const trlUrl = data[2].request.url.raw;

        console.log("get", data);
        //dispatch product to store
        // getTrl(trlUrl);
        const getTrl = createAsyncThunk("product/getProduct", async () => {
          const { data } = await axios.get(trlUrl);
          dispatch(setSelectedTRL(data));
          return data;
        });

       
        
        dispatch(Config({url:url2, id:ID2}));
        dispatch(setTrl(trlUrl));
        dispatch(getTrl());
        dispatch(setUpdate(url));
        dispatch(setId(ID));
        dispatch(getProduct({ url: url, id: ID }));
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
