import React from 'react';

interface PrimaryButtonProps {
    title : string;
    type?:"button" | "submit" | "reset" | undefined;
    height : string;
    width: string;
    padY: Number;
    padX: Number;
    disabled? : boolean;
    onClick?: () => void

}
export const PrimaryButton = ({title, disabled=false ,type = "button", height,width, padX, padY, onClick}  : PrimaryButtonProps) => {
   return (
    <button type={type} onClick={onClick}  disabled={disabled} className={`bg-red-900 hover:bg-red-700 text-white disabled:bg-fidarrgray-900 font-bold h-${height} w-${width} py-${padY} px-${padX} rounded-md`}>
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
    imageSrc : string,
    onClicked?: () => void
}
export const ButtonWithIcon = ({title,onClicked, imageSrc} : ButtonWithIconProps) => {
    return (
        <button onClick={onClicked} className="inline-flex items-center px-4 py-2 bg-red-900 hover:bg-red-700 text-white text-sm font-medium rounded-md">
          <img src={imageSrc} />
    
        {title}
      </button>
    )
}

