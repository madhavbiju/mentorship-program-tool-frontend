export interface Task {
  taskName: string;
  mentorFirstName: string;
  mentorLastName: string;
  endDate: string;
}
export interface TasksProps {
  tasks: Task[];
}
