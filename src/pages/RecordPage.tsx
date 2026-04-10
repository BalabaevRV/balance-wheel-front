import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { record1 } from "@/shared/mocks/Records"
import { WheelChart } from "@/widgets/ui/WheelChart/WheelChart"
import { RecordValueInput } from "@/entities/record/ui/RecordValueInput/RecordValueInput"
import { useState } from "react";

function RecordPage() {
const { t } = useTranslation();  
const { id } = useParams();
const [numberValues, setNumberValues] = useState(record1.values);

  const handleNumberChange = (fieldId: number, newValue: number) => {
    setNumberValues(prev => 
      prev.map(field => 
        field.field_id === fieldId 
          ? { ...field, value: newValue }
          : field
      )
    );
  };


 const values = numberValues.map((values) => (
    <RecordValueInput key={values.field_id} id={values.field_id} name={values.name} color={values.color_hex} value={values.value} onChange={(e) => handleNumberChange(values.field_id, parseInt(e.target.value))} />
))


const wheelName = record1.balance_wheel_name
 
  return (
    <>
      <h1 className="text-xl font-bold mb-6">{id ? t('editRecord') : t('newRecord')}</h1>
      <div>
        <div>
          <label htmlFor="balanceWheel">Balance wheel</label>
          <input type="text" id="balanceWheel" readOnly className="bg-blue-100 rounded-sm p-1" value={wheelName} />
        </div>
        <div>
          {values}
        </div>
      </div>
      <WheelChart data={numberValues} />
    </>
  );
}

export default RecordPage;