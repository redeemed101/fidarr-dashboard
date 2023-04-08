import React from 'react';

interface PrimaryButtonProps {
    title : string;
    height : string;
    width: string;
    padY: Number;
    padX: Number;

}
export const PrimaryButton = ({title, height,width, padX, padY}  : PrimaryButtonProps) => {
   return (
    <button className={`bg-red-700 hover:bg-red-600 text-white font-bold h-${height} w-${width} py-${padY} px-${padX} rounded-md`}>
        {title}
     </button>
   );
}

