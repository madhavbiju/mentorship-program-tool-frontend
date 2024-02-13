export interface Tasks {
  menteeFirstName: string;
  menteeLastName: string;
  taskName: string;
  taskStatus: number;
  endDate : string;
}
export interface TaskProps {
  tasks: Tasks[];
  totalCount: number;
}