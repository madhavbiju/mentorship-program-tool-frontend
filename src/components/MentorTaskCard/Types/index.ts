export interface Tasks {
  taskID:number;
  menteeFirstName: string;
  menteeLastName: string;
  title: string;
  taskDescription: string;
  taskStatus: number;
  endDate : string;
}
export interface TaskProps {
  tasks: Tasks[];
  totalCount: number;
}
