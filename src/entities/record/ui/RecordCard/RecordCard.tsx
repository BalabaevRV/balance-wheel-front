import Button from '@/shared/ui/Button/Button' 
import { WheelChart } from '@/widgets/ui/WheelChart/WheelChart'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import type { IFieldValue } from '@/entities/record/model/types';


interface IWheelRecordProps {
  name: string;
  values: IFieldValue[];
}


export const RecordCard = ({ name, values }: IWheelRecordProps) => {
    const { t } = useTranslation()
    const navigate = useNavigate();


    const editRecord = () => {
    navigate('/record/${id}'); 
    }

    return (
        <li className='bg-blue-300 rounded-xl p-4'>
            <p className='text-lg font-medium mb-2'>{ name }</p>
            <div className='mb-2'>
                <WheelChart data={values} width={80} height={80} radius={40} showLabels={false} />
            </div>
            <Button onClick={editRecord}>{t('editRecord')}</Button>
        </li>
    )
}
