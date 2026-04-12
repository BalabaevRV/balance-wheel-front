import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { WheelChart } from "@/widgets/ui/WheelChart/WheelChart"
import { RecordValueInput } from "@/entities/record/ui/RecordValueInput/RecordValueInput"
import { useMemo, useState } from "react";
import { Button } from "@/shared/ui/Button/Button";
import { WheelSelector } from "@/shared/ui/Selector/Selector";
import { currentUserWheels } from "@/shared/mocks/Wheels";
import { currentUserRecords } from "@/shared/mocks/Records";
import { Input } from "@/shared/ui/Input/Input";

export function RecordPage() {
  const { t } = useTranslation();  
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const { wheelId: initialWheelId } = location.state || {};

  const initialState = useMemo(() => {
    if (id) {
      const existingRecord = currentUserRecords.find(rec => rec.record_id === parseInt(id));
      if (existingRecord) {
        const initialValues: Record<number, number> = {};
        existingRecord.values?.forEach(field => {
          initialValues[field.field_id] = field.value;
        });
        
        return {
          wheelId: existingRecord.wheel_id,
          wheelName: existingRecord.balance_wheel_name,
          customValues: initialValues,
          date: existingRecord.date
        };
      }
    }
    
    return {
      wheelId: initialWheelId || 0,
      wheelName: '',
      customValues: {} as Record<number, number>,
      date: new Date()
    };
  }, [id, initialWheelId]);


  const [wheelId, setWheelId] = useState(initialState.wheelId);
  const [wheelName] = useState(initialState.wheelName);
  const [date, setDate] = useState(initialState.date);
  const [customValues, setCustomValues] = useState(initialState.customValues);

  const selectedWheel = useMemo(() => {
    if (wheelId <= 0) return null;
    return currentUserWheels.find(wheel => wheel.wheel_id === wheelId);
  }, [wheelId]);

  
  const numberValues = useMemo(() => {
    if (!selectedWheel) return [];
    
    return selectedWheel.fields.map(field => ({
      field_id: field.field_id,
      name: field.name,
      color_hex: field.color_hex,
      value: customValues[field.field_id] ?? 10
    }));
  }, [selectedWheel, customValues]);

  // Обработчик изменения значения поля
  const handleNumberChange = (fieldId: number, newValue: number) => {
    setCustomValues(prev => ({
      ...prev,
      [fieldId]: newValue
    }));
  };

  // Обработчик смены колеса
  const handleWheelChange = (value: number) => {
    setWheelId(value);
    setCustomValues({}); 
  };

  const saveRecord = () => {
    console.log('Saving record:', { wheelId, customValues });
    navigate('/dashboard');
  };

  const wheelOptions = currentUserWheels.map((wheel) => ({
    value: wheel.wheel_id,
    name: wheel.name
  }));

  const renderValues = () => {
    if (numberValues.length === 0) {
      return <p className="text-gray-500 italic">{t('selectWheelFirst')}</p>;
    }
    
    return numberValues.map((field) => (
      <RecordValueInput 
        key={field.field_id} 
        id={field.field_id} 
        name={field.name} 
        color={field.color_hex} 
        value={field.value} 
        onChange={(e) => handleNumberChange(field.field_id, parseInt(e.target.value))} 
      />
    ));
  };

  return (
    <>
      <h1 className="text-xl font-bold mb-6">{id ? t('editRecord') : t('newRecord')}</h1>
      <div className="flex align-center gap-6">
        <div>
          <div>
          { id ? <p className="text-m font-medium mb-2">{ wheelName }</p> :
           <WheelSelector options={wheelOptions} placeholder={t('selectWheel')} defaultValue={wheelId || ''} onChange={handleWheelChange} />  }
           <div className="mb-4">
            <Input type='date' onChange={e => setDate(new Date(e.target.value))} value={date.toISOString().split('T')[0]} />
           </div>
           </div>
          <div className="flex flex-col gap-2">
            {renderValues()}
          </div>
          <Button onClick={saveRecord}>{t('save')}</Button>
        </div>
        <WheelChart data={numberValues} />
      </div>
    </>
  );
}

export default RecordPage;