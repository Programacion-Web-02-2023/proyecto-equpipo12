import React from "react";
import { useState } from 'react';

const Participantes = () =>{

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
      setIsOpen(!isOpen);
    };

    return(
        <>
        <button onClick={toggleModal} className="rounded-md bg-white text-black h-8 w-28">Abrir Modal</button>
  
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 overflow-auto bg-white bg-opacity-20">

            <div className="flex flex-col justify-center items-center bg-secondmodal-color rounded-lg p-6 w-1/4 h-auto">
              
              <h1 className="p-2 font-bold text-modal-color text-lg">Participantes</h1>

              <div className="flex justify-start items-center gap-1 p-2 w-full"> 
                           <article><img src="src/images/user.png" alt="user-icon" className="object-contain h-14"/></article>
                        <a href="" className="font-semibold text-modal-color">@usuario1</a>
              </div>

             

              <div className="flex gap-2 modal-footer justify-end pt-4">
                
                <button onClick={toggleModal} className="bg-transparent border-2 w-28 h-8 text-modal-color rounded-md secondmodal-button border-modal-color">Cancelar</button>
               <button className="bg-transparent border-2 w-28 h-8 text-modal-color rounded-md secondmodal-button border-modal-color">Publicar</button>
              </div>

             
            </div>


          </div>
        )}
      </>
    );
}

export default Participantes;