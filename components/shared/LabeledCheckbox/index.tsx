type CheckboxProps = {
    label?: string;
    value?: boolean;
    required?: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Checkbox = ({
    label,
    value,
    required = false,
    onChange
}: CheckboxProps) => {
    return (
        <div className="flex items-center relative">
            {value && <div className="absolute top-2 left-[3px]">
                <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.66113 5.12365L5.39018 8.8527L12.2268 2.01611" stroke="#12121D" strokeWidth="2.48603" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>}
            <input 
                id={label}
                name={label}
                type="checkbox"
                checked={value}
                className="mr-2 shadow-checkbox appearance-none h-5 w-5 rounded-md bg-white-300 checked:bg-blue-500"
                onChange={onChange}/>
            <label 
                htmlFor={label}
                className="text-checkbox text-text-white-200">
                {`${label}${required ? '*' : ''}`}
            </label>
        </div>
    );
};

export default Checkbox;
