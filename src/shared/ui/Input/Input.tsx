interface IInputProps {
  value: string | number;
  type: string;
  placeholder?: string;
  min?: number;
  max?: number;
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ onChange, type, value, placeholder = '', min = 0, max = 10, id }: IInputProps) => {
    return <input type={type} min={min} max={max} placeholder={placeholder} id={id} value={value} className="bg-white border-2 border-blue-500 rounded-sm p-1" onChange={onChange} />
}

export default Input