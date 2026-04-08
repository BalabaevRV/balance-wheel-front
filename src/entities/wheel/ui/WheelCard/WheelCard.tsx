import Button from '@/shared/ui/Button/Button' 
import mocks from '@/shared/mocks/mocks.jpg'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'

interface IWheelCardProps {
  name: string;
}

export const WheelCard = ({ name }: IWheelCardProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const createRecord = () => {
      navigate('/record');
    }
    return (
    <li className='bg-blue-300 rounded-xl p-4'>
        <p className='text-lg font-medium mb-2'>{ name }</p>
        <img src={mocks} alt="Колёсо баланса" width='200' className='rounded-lg mb-2' />
        <Button onClick={createRecord}>{t('createRecord')}</Button>
    </li>
  )
} 

