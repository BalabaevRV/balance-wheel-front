import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { record1 } from "@/shared/mocks/Records"
import { WheelChart } from "@/widgets/ui/WheelChart/WheelChart"
import { RecordValueInput } from "@/entities/record/ui/RecordValueInput/RecordValueInput"
import { useState } from "react";
import { Button } from "@/shared/ui/Button/Button";

function RecordPage() {
  const { t } = useTranslation();  
  const navigate = useNavigate();
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
  
  const saveRecord = () => {
    navigate('/dashboard');
  }

  return (
    <>
      <h1 className="text-xl font-bold mb-6">{id ? t('editRecord') : t('newRecord')}</h1>
      <div className="flex align-center gap-6">
        <div>
          <p className="text-m font-medium mb-2">{ wheelName }</p>
          <div className="flex flex-col gap-2">
            {values}
          </div>
          <Button onClick={saveRecord}>{t('save')}</Button>
        </div>
        <WheelChart data={numberValues} />
      </div>
    </>
  );
}

export default RecordPage;