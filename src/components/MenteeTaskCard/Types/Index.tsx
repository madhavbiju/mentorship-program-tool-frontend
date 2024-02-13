export interface Tasks {
  taskName: string;
  taskStatus: number;
  endDate: string;
}
export interface TaskProps {
  tasks: Tasks[];
  totalCount: number;
}
