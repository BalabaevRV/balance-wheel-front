import Button from '@/shared/ui/Button/Button' 
import mocks from '@/shared/mocks/mocks.jpg'
import { useTranslation } from 'react-i18next';

export const WheelCard = () => {
    const { t } = useTranslation();

    return (
    <li className='bg-blue-300 rounded-xl p-4'>
        <img src={mocks} alt="Колёсо баланса" width='200' className='rounded-lg mb-2' />
        <Button>{t('createRecord')}</Button>
    </li>
  )
} 

