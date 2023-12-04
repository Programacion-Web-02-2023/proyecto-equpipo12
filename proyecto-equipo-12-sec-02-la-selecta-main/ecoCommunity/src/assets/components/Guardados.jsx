import React from "react";

const Guardados = () => {
    return(
        <div className="h-auto min-w-full bg-maincolor ">
            
            <div id="header" className=" h-1/4 flex justify-center items-center flex-row gap-4 p-12 relative">
                <article className="absolute left-8"> 
                <img src="src/images/Logo1.png" alt="Eco-community" className="object-contain h-24 w-48" />
                </article>
                
            </div>
            
            <div id="content" className="h-3/4 flex justify-center items-center flex-row min-h-full relative">
                <section className="w-1/4 flex flex-col absolute top-0 left-0 gap-6 pt-12">
                    <button className="flex gap-0.5 pl-8 fixed bottom-8 text-xl hover:text-orange-400 hover:duration-300"><span className="material-symbols-outlined" >add_box</span>Postear</button>
                    
                </section>
                <section className="w-2/4  flex justify-center items-center flex-col absolute top-0 gap-1 pb-8" >
                 
                 <h2 className="flex justify-items-start items-start w-full font-bold text-xl">Lista De Guardados</h2>
                 <div className="flex justify-item-start gap-4 w-full pb-4">
                 <button className="user-posts border-2 rounded-xl w-28 bg-white text-maincolor font-bold">Todos</button>
                 <button className="user-posts border-2 rounded-xl w-36 font-bold">Publicaciones</button>
                 <button className="user-posts border-2 rounded-xl w-28 font-bold">Eventos</button>
                 </div>

                    <div className="w-full">
                        <hr className="w-full border-slate-500 pb-1.5 pt-1.5" />
                        <article className="flex justify-items-start items-center h-auto w-full pb-2.5 relative"><img src="src/images/feedimg.png" alt="turtles" className="object-fill w-60 list-image" /> <button className="text-3xl font-bold absolute right-10 hover:text-orange-400 hover:duration-300">...</button></article>
                     </div>
                     
                     <hr className="w-full border-slate-500 pb-1.5 pt-1.5"/>




                </section>

                <section className="w-1/4 flex justify-center items-center flex-col absolute right-0 top-28 gap-4 ">

                <div className="flex justify-center items-center">
                    <article><img src="src/images/user.png" alt="user-icon" className="object-contain h-20"/></article>
                   <div className="flex flex-col">
                        <h3 className="font-semibold text-green-400 text-xl">@Usuario</h3>
                        <h3 className="text-xl">Nombre apellido</h3>
                    </div>
                </div>
                    <button className="flex gap-1 pt-8 hover:text-orange-400 hover:duration-300"><span className="material-symbols-outlined flex">notifications</span>Notificaciones</button>
                    <button className="flex gap-1 hover:text-orange-400 hover:duration-300" ><span className="material-symbols-outlined">mail</span>Mensajes</button>
                    <button className="flex gap-1 hover:text-orange-400 hover:duration-300" ><span className="material-symbols-outlined">star</span>Favoritos</button>
                    <button className="flex gap-1 hover:text-orange-400 hover:duration-300" ><span className="material-symbols-outlined">groups</span>Grupos</button>
                    <button className="flex gap-1 hover:text-orange-400 hover:duration-300" ><span className="material-symbols-outlined">bookmark</span>Contactos</button>


                   <div className="flex flex-wrap gap-2 text-xs">
                        <a href="" className="underline">Acerca de</a>
                        <a href="" className="underline">Contacto</a>
                   </div>
                    
                </section>
            </div>
        </div>
    );
}

export default Guardados;