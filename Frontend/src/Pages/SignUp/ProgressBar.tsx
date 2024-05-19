import React, { useContext } from "react";
import { PageCountContext } from "../../Context/PageContext";

export default function Progressbar() {
  const { pageCount, setPageCount } = useContext(PageCountContext);

  return (
    <>
      <div className="h-10 w-full flex justify-center items-center">
        <div
          style={
            pageCount >= 1
              ? {
                  background: "linear-gradient(#e66465, #9198e5)",
                  boxShadow:
                    "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                }
              : { background: "rgba(0,0,0,0.3)" }
          }
          onClick={() => {
            setPageCount(1);
          }}
          className="circle h-10 w-10 shadow-lg cursor-pointer text-white text-xl font-bold grid place-items-center rounded-full"
        >
          1
        </div>
        <div
          style={
            pageCount > 1
              ? {
                  background: "linear-gradient(to left ,#e66465, #9198e5)",
                }
              : { background: "rgba(0,0,0,0.3)" }
          }
          className="line h-1 w-20 mx-[3px] backdrop-brightness-50"
        ></div>
        <div
          style={
            pageCount > 1
              ? {
                  background: "linear-gradient(#e66465, #9198e5)",
                  boxShadow:
                    "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                }
              : { background: "rgba(0,0,0,0.3)" }
          }
          onClick={() => {
            setPageCount(2);
          }}
          className="circle h-10 w-10 text-white cursor-pointer text-xl font-bold grid place-items-center rounded-full"
        >
          2
        </div>
        <div
          style={
            pageCount > 2
              ? { background: "linear-gradient(to left, #e66465, #9198e5)" }
              : { background: "rgba(0,0,0,0.3)" }
          }
          className="line h-1 w-20 mx-[3px] backdrop-brightness-50"
        ></div>
        <div
          style={
            pageCount > 2
              ? {
                  background: "linear-gradient(#e66465, #9198e5)",
                  boxShadow:
                    "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                }
              : { background: "rgba(0,0,0,0.3)" }
          }
          onClick={() => {
            setPageCount(3);
          }}
          className="circle h-10 w-10 text-white cursor-pointer text-xl font-bold grid place-items-center rounded-full"
        >
          3
        </div>
      </div>
    </>
  );
}
