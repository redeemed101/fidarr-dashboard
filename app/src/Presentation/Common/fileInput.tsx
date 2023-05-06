
type PrimaryFileInputProps = {
    label : string,
    height: string,
    width: string,
    padX: number,
    padY: number,
    value?: string 
    name? : string,
    accept?: string
    onChanged?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const PrimaryFileInput = ({label,onChanged, accept="image/*", height, width, value, name,padX,padY}: PrimaryFileInputProps) => {
    return (
        <div className={`rounded-md h-${height} w-${width} mb-10 `}>
             <label className="block text-fidarrgray-900 text-sm font-bold mb-2" htmlFor="username">
               {label}
             </label>
            
            <input value={value} name={name} accept="" onChange={onChanged} className={`bg-white rounded-md w-full h-${height} self-center py-1 pl-2`} id="hidden-input" type="file" />
        </div>
    )
}

export default PrimaryFileInput