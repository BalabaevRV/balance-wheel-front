import Button from '@/shared/ui/Button/Button' 
import { useTranslation } from 'react-i18next'

export const RecordCard = () => {
    const { t } = useTranslation();
    return (
        <li className='bg-blue-300 rounded-xl p-4'>
            <Button>{t('editRecord')}</Button>
        </li>
    )
}
