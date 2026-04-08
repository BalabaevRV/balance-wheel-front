import type { IWheel } from "@/entities/wheel/model/types"
import type { IRecord } from "@/entities/record/model/types"

export interface IUser {
    user_id: number;
    name: string;
    login: string;
    email: string;
    wheels: IWheel[];
    records: IRecord[];
}