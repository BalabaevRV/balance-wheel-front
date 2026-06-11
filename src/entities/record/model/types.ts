import type { IField } from "@/entities/wheel/model/types";


export interface IRecord {
    record_id: number;
    wheel_id: number;
    balance_wheel_name: string;
    created_at: Date;
    updated_at: Date;
    date: Date;
    values: IFieldValue[];
}

export interface IFieldValue extends IField {
    value: number;
}

export type IRecordSave = Omit<IRecord, 'record_id' | 'created_at' | 'updated_at' | 'balance_wheel_name' |  'date'> & Partial<IRecord>;
