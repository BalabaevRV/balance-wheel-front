import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { record1 } from "@/shared/mocks/Records"
import { WheelChart } from "@/widgets/ui/WheelChart/WheelChart"

function RecordPage() {
const { t } = useTranslation();  
const { id } = useParams();

const wheelName = record1.balance_wheel_name
const values = record1.values.map((values) => (
    <div key={values.field_id}>
      <label htmlFor={values.field_id.toString()}>{values.name}</label>
      <input type="color" value={values.color_hex} />
      <input type="number" id={values.field_id.toString()} className="bg-blue-100 rounded-sm p-1" value={values.value} />
    </div>
))
 
  return (
    <>
      <h1>{id ? t('editRecord') : t('newRecord')}</h1>
      <div>
        <div>
          <label htmlFor="balanceWheel">Balance wheel</label>
          <input type="text" id="balanceWheel" className="bg-blue-100 rounded-sm p-1" value={wheelName} />
        </div>
        <div>
          {values}
        </div>
      </div>
      <WheelChart data={record1.values} />
    </>
  );
}

export default RecordPage;