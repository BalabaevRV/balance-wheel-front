interface WheelSelectorProps {
	onChange: (value: number) => void
	options: { value: number; name: string }[]
	placeholder: string
	defaultValue?: string | number
}

export function WheelSelector({ onChange, options, placeholder, defaultValue = '' }: WheelSelectorProps) {
	const optionWheels = options.map((item) => (
		<option key={item.value} value={item.value}>
			{item.name}
		</option>
	))

	return (
		<select
			className="bg-white border-2 border-blue-500 rounded-sm p-1"
			defaultValue={defaultValue}
			onChange={(e) => onChange(parseInt(e.target.value))}
		>
			<option value="" disabled>
				{placeholder}
			</option>
			{optionWheels}
		</select>
	)
}
