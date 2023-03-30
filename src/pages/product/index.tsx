import React, { useEffect, useRef, ReactElement } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { Wrapper, Status } from "../../component/map/map";
import { Link } from "react-router-dom";

const render = (status: Status): ReactElement => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return <></>;
};

function MyMapComponent({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}) {
  const ref: any = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div ref={ref} id="map" />;
}

const Index = () => {
  const { getProduct }: any = useAppSelector((state) => state.product);
  const center = {
    lat: parseFloat(getProduct?.company?.address?.latitude),
    lng: parseFloat(getProduct?.company?.address?.longitude),
  };
  // const center = { lat: -34.397, lng: 150.644 };
  const zoom = 10;


  return (
    <div className="w-[1130px] h-[1364px] md:w-full">
      <header className="w-full h-[30px] mt-[20px] md:w-[full] md:h-[70px] md:mt[19.7px] flex items-center justify-between md:flex-col md:items-start">
        <div className="w-[1065px] h-[24px] flex items-center md:w-full md:h-[20px]">
          <img src="/inno_home.svg" alt="" className="w-[16px] h-[16px]" />
          <div className="w-[66px] h-[20px] flex items-center justify-between ml-[10px]  md:w-[66px]">
            <img src="/Chevron right.svg" alt="" />
            <p className="text-[#6B7280] text-sm text-normal">Offers</p>
          </div>

          <div className=" h-[24px] flex items-center justify-between ml-[10px] gap-[10px] md:w-[285px] ">
            <img src="/Chevron right.svg" alt="" />
            <p className="text-[#6B7280] text-sm text-normal" id="myText">
              {getProduct?.name}
            </p>
          </div>
        </div>

        <Link to="edit">
        <button className="w-[45px] h-[30px] bg-[#272E71] rounded-md border border-[#272E71] text-[#ffffff] text-sm cursor-pointer">
          Edit
        </button>
        </Link>
      </header>

      <section className="w-full h-[520px] md:h-[1121.19px] mt-[20px] rounded-md border-[#E5E7EB] bg-[#FFFFFF] relative border flex md:flex-col items-center justify-center md:justify-start">
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

          <div className="w-[706px] h-[178px] m-[20px] flex flex-col gap-[10px] items-start md:w-full md:h-336px md:m-[0px]">
            <h2 className="text-[#374151] font-semibold text-base ">
              {getProduct?.name}
            </h2>
            <p className="text-[#6B7280] font-normal text-sm w-full h-[144px] text-left text-ellipsis overflow-auto">
              {getProduct?.description.replace(/<[^>]*>/g, "")}
            </p>
          </div>
        </div>
        <div className="w-[382px] h-[518px] border border-[#E5E7EB] md:h-[505.19px] md:w-full md:mt-[350px]">
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
          <div className="w-[342px] h-[200px] mx-[21px]  md:mx-[0px]">
            <img src="/map.svg" alt="" />
            <Wrapper
              apiKey="AIzaSyB9Nlw59xbL7MbottHTj0R7yS4v6Ut3aa0"
              render={render}
            >
              <MyMapComponent center={center} zoom={zoom} />
            </Wrapper>
          </div>
        </div>
      </section>

      <section className="w-full h-[434px] mt-[20px] rounded-md border-[#E5E7EB] bg-[#FFFFFF] border flex items-start flex-col md:h-[304px]">
        <h1 className='font-semibold text-[16px] font-["Open_Sans"] text-[#374151] m-[20px]'>
          Video
        </h1>

        <div className="w-[715px] h-[400px] mx-[207.5px] border md:mx-[0px] md:w-full">
          <iframe
            width="100%"
            height="100%"
            src={getProduct?.video}
            frameBorder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            // title="Embedded youtube"
          ></iframe>
        </div>
      </section>
      <section className="w-full h-[230px] my-[20px] rounded-md border-[#E5E7EB] bg-[#FFFFFF] border flex items-start flex-col md:w-full md:h-[402px]">
        <div className="w-[1090px] h-[180px] m-[20px] rounded-md border-[#E5E7EB] bg-[#FFFFFF]  flex items-start flex-col md:w-full md:h-[402px] md:m-[0]">
          <h1 className='font-semibold text-[16px] font-["Open_Sans"] text-[#374151]'>
            Offer details
          </h1>
          <div className="w-full h-[136px]  mt-[20px] md:h-[402px]">
            <div className="w-full h-[58px] flex md:flex-col md:h-[150px]">
              <div className="w-[525px] h-[58px] flex gap-[6px] items-start md:w-full">
                <img
                  src="/icon-tech.svg"
                  alt=""
                  className="w-[26px] h-[24px]"
                />
                <div className="flex flex-col gap-[5px] items-start">
                  <h1 className='font-normal text-[16px] font-["Open_Sans"] text-[#6B7280]'>
                    Technology
                  </h1>
                  <div className="flex w-[235px] h-24px gap-[10px]">
                    {getProduct?.categories?.map((item: any) => (
                      <div
                        className="w-[200px] h-[24px] flex items-center justify-center rounded-[20px] bg-[#E5E7EB]  "
                        key={item?.id}
                      >
                        <p className='font-normal text-[14px] font-["Open_Sans"] text-[#6B7280]'>
                          {item?.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-[525px] h-[58px] flex gap-[6px] items-start md:mt-[20px] md:h-[300px] md:w-full">
                <img
                  src="/icon-horse.svg"
                  alt=""
                  className="w-[26px] h-[24px]"
                />
                <div className="flex flex-col  items-start">
                  <h1 className='font-normal text-[16px] font-["Open_Sans"] text-[#6B7280]'>
                    Business Model
                  </h1>
                  <div className="flex w-[500px] h-24px md:flex-wrap md:w-full">
                    {getProduct?.businessModels?.map((item: any) => (
                      <div
                        className="w-[300px] h-[24px] flex items-center justify-center rounded-[20px] bg-[#E5E7EB] md:w-[260px] "
                        key={item?.id}
                      >
                        <p className='font-normal text-[14px] font-["Open_Sans"] text-[#374151]'>
                          {item?.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[58px] flex md:flex-col  md:mt-[60px] md:w-full">
              <div className="w-[525px] h-[58px] flex gap-[6px] items-start md:w-full">
                <img src="/icon-trl.svg" alt="" className="w-[26px] h-[24px]" />
                <div className="flex flex-col  items-start">
                  <h1 className='font-normal text-[16px] font-["Open_Sans"] text-[#6B7280]'>
                    TRL
                  </h1>
                  <div className="flex w-[510px] h-24px md:w-[300px] ">
                    <div className="w-full h-[24px] flex items-center justify-center rounded-[20px] bg-[#E5E7EB]  md:h-[60px]">
                      <p className='font-normal text-[14px] font-["Open_Sans"] text-[#374151]'>
                        {getProduct?.trl?.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[525px] h-[58px] flex gap-[6px] items-start md:mt-[30px] md:w-full">
                <img
                  src="/icon-money.svg"
                  alt=""
                  className="w-[26px] h-[24px]"
                />
                <div className="flex flex-col  items-start ">
                  <h1 className='font-normal text-[16px] font-["Open_Sans"] text-[#6B7280]'>
                    Costs
                  </h1>
                  <div className="flex w-[235px] h-24px ">
                    <div className="w-[100px] h-[24px] flex items-center justify-center rounded-[20px] bg-[#E5E7EB]">
                      <p className='font-normal text-[14px] font-["Open_Sans"] text-[#374151]'>
                        {getProduct?.investmentEffort}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
