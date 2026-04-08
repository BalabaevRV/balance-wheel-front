import Button from '@/shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { WheelCard } from '@/entities/wheel/ui/WheelCard/WheelCard'
import { RecordCard } from '@/entities/record/ui/RecordCard/RecordCard'
import { CurrentUserProfile } from '@/shared/mocks/CurrentUserProfile'

export const DashboardPage = () => {
  const { t } = useTranslation();  

  const navigate = useNavigate();

  const userWheels = CurrentUserProfile.wheels.map((wheel) => (
    <WheelCard key={wheel.wheel_id} name={wheel.name} />
  )); 

    const userRecords = CurrentUserProfile.records.map((record) => (
    <RecordCard key={record.record_id} />
  )); 

  const createRecord = () => {
     navigate('/record'); 
  }

  return (
    <>
      <p className="text-xl font-bold mb-6">{t('welcome', { name: CurrentUserProfile.name })}</p>
      <div className='mb-4'>
        <p className="text-lg font-medium mb-2">{t('myWheels')}</p>
        <ul className='flex gap-4'>  
          {userWheels.length > 0 ? userWheels : <p>{t('myWheelsEmpty')}</p>}
        </ul>
      </div>
      <div className='mb-4'>
        <p className="text-lg font-medium mb-2">{t('recentRecords')}</p>
        <ul className='flex gap-4'> 
          {userRecords.length > 0 ? userRecords : <p>{t('myRecordsEmpty')}</p>}
        </ul>
      </div>
      <Button onClick={createRecord}>{t('createRecord')}</Button>
    </>
  );
}
