import cn from 'classnames';

type InputProps = {
	type?: string;
	placeholder?: string;
	label: string;
	required?: boolean;
	value?: string;
	invalid: boolean;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = (props: InputProps) => {
	return (
		<div>
			<label htmlFor={props.label} className="block text-label font-semibold text-text-white-200 mb-2">
				{`${props.label}${props.required ? '*' : ''}`}
			</label>
			<input 
				id={props.label}
				type={props.type}
				onChange={props.onChange}
				placeholder={props.placeholder}
				className={cn('block w-full text-text-white-100 text-input outline outline-1 outline-white-100 rounded-md px-4 py-3 bg-transparent focus:ring-2 focus:ring-blue focus:outline-none focus:border-blue', {
					'ring-2 ring-red': props.invalid
				})} />
		</div>
	)
};

export default Input;