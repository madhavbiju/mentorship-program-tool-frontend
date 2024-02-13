export interface Task {
  taskName: string;
  menteeFirstName: string;
  menteeLastName: string;
}
export interface TasksProps {
  tasks: Task[];
  totalCount: number;
}
