import React from "react";
import { useSelector } from "react-redux";
import { Button } from "./Button";

export const ReduxPage = () => {
  const Data = useSelector((state) => state.makup);

  console.log(Data);
  return (
    <div className="flex flex-col w-[100vw] items-center justify-center">
    <div className="flex flex-col space-y-1">
    <h1> jumlahmakeup :{Data.jumlahmakeup}</h1>
      <h1> namaBrand :{Data.namaBrand}</h1>
      <h1> namaBrand :{Data.Penerbit}</h1>
      <h1> List Bedak:</h1>
      <ul>
        {Data.listBedak.length === 0 ? (
          <li> List bedak nya kosonggg</li>
        ) : (
          Data.listBedak.map((bedak) => <li>{bedak}</li>)
        )}
      </ul>
    </div>
      <Button />
    </div>
  );
};
