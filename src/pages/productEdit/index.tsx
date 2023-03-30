import React, { useEffect, useRef, ReactElement } from "react";
import { useAppSelector, useAppDispatch, } from "../../hooks/hooks";
import { Link } from "react-router-dom";
import axios from "axios";
import { getTrl } from "../../api/Api";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { setBody,  setSelectedTRL } from "../../features/editSlice/editSlice";


const Index = () => {
  const { getProduct }: any = useAppSelector((state) => state.product);
  const { trlUrl, updateUrl, id, body, selectedTRL, configData}: any = useAppSelector((state) => state.edit);
  const dispatch = useAppDispatch();

  // const [selectedTRL, setSelectedTRL] = React.useState<any>();
  const [editorContent, setEditorContent] = React.useState("");



  console.log("con",  configData);

  // updateProduct
  const updateProduct = async () => {
    const {data} = await axios.put(`${updateUrl}/${id}`);
    return data;
  }

  const submit = (event: any) => {
    event.preventDefault();
    updateProduct();
  }

  // React.useEffect(() => {
  //   getTrl(trlUrl).then((response: any) => {
  //     console.log("rest", response);
  //     setSelectedTRL(response);
  //   });
  // }, [trlUrl]);


  //generate Text
  const generateText = (selectedTRLItem: any) => {
    if (selectedTRLItem) {
      const code = `<p>${selectedTRLItem.name}</p>`;
      setEditorContent(code);
    } else {
      setEditorContent("");
    }
  };

  //select Trl
  const handleSelect = (event: any) => {
    event.preventDefault();
    const selectedOption = event.target.value;
    if (selectedOption) {
      const selectedTRLId = parseInt(selectedOption);
      const selectedTRLItem = selectedTRL?.find(
        (item: any) => item.id === selectedTRLId.toString()
      );
      setSelectedTRL((prevState: any) => [...prevState, selectedTRLItem]);
      // dispatch(setBody(selectedTRLItem));
      generateText(selectedTRLItem);
      updateProduct();
    }
  };


  //clear Text Editor
  const clear = () => {
    setEditorContent("");
  }

  //change Text Editor
  const handleEditorChange = (value: any) => {
    setEditorContent(value);
    dispatch(setBody(value));
  };

  return (
    <div className="w-[1130px] h-[1364px] md:w-full">
      <header className="w-full h-[30px] mt-[20px] md:w-[full] md:h-[70px] md:mt[19.7px] flex items-center justify-between md:flex-col md:items-start">
        <div className="w-[1065px] h-[24px] flex items-center md:w-full md:h-[20px]">
          <div className="w-[100px] h-[20px] flex items-center justify-between">
            <p className="text-[#374151] text-semibold text-[16px] text-normal">
              Offer Title
            </p>
          </div>
        </div>

        <Link to="/product">
          <button className="w-[89px] h-[30px] bg-[#272E71] rounded-md border border-[#272E71] text-[#ffffff] text-sm cursor-pointer">
            View Offer
          </button>
        </Link>
      </header>

      <section className="w-full h-[629px] md:h-auto mt-[20px] rounded-md border-[#E5E7EB] bg-[#FFFFFF] relative border flex md:flex-col items-center justify-center md:justify-start">
        <div className="absolute top-0 left-0 w-[120px] h-[40px] border-t border-l border-[#E5E7EB] rounded-md flex ">
          <div className="w-[40px] h-[40px] border-t border-r-0 border-b-0 border-l border-[#E5E7EB] rounded-md flex bg-[#272E71] items-center justify-center">
            <img src="/icon-rib.svg" alt="" />
          </div>

          <p className="text-center mx-[10px] my-[9px] font-semibold text-[16px] font-['Open_Sans'] ">
            Patent
          </p>
        </div>
        <div className="w-[746px] h-[518px] flex-col flex md:w-full md:h-[180px]">
          <img
            src={getProduct?.picture}
            alt=""
            className="w-[746px] h-[300px]"
          />

          <div className="w-[706px] h-[247px] m-[20px] flex flex-col gap-[10px] items-start md:w-full md:h-336px md:m-[0px]">
            <h2 className="text-[#374151] font-semibold text-base border w-full flex items-start border-[#D1D5DB]">
              {getProduct?.name}
            </h2>
            <div className="w-full">
              <ReactQuill value={editorContent} onChange={handleEditorChange} className="h-[100px]"/>
            </div>
            <div className="w-[740px] h-[60px] flex items-center justify-end pr-[30px] gap-[5px] md:w-full mt-[30px]">
              <button className="w-[44px] h-[30px]" onClick={clear}>Clear</button>
              <button className="w-[72px] h-[30px] bg-[#272E7180] border rounded-md flex text-center justify-center p-[5px] gap-[3px]" onClick={submit}>
                <img src="/icon-mark.svg" alt="" /> Save
              </button>
            </div>

            {/* <textarea name="" id="" cols={30} rows={10}></textarea> */}
          </div>
        </div>
        <div className="w-[382px] h-full border border-[#E5E7EB] md:h-[305.19px] md:w-full md:mt-[350px]">
          <div className="w-[342px] h-[230.31px]  mx-[21px] mt-[21px] flex flex-col gap-[10px] md:mx-[0px]">
            <h1 className="w-full h-[24px] flex items-start font-semibold text-[16px]">
              Offered By
            </h1>
            <img
              src={getProduct?.company?.logo}
              alt=""
              className="w-[200px] h-[46.31px]"
            />
            <div className="w-full h-70px flex items-center gap-[10px]">
              <img
                src={getProduct?.user?.profilePicture}
                alt=""
                className="w-[60px] h-[60px] rounded-full"
              />
              <div className="w-full h-[43px] flex flex-col items-start ">
                <h1 className='font-semibold text-[14px] font-["Open_Sans"] text-[#6B7280]'>
                  {getProduct?.user?.firstName} {getProduct?.user?.lastName}
                </h1>
                <p className='font-normal text-[14px] font-["Open_Sans"] text-[#6B7280]'>
                  {getProduct?.company?.name}
                </p>
              </div>
            </div>
            <div className="w-full h-[60px] flex items-center">
              <div className="w-full h-[40px]  flex justify-start gap-[5px]">
                <img
                  src="/inno_location.svg"
                  alt=""
                  className="w-[14px] h-[14px]"
                />
                <div className="flex flex-col items-start ">
                  <h1 className='font-normal text-[14px] font-["Open_Sans"] text-[#6B7280]'>
                    {getProduct?.company?.address?.street}
                  </h1>
                  <p className='font-normal text-[14px] font-["Open_Sans"] text-[#6B7280]'>
                    {getProduct?.company?.address?.zipCode}{" "}
                    {getProduct?.company?.address?.city?.name}{" "}
                    {getProduct?.company?.address?.country?.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-[122px] mt-[20px] rounded-md border-[#E5E7EB] bg-[#FFFFFF] border flex items-start flex-col">
        <h1 className='font-semibold text-[16px] font-["Open_Sans"] text-[#374151] m-[20px]'>
          Video
        </h1>

        <div className="w-[1090px] h-[30px] mx-[20px] rounded-md border-[#E5E7EB] bg-[#FFFFFF] border md:mx-[0px] md:w-full flex items-start md:h-[38px]">
          <input
            type="text"
            name=""
            placeholder="Add a youtube or vimeo link"
            className="w-full p-[5px]"
          />
        </div>
      </section>
      <section className="w-full h-[290px] my-[20px] rounded-md border-[#E5E7EB] bg-[#FFFFFF] border flex items-start flex-col md:w-full">
        <div className="w-[1090px] h-[180px] m-[20px] rounded-md border-[#E5E7EB] bg-[#FFFFFF]  flex items-start flex-col md:w-full  md:m-[20]">
          <h1 className='font-semibold text-[16px] font-["Open_Sans"] text-[#374151]'>
            Offer details
          </h1>

          <h2> TRL level</h2>
          <select
            onChange={handleSelect}
            className="mt-[20px] border cursor-pointer"
          >
            <option value="">Select TRL level</option>
            {selectedTRL?.map((item: any) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </section>
    </div>
  );
};

export default Index;
