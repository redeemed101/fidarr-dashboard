
type TextAreaProps = {
    label: string,
    name: string,
    placeholder: string,
    height : string,
    width: string,
    padX : Number,
    padY: Number,
    value: string,
    onChanged?: () => void

}

const TextArea = ({value,label,placeholder,onChanged, name,  padY, padX,height,width} : TextAreaProps) => {
    return (
       
        <div className="mb-4">
        <label className="block text-fidarrgray-900 text-sm font-bold mb-2" htmlFor="username">
            {label}
        </label>
        <textarea name={name} value={value} onChange={onChanged} className={`resize rounded-md border-none leading-tight focus:outline-none focus:shadow-outline  h-${height} w-${width} py-${padY} px-${padX} `}></textarea>
    </div>
    )
}

export default TextArea