import Button from '@/shared/ui/Button/Button' 
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export const RecordCard = () => {
    const { t } = useTranslation()
    const navigate = useNavigate();


    const editRecord = () => {
    navigate('/record/${id}'); 
    }

    return (
        <li className='bg-blue-300 rounded-xl p-4'>
            <Button onClick={editRecord}>{t('editRecord')}</Button>
        </li>
    )
}
