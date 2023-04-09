import React from 'react';

interface PrimaryButtonProps {
    title : string;
    height : string;
    width: string;
    padY: Number;
    padX: Number;
    onClick?: () => void

}
export const PrimaryButton = ({title, height,width, padX, padY, onClick}  : PrimaryButtonProps) => {
   return (
    <button onClick={onClick} className={`bg-red-900 hover:bg-red-700 text-white font-bold h-${height} w-${width} py-${padY} px-${padX} rounded-md`}>
        {title}
     </button>
   );
}

export const SecondaryButton = ({title, height,width, padX, padY,onClick}  : PrimaryButtonProps) => {
  return (
   <button onClick={onClick} className={`bg-white  text-black text-xs font-bold h-${height} w-${width} py-${padY} px-${padX} rounded-md`}>
       {title}
    </button>
  );
}

type ButtonWithIconProps = {
    title : string,
    imageSrc : string
}
export const ButtonWithIcon = ({title, imageSrc} : ButtonWithIconProps) => {
    return (
        <button className="inline-flex items-center px-4 py-2 bg-red-900 hover:bg-red-700 text-white text-sm font-medium rounded-md">
          <img src={imageSrc} />
    
        {title}
      </button>
    )
}

