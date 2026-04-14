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

export interface ILoginData {
    name: string
}

export interface IRegisterData {
    name: string
}