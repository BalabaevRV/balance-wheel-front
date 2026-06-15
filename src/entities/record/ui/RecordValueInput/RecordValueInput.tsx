import { Input } from '@/shared/ui/Input/Input'

interface IRecordValueInputProps {
	id: number
	name: string
	color: string
	value: number
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const RecordValueInput = ({ id, name, color, value, onChange }: IRecordValueInputProps) => {
	return (
		<div className="flex items-center gap-1">
			<label htmlFor={id.toString()}>{name}</label>
			<span className="w-5 h-5 rounded-full" style={{ backgroundColor: color }} />
			<Input type="number" id={`record-value-${id}`} value={value} onChange={onChange} />
		</div>
	)
}
