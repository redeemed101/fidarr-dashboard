
type TextAreaProps = {
    label: string,
    placeholder: string,
    height : string,
    width: string,
    padX : Number,
    padY: Number,
    value: string

}

const TextArea = ({value,label,placeholder,  padY, padX,height,width} : TextAreaProps) => {
    return (
       
        <div className="mb-4">
        <label className="block text-fidarrgray-900 text-sm font-bold mb-2" htmlFor="username">
            {label}
        </label>
        <textarea value={value} className={`resize rounded-md border-none leading-tight focus:outline-none focus:shadow-outline  h-${height} w-${width} py-${padY} px-${padX} `}></textarea>
    </div>
    )
}

export default TextArea