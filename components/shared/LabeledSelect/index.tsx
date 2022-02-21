import cn from 'classnames';

type SelectProps = {
	label: string;
	required?: boolean;
	value?: string;
	values: string[];
	onChange: React.ChangeEventHandler<HTMLSelectElement>;
	invalid: boolean;
}

const LabeledSelect = ({ 
	label,
	required = false,
	value,
	values,
	onChange,
	invalid
 }: SelectProps) => {
	return (
		<div>
			<label htmlFor={label} className="block text-sm font-semibold text-label text-text-white-200 mb-2">
				{`${label}${required ? '*' : ''}`}
			</label>
			<div className="relative">
				<select 
					id={label}
					name={label}
					value={value}
					onChange={onChange}
					className={cn('appearance-none block w-full text-text-white-100 text-input outline outline-1 outline-white-100 rounded-md px-4 py-3 pl-4 bg-black-100 focus:ring-2 focus:ring-blue focus:outline-none focus:border-blue transition ease-in-out after:', {
						'ring-2 ring-red': invalid
					})}>
					{values.map((value) => {
						return <option key={value} value={value}>{value}</option>;
					})}
				</select>
				<div className="absolute top-6 right-6">
					<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0.509277 0.789551L6.00742 6.28769L11.5056 0.789551H0.509277Z" fill="white"/>
					</svg>
				</div>
			</div>
		</div>
	);
}

export default LabeledSelect;
