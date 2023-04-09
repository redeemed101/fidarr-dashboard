type PrimaryDatePickerProps = {
    label : string,
    value : string,
    height: string,
    width: string,
    padX: number,
    padY: number,
    
}

const PrimaryDatePicker = ({label, value, height, width, padX,padY}: PrimaryDatePickerProps) => {
    return (
      
         <div className="mb-4">
         <label className="block text-fidarrgray-900 text-sm font-bold mb-2" htmlFor="username">
             {label}
         </label>
         <input type="date" value={value} className={`shadow appearance-none border rounded-md h-${height} w-${width} py-${padY} px-${padX} text-black font-bold leading-tight focus:outline-none focus:shadow-outline`} />
     </div>
    )
}

export default PrimaryDatePicker