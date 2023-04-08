import React from 'react';
import EyeOff from "../../Assets/svgs/eye-off.svg";
import Eye from "../../Assets/svgs/Eye.svg";
import Search from "../../Assets/svgs/SearchIcon.svg"

type TextfieldProps = {
    label: string,
    placeholder: string,
    type : string,
    height : string,
    width: string,
    padX : Number,
    padY: Number,
    value: string

}
export function PrimaryTextField({value,label,placeholder, type, padY, padX,height,width} : TextfieldProps) {
   return (
    <div className="mb-4">
        <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="username">
            {label}
        </label>
      <input value={value} className={`shadow appearance-none border rounded-md h-${height} w-${width} py-${padY} px-${padX} text-black font-bold leading-tight focus:outline-none focus:shadow-outline`}  type={type} placeholder={placeholder} />
    </div>
   );
}

export function GrayedTextField({value,label,placeholder, type, padY, padX,height,width} : TextfieldProps) {
    return (
     <div className="mb-4">
       
       <input value={value} className={`bg-fidarrgray-900  shadow appearance-none border-none rounded-md h-${height} w-${width} py-${padY} px-${padX} text-fidarrgray-500 font-bold leading-tight focus:outline-none focus:shadow-outline`}  type={type} placeholder={placeholder} />
     </div>
    );
    
 }

 type TogglePasswordTextfieldProps = {
    show: boolean,
    placeholder: string,
    type : string,
    height : string,
    width: string,
    padX : Number,
    padY: Number,
    value: string

}

 export function PasswordToggleField({value,show,placeholder, type, padY, padX,height,width} : TogglePasswordTextfieldProps){
    return (
        <div className="relative w-full opacity-100">
            <div className="absolute inset-y-0 right-0 opacity-100 flex items-center px-2">
              <input className="hidden js-password-toggle" id="toggle" type="checkbox" />
              <img src={show ? EyeOff : Eye} alt="eye" className="bg-fidarrgray-900  opacity-100 hover:bg-gray-900 rounded px-2 py-1 text-sm text-gray-600 cursor-pointer" />
              
            </div>
            <input value={value} className={`bg-fidarrgray-900  opacity-100 shadow leading-tight appearance-none border-none rounded-md h-${height} w-${width} py-${padY} px-${padX} text-fidarrgray-500 font-bold leading-tight focus:outline-none focus:shadow-outline w-full`}  type={type} placeholder={placeholder} />
         </div>
    )
 }

 export const SearchTextField = () => {
    return (
        <div>
            <label className="relative block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <img className="h-5 w-5 fill-black" src={Search} />
                
            </span>
            <input
                className="w-full bg-white placeholder:font-italitc border border-slate-300 rounded-full py-2 pl-10 pr-4 focus:outline-none"
                placeholder="Search" type="text" />
        </label>
        </div>
    )
 }