import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

interface StatCardProps  {
   title : string;
   number : string;
   increase : string;
   options: string[];
   upIncrease: boolean;
   onSelect?: (event: any) => void;
   selectedItem : string;
}
const StatCard = ({title, number, increase, upIncrease, options, onSelect, selectedItem} : StatCardProps) => {
    return (
        <>
        
        <div className="max-w-sm rounded-md bg-gray-600 w-60  flex flex-col overflow-hidden shadow-lg">
            
            <div className="px-6 py-4 flex flex-row justify-between items-center">

               <p className="font-bold text-white opacity-100 ">{title}</p>
               
               <div className="ml-4 inline-block relative h-10 ">
                    <select value={selectedItem} onChange={onSelect} className="placeholder-white block appearance-none text-white text-xs font-bold w-full bg-gray-400 border border-gray-400 hover:border-gray-500 px-2 py-2 pr-2 rounded-md shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option selected>Total</option>
                        
                        {options.map(o => (<option value={o}>{o}</option>))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 -mt-2 right-0 flex items-center px-0  text-gray-700">
                        <svg className="fill-white h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
               </div>   
            </div>
            <div className="px-6 py-4 flex flex-row justify-between items-center">
                <p className="text-white text-3xl font-bold">{number}</p>
                <div className='flex flex-row  justify-between items-center'>
                 <p className='text-gray-400 mr-4'>{increase}</p>
                 <FontAwesomeIcon color={upIncrease? "green" : "red"}  icon={upIncrease ? faArrowUp : faArrowDown}></FontAwesomeIcon>
                </div>
            </div>
      </div>
      </>
    );
}

export default StatCard