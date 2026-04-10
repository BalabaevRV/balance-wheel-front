interface IRecordValueInputProps {
    id: number;
    name: string;
    color: string;
    value: number;
    onChange: () => void;

}

export const RecordValueInput = ({ id, name,  color, value, onChange }: IRecordValueInputProps ) => {
    return (
        <div key={id}> 
            <label htmlFor={id.toString()}>{name}</label>
            <span style={{ backgroundColor: color }} />
            <input type="number"  value={value} className="bg-blue-100 rounded-sm p-1" onChange={onChange} />
        </div>
    )
}
