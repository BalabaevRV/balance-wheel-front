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
    <WheelCard key={wheel.wheel_id} name={wheel.name} fields={wheel.fields} />
  )); 

    const userRecords = CurrentUserProfile.records.map((record) => (
    <RecordCard key={record.record_id} name={record.balance_wheel_name} values={record.values} />
  )); 

  const createRecord = () => {
     navigate('/record'); 
  }

    const createWheel = () => {
     navigate('/wheel'); 
  }

  return (
    <>
      <p className="text-xl font-bold mb-8">{t('welcome', { name: CurrentUserProfile.name })}</p>
      <div className='mb-12'>
        <p className="text-lg font-medium mb-2">{t('myWheels')}</p>
        <ul className='flex gap-4 mb-6'>  
          {userWheels.length > 0 ? userWheels : <p>{t('myWheelsEmpty')}</p>}
        </ul>
        <Button onClick={createWheel}>{t('createWheel')}</Button>
      </div>
      <div className='mb-6'>
        <p className="text-lg font-medium mb-">{t('recentRecords')}</p>
        <ul className='flex gap-4'> 
          {userRecords.length > 0 ? userRecords : <p>{t('myRecordsEmpty')}</p>}
        </ul>
      </div>
      <Button onClick={createRecord}>{t('createRecord')}</Button>
    </>
  );
}
