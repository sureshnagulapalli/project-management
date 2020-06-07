export class Task {
    id: number;
    name: String;
    created_by: String;
    assigned_to: String[];
    created_at: Date;
    complete_by: Date;
    status: String;
    category: String;
}