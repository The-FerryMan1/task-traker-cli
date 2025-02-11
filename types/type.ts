export interface Task {
    id: number;
    description: string;
    status: string;
    created_At: number;
    updated_At: number | null;
}