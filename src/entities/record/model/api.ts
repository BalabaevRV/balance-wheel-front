import { api } from '@/shared/api/instance';
import type { ApiResponse }  from '@/shared/api/types';
import { API_ENDPOINTS } from '@/shared/api/endpoints';
import type { IRecord, IRecordSave } from './types';

export const recordApi = {
    saveRecord: (data: IRecordSave): Promise<ApiResponse<IRecord>> => {
        return api.post(API_ENDPOINTS.RECORD_SAVE, data);
    },
    deleteRecord: (id: number): Promise<ApiResponse<null>> => {
        return api.delete(API_ENDPOINTS.RECORD_DELETE(id));
    },
    getRecordById: (id: number): Promise<ApiResponse<IRecord>> => {
        return api.get(API_ENDPOINTS.RECORD_BY_ID(id));
    }
};