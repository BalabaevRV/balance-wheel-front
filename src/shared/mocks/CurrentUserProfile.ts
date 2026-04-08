import type { IUser } from "@/entities/user/model/types";
import { currentUserWheels } from "@/shared/mocks/Wheels";
import { currentUserRecords } from "@/shared/mocks/Records";




export const CurrentUserProfile: IUser = {
    user_id: 1,
    name: 'Sveta',
    login: 'SvetaEng',
    email: 'sveta@gmail.com',
    wheels: currentUserWheels,
    records: currentUserRecords
}