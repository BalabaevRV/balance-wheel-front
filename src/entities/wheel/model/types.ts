export interface IWheel {
    wheel_id: number;
    owner_id: number;
    name: string;
    interval_seconds?: number;
    fields: IField[];
}

export type IWheelSave = Omit<IWheel, 'wheel_id' | 'owner_id'> & Partial<IWheel>

export interface IField {
    field_id: number;
    name: string;
    color_hex: string;
}