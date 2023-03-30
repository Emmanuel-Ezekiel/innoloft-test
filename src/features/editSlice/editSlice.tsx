import { createSlice } from "@reduxjs/toolkit";

type State = {
 trlUrl: string
 updateUrl: string
 id: string,
 body: string,
 selectedTRL: any
 configData: any
};

const initialState: State = {
    trlUrl: "",
    updateUrl: "",
    id: "",
    body: "",
    selectedTRL: [],
    configData: {},
};

// const [selectedTRL, setSelectedTRL] = React.useState<any>();

const editResponse = createSlice({
  name: "editResponse",
  initialState,
  reducers: {
    setTrl: (state, action) => {
      state.trlUrl = action.payload
    },
    setUpdate: (state, action) => {
      state.trlUrl = action.payload
    },
    setId: (state, action) => {
      state.trlUrl = action.payload
    },
    setBody: (state, action) => {
      state.trlUrl = action.payload
    },
    setSelectedTRL: (state, action) => {
      state.selectedTRL = action.payload
    },
    setConfig: (state, action) => {
      state.configData = action.payload
    },
  },
});

const { reducer, actions } = editResponse;
export const { setTrl, setUpdate, setId, setBody,setSelectedTRL, setConfig } = actions;
export default reducer;