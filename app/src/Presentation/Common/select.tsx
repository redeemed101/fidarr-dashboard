export type PrimarySelectOption = {
    label : string,
    value : string,
}
type PrimarySelectProps = {
    label : string,
    options : PrimarySelectOption[],
    value? : string,
    width : string,
    padX : number,
    onChanged?: (target: any) => void

}

const PrimarySelect = ({label, options, value, width, padX, onChanged} : PrimarySelectProps) => {
    return (
        <div className={`w-${width}  px-${padX} mb-6 md:mb-0` }>
            <label className=" tracking-wide text-fidarrgray-500 text-xs font-bold mb-2" htmlFor="grid-state">
                {label}
            </label>
        <div className="relative">
            <select value={value} onChange={onChanged} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
             <option className="text-fidarrgray-900">Select</option>
            { options.map( o => <option value={o.value}>{o.label}</option> ) }
            
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
    </div>
    )
}

export default PrimarySelect