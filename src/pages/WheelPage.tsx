import type { RootState } from "@/app/store";
import type { IFieldValue } from "@/entities/record/model/types";
import Button from "@/shared/ui/Button/Button"
import { Input } from "@/shared/ui/Input/Input"
import { WheelChart } from "@/widgets/ui/WheelChart/WheelChart";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function WheelEditorPage() {
  const { id } = useParams();
  const { t } = useTranslation()
  const navigate = useNavigate()  
  const { wheels } = useSelector((state: RootState) => state.user);
  const saveWheel = () => {
  navigate('/dashboard');
}

  const saveRecord = () => {
  navigate('/dashboard');
}

  const initialState = useMemo(() => {
    if (id) {
      const currentWheel = wheels.find(wheel => wheel.wheel_id === parseInt(id));
      if (currentWheel) {
        return {
          wheelId: currentWheel.wheel_id,
          wheelName: currentWheel.name,
          fields: currentWheel.fields.map(field => ({ ...field, value: 10 }))
        };
      }
    }
    return {
      wheelId: 0,
      wheelName: '',
      fields: []
    };
  }, [id, wheels]);
    

  const [fields, setFields] = useState<IFieldValue[]>(initialState.fields);
  const [wheelName, setWheelName] = useState<string>(initialState.wheelName);

  const fieldsInputs = fields.map((field) => (
    <div className="flex align-center gap-2 mb-1" key={field.field_id} >
      <Input type='text' value={field.name} onChange={(e) => {
        const newFields = [...fields];
        newFields[fields.indexOf(field)].name = e.target.value;
        setFields(newFields);
      }} />
      <Input type='color' value={field.color_hex} onChange={(e) => {
        const newFields = [...fields];
        newFields[fields.indexOf(field)].color_hex = e.target.value;
        setFields(newFields);
      }} />
      <Input type='number' value={field.value} onChange={(e) => {
        const newFields = [...fields];
        newFields[fields.indexOf(field)].value = Number(e.target.value);
        setFields(newFields);
      }} />
      <Button onClick={() => removeChild(field.field_id)}>{t('removeField')}</Button>
    </div>
  )); 

  const removeChild = (fieldId: number) => {
    setFields(prev => prev.filter(field => field.field_id !== fieldId));
  }

  const randomColor = () => '#' + Math.floor(Math.random()*16777215).toString(16)

  const addField = () =>{
    setFields(prev => [...prev, { field_id: Date.now(), name: '', color_hex: randomColor(), value: 10 }])
  }


  return (
    <>
      <h1 className="text-xl font-bold mb-6">{id ? t('editWheel') : t('newWheel')}</h1>
      <div className="flex align-center gap-6">
        <div>
          <div className="mb-4">
            <div className="mb-2 flex align-center gap-2">
              <label htmlFor="wheelName">{t('wheelName')}</label>
              <Input type="text" value={wheelName}  onChange={(e) => setWheelName(e.target.value)} />
            </div>
            { fieldsInputs }
            <Button onClick={addField}>{t('AddField')}</Button>
          </div>
          <div className="flex gap-2">
            <Button onClick={saveWheel}>{t('saveWheel')}</Button>
            <Button onClick={saveRecord}>{t('saveRecord')}</Button>
          </div>
        </div>
        <WheelChart data={fields} />
      </div>
    </>
  );
}

export default WheelEditorPage;