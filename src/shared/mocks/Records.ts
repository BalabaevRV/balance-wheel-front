import type { IRecord } from "@/entities/record/model/types"

const Record1: IRecord = {
    record_id: 1,
    wheel_id: 1,
    created_at: new Date('2026-03-17'),
    updated_at: new Date('2026-03-17'),
    date: new Date('2026-03-17'),
    values: [
                {
            field_id: 1,
            name: 'Health',
            color_hex: '#FF0000',
            value: 7
        },
        {
            field_id: 2,
            name: 'Career',
            color_hex: '#FF7F00',
            value: 8
        },
        {
            field_id: 3,
            name: 'Finance',
            color_hex: '#FFFF00',
            value: 6
        },
        {
            field_id: 4,
            name: 'Family',
            color_hex: '#00FF00',
            value: 9
        },
        {
            field_id: 5,
            name: 'Friends',
            color_hex: '#0000FF',
            value: 5
        },
        {
            field_id: 6,
            name: 'Personal Growth',
            color_hex: '#8B00FF',
            value: 7
        }
    ]
}

const Record2: IRecord = {
    record_id: 1,
    wheel_id: 1,
    created_at: new Date('2026-04-02'),
    updated_at: new Date('2026-03-02'),
    date: new Date('2026-03-17'),
    values: [
                {
            field_id: 1,
            name: 'Health',
            color_hex: '#FF0000',
            value: 2
        },
        {
            field_id: 2,
            name: 'Career',
            color_hex: '#FF7F00',
            value: 3
        },
        {
            field_id: 3,
            name: 'Finance',
            color_hex: '#FFFF00',
            value: 1
        },
        {
            field_id: 4,
            name: 'Family',
            color_hex: '#00FF00',
            value: 2
        },
        {
            field_id: 5,
            name: 'Friends',
            color_hex: '#0000FF',
            value: 9
        },
        {
            field_id: 6,
            name: 'Personal Growth',
            color_hex: '#8B00FF',
            value: 4
        }
    ]
}

export const Record3: IRecord = {
    record_id: 1,
    wheel_id: 2,
    created_at: new Date('2026-03-17'),
    updated_at: new Date('2026-03-17'),
    date: new Date('2026-03-17'),
    values: [
        {
            field_id: 7,
            name: 'Nutrition',
            color_hex: '#FF6347',
            value: 6
        },
        {
            field_id: 8,
            name: 'Exercise',
            color_hex: '#FFD700',
            value: 7
        },
        {
            field_id: 9,
            name: 'Sleep',
            color_hex: '#1E90FF',
            value: 8
        },
        {
            field_id: 10,
            name: 'Mental Health',
            color_hex: '#DA70D6',
            value: 9
        }
    ]
}

export const currentUserRecords: IRecord[] = [Record1, Record2, Record3]