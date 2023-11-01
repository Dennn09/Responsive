import React from "react";
import { useDispatch } from "react-redux";
import {gantinamaBrand,kurangMakup,mengurangibedak,tambahMakup, tambahbedak,} from "../../redux/action/manapulasiData";
import { useState } from "react";

export const Button = () => {
  const [nambahListBedak, setnambahListBedak] = useState("");

  const dispatch = useDispatch();
  

  const plusBedak = () => {
    if (nambahListBedak) {
      dispatch(tambahbedak(nambahListBedak));
      setnambahListBedak(""); 
    }
  };
  return (
    <div className="flex space-x-10 flex-col w-[30rem] border items-center space-y-3 py-3"  >
     <div className="w-[50%]  flex justify-around">
     <button className="bg-blue-400 hover:bg-blue-500 rounded-lg px-3"
        onClick={() => {
          dispatch(kurangMakup());
        }}
      >
        Kurang
      </button>
      <button className="bg-blue-400 hover:bg-blue-500 rounded-lg px-3"
        onClick={() => {
          dispatch(tambahMakup());
        }}
      >
        Tambah
      </button>
     </div>

      <div>
      <input
        className="border-[3px]"
        placeholder="Ganti nama Brand"
        onChange={(e) => {
          dispatch(
            gantinamaBrand({
              namaBrand: e.target.value,
              Penerbit: "sedang di cari",
            })
          );
        }}
      />
      </div>

      <div className="w-[70%]  flex justify-center">
        <input
          className=" border"
          value={nambahListBedak}
          placeholder="Nambah bedak"
          onChange={(e) => {
            setnambahListBedak(e.target.value);
          }}
        />
        <button className="bg-blue-400 hover:bg-blue-500" onClick={plusBedak}>
          Tambah Bedak
        </button>
      </div>
    <div>
    <button
        className="bg-blue-400 hover:bg-blue-500 rounded-lg px-3"
        onClick={() => {
          dispatch(mengurangibedak());
        }}
      >
        hapus bedak terakhir
      </button>
    </div>
    </div>
  );
};
