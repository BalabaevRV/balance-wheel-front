import type { IUser } from "@/entities/user/model/types";
import { CurrentUserWheels } from "@/shared/mocks/Wheels";



export const CurrentUserProfile: IUser = {
    user_id: 1,
    name: 'Sveta',
    login: 'SvetaEng',
    email: 'sveta@gmail.com',
    wheels: CurrentUserWheels,
    records: [],
}