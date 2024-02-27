export interface tasks {
  taskId: number;
  menteeFirstName: string;
  taskName: string;
  startDate: string;
  endDate: string;
  taskStatus: number;
  // Add other fields as needed
}

export interface AdminPairReportTaskTableProps {
  task: tasks[];
  totalCount: number;
}

export interface Sort {
  sort: string;
}