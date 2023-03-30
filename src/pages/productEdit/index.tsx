import React, { useEffect, useRef, ReactElement } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { Link } from "react-router-dom";
import { RichTextEditor } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
// import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
// import Underline from "@tiptap/extension-underline";
// import TextAlign from "@tiptap/extension-text-align";
// import Superscript from "@tiptap/extension-superscript";
// import SubScript from "@tiptap/extension-subscript";

const Index = () => {
  const { getProduct }: any = useAppSelector((state) => state.product);

  const content = '<h2 style={textAlign: "center"}></h2>';

  const editor = useEditor({
    extensions: [
      StarterKit,
      // Underline,
      // Link,
      // Superscript,
      // SubScript,
      // Highlight,
      // TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content,
  });

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

      <section className="w-full h-[520px] md:h-auto mt-[20px] rounded-md border-[#E5E7EB] bg-[#FFFFFF] relative border flex md:flex-col items-center justify-center md:justify-start">
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
            <h2 className="text-[#374151] font-semibold text-base ">
              {getProduct?.name}
            </h2>

            <textarea name="" id="" cols={30} rows={10} className='w-[706px] h-[203px] border'>

            </textarea>

            <div className="w-[740px] h-[60px] flex items-center justify-end border pr-[30px]">
              <button className="w-[44px] h-[30px]">
                Clear
              </button>
              <button className="w-[72px] h-[30px] bg-[rgba(39, 46, 113, 0.5)]">
                Save
              </button>
            </div>

            {/* <RichTextEditor editor={editor}>
              <RichTextEditor.Toolbar sticky stickyOffset={20}>
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Bold />
                  <RichTextEditor.Italic />
                  <RichTextEditor.Underline />
                  <RichTextEditor.Strikethrough />
                  <RichTextEditor.ClearFormatting />
                  <RichTextEditor.Highlight />
                  <RichTextEditor.Code />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.H1 />
                  <RichTextEditor.H2 />
                  <RichTextEditor.H3 />
                  <RichTextEditor.H4 />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Blockquote />
                  <RichTextEditor.Hr />
                  <RichTextEditor.BulletList />
                  <RichTextEditor.OrderedList />
                  <RichTextEditor.Subscript />
                  <RichTextEditor.Superscript />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Link />
                  <RichTextEditor.Unlink />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.AlignLeft />
                  <RichTextEditor.AlignCenter />
                  <RichTextEditor.AlignJustify />
                  <RichTextEditor.AlignRight />
                </RichTextEditor.ControlsGroup>
              </RichTextEditor.Toolbar>

              <RichTextEditor.Content />
            </RichTextEditor> */}

            {/* <textarea name="" id="" cols={30} rows={10}></textarea> */}
            <p className="text-[#6B7280] font-normal text-sm w-full h-[144px] text-left text-ellipsis overflow-auto"></p>

          </div>

          
        </div>
        <div className="w-[382px] h-[518px] border border-[#E5E7EB] md:h-[305.19px] md:w-full md:mt-[350px]">
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
      <section className="w-full h-[108px] my-[20px] rounded-md border-[#E5E7EB] bg-[#FFFFFF] border flex items-start flex-col md:w-full">
        <div className="w-[1090px] h-[180px] m-[20px] rounded-md border-[#E5E7EB] bg-[#FFFFFF]  flex items-start flex-col md:w-full  md:m-[20]">
          <h1 className='font-semibold text-[16px] font-["Open_Sans"] text-[#374151]'>
            Offer details
          </h1>

          <p className="text-[#BF1C26] text-[16px] font-semibold my-[20px]">
            This is up to you :)
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
