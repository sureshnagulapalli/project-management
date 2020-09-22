export class Task {
    constructor(
        public id: number, public name: String, public created_by: String, public assigned_to: String[], 
        public created_at: Date, public complete_by: Date, public status: String, public category: String
        ) { }
        
        
}


