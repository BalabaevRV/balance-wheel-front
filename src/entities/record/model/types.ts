import type { IField } from "@/entities/wheel/model/types";


export interface IRecord {
    record_id: number;
    wheel_id: number;
    created_at: Date;
    updated_at: Date;
    date: Date;
    values: IFieldValue[];
}

export interface IFieldValue extends IField {
    value: number;
}

