import Button from '@/shared/ui/Button/Button' 
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'
import { WheelChart } from '@/widgets/ui/WheelChart/WheelChart';
import type { IField } from '../../model/types';
import type { IFieldValue } from '@/entities/record/model/types';

interface IWheelCardProps {
  name: string;
  fields: IField[];
  wheelId: number;
  showEditButton: boolean;
}

export const WheelCard = ({ name, fields, wheelId,showEditButton }: IWheelCardProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate()

    const createRecord = () => {
      navigate('/record', { state: { wheelId: wheelId } });
    }

    const editWheel = () => {
      navigate(`/wheel/${wheelId}`);
    }

    const fieldsWithValues: IFieldValue[] = fields.map((field) => ({
      ...field,
      value: 10, 
    }));

    return (
    <li className='bg-blue-300 rounded-xl p-4'>
        <p className='text-lg font-medium mb-2'>{ name }</p>
        <div className='mb-2'>
          <WheelChart data={fieldsWithValues} width={80} height={80} radius={40} showLabels={false} />
        </div>
        <div className='flex gap-2'>
          <Button onClick={createRecord}>{t('createRecord')}</Button>
          {showEditButton && (
            <Button onClick={editWheel}>{t('editWheel')}</Button>
          )}
        </div>
    </li>
  )
} 

