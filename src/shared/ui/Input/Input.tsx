interface IInputProps {
  value: string | number;
  type: string;
  min?: number;
  max?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ onChange, type, value, min = 0, max = 10 }: IInputProps) => {
    return <input type={type} min={min} max={max}  value={value} className="bg-white border-2 border-blue-500 rounded-sm p-1" onChange={onChange} />
}

export default Input