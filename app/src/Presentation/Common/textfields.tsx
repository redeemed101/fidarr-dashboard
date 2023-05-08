import React, { useState } from 'react';
import EyeOff from "../../Assets/svgs/eye-off.svg";
import Eye from "../../Assets/svgs/Eye.svg";
import Search from "../../Assets/svgs/SearchIcon.svg"

type TextfieldProps = {
    label?: string,
    placeholder?: string,
    marginBottom?: string,
    name?: string,
    type? : string,
    height? : string,
    width?: string,
    padX? : Number,
    padY?: Number,
    value: string,
    onChanged?: (target: any) => void

}
export function PrimaryTextField({value,label,onChanged,placeholder, name,type, padY, padX,height,width, marginBottom = "4"} : TextfieldProps) {
  
    return (
    <div className={`mb-${marginBottom}`}>
        {label != null ? <label className="block text-fidarrgray-900 text-sm font-bold mb-1" htmlFor="username">
            {label}        
           </label> : ""
        }
      <input value={value} name={name} onChange={onChanged} className={`shadow appearance-none border rounded h-${height} w-${width} py-${padY} px-${padX} text-black font-bold leading-tight focus:outline-none focus:shadow-outline`}  type={type} placeholder={placeholder} />
    </div>
   );
}

export function GrayedTextField({value,name,onChanged,placeholder, type, padY, padX,height,width} : TextfieldProps) {
    
    return (
     <div className="mb-4">       
       <input value={value} name={name} onChange={onChanged} className={`bg-fidarrgray-900 focus:text-white shadow appearance-none border-none rounded h-${height} w-${width} py-${padY} px-${padX} text-fidarrgray-500 font-bold leading-tight focus:outline-none focus:shadow-outline`}  type={type} placeholder={placeholder} />
     </div>
    );
    
 }

 type TogglePasswordTextfieldProps = {
    show: boolean,
    placeholder: string,
    name?: string,
    type : string,
    height : string,
    width: string,
    padX : Number,
    padY: Number,
    value: string,
    onChanged?: (target: any) => void,
    toggleShow?: () => void

}

 export function PasswordToggleField({value,show, toggleShow, name,placeholder,onChanged, type, padY, padX,height,width} : TogglePasswordTextfieldProps){
    return (
        <div className="relative w-full opacity-100">
            <div className="absolute inset-y-0 right-0 opacity-100 flex items-center px-2">
              <input className="hidden" type="checkbox" />
              <img src={show ? EyeOff : Eye} onClick={toggleShow} alt="eye" className="bg-fidarrgray-900  opacity-100 hover:bg-gray-900 rounded px-2 py-1 text-sm text-gray-600 cursor-pointer" />
              
            </div>
            <input value={value} type={show ? "text": "password"} name={name} onChange={onChanged} className={`bg-fidarrgray-900  opacity-100 shadow leading-tight appearance-none border-none rounded h-${height} w-${width} py-${padY} px-${padX} text-fidarrgray-500 font-bold leading-tight focus:outline-none focus:text-white focus:shadow-outline w-full`}   placeholder={placeholder} />
         </div>
    )
 }

 export const SearchTextField = ({placeholder = "Search", value,name,onChanged} : TextfieldProps) => {
    return (
        <div className='w-full'>
            <label className="relative block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <img className="h-5 w-5 fill-black" src={Search} />
                
            </span>
            <input
                value={value}
                name={name}
                onChange={onChanged}
                className="w-full bg-white placeholder:font-italitc border border-slate-300 rounded-full py-2 pl-10 pr-4 focus:outline-none"
                placeholder={placeholder} type="text" />
            </label>
        </div>
    )
 }