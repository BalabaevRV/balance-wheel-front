import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { userApi } from '@/entities/user/model/api';
import type { IRecord } from "@/entities/record/model/types";
import { Button } from "@/shared/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { RecordCard } from "@/entities/record/ui/RecordCard/RecordCard";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";

export const RecordsListPage = () => {
  const { t } = useTranslation() 
  const navigate = useNavigate()
  const [records, setRecords] = useState<IRecord[]>([])
  const { id } = useSelector((state: RootState) => state.user)


  useEffect(() => {
    if (!id) return
      userApi.getRecordsList(id)
        .then(response => {
          if (response.success) {
            setRecords(response.data);
          }
        })
        .catch(error => {
          console.error('Error fetching records:', error);
        })
      }, []);

  const createRecord = () => {
     navigate('/record'); 
  }    

  const recordsList = records.map((record) => (
      <RecordCard key={record.record_id} name={record.balance_wheel_name} id={record.record_id} values={record.values} date={record.date} />
    )); 

  return (
    <>
      <div className="mb-6">
        <h1 className="text-xl font-bold mb-2">{t('records')}</h1>  
        <Button onClick={createRecord}>{t('createRecord')}</Button>
      </div>
      <ul className='flex flex-wrap gap-4 mb-6'>  
          {recordsList.length > 0 ? recordsList : 
            <div>
              <p>{t('myRecordsEmpty')}</p>
            </div>
          }
      </ul> 
    </>
  );
}


