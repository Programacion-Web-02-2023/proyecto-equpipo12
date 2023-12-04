import React from "react";
import { useState } from 'react';

const Donar = ({close}) =>{

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
      setIsOpen(!isOpen);
    };
    

    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 overflow-auto bg-white bg-opacity-20">
        <div className="flex flex-col justify-center items-center bg-secondmodal-color rounded-lg p-6 w-1/4 h-auto">
          <h1 className="p-2 font-bold text-modal-color text-lg">¿Cuánto deseas donar?</h1>
          <div className="flex">
            <button className="p-2 font-bold text-modal-color text-xl hover:text-green-700"> - </button>
            <h2 className="p-2 font-bold text-modal-color text-lg">$00.00</h2>
            <button className="p-2 font-bold text-modal-color text-xl hover:text-green-700"> + </button>
          </div>
          <div className="flex gap-2 modal-footer justify-end">
            <button onClick={close} className="bg-transparent border-2 w-28 h-10 text-modal-color rounded-md secondmodal-button border-modal-color">Cancelar</button>
            <button className="bg-transparent border-2 w-28 h-10 text-modal-color rounded-md secondmodal-button border-modal-color">Donar</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Donar;