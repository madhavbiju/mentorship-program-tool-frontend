export interface tasks {
  taskId: number;
  menteeFirstName: string;
  taskName: string;
  startDate: string;
  endDate: string;
  taskStatus: number;
  // Add other fields as needed
}

export interface ReportTaskTableProps {
  task: tasks[];
  totalCount: number;
}
