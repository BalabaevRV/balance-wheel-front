import Button from '@/shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { WheelCard } from '@/entities/wheel/ui/WheelCard/WheelCard'
import { RecordCard } from '@/entities/record/ui/RecordCard/RecordCard'
import type { RootState } from '@/app/store'
import { useSelector } from 'react-redux'

export const DashboardPage = () => {
  const { t } = useTranslation();  

  const navigate = useNavigate();

   const { id, name, wheels, records } = useSelector((state: RootState) => state.user);

  const userWheels = wheels.map((wheel) => (
    <WheelCard key={wheel.wheel_id} name={wheel.name} fields={wheel.fields} wheelId={wheel.wheel_id} showEditButton={wheel.owner_id === id} />
  )); 

    const userRecords = records.map((record) => (
    <RecordCard key={record.record_id} name={record.balance_wheel_name} id={record.record_id} values={record.values} date={record.date} />
  )); 

  const createRecord = () => {
     navigate('/record'); 
  }

    const createWheel = () => {
     navigate('/wheel'); 
  }

  return (
    <>
      <p className="text-xl font-bold mb-8">{t('welcome', { name: name })}</p>
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
