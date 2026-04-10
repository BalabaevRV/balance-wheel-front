interface IInputProps {
  value: string | number;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ onChange, type, value }: IInputProps) => {
    return <input type={type}  value={value} className="bg-white border-2 border-blue-500 rounded-sm p-1" onChange={onChange} />
}

export default Input