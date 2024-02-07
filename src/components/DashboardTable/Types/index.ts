export interface programs {
  programID: number;
  mentorFirstName: string;
  menteeFirstName: string;
  programName: string;
  endDate: string;
  // Add other fields as needed
}

export interface DashboardTableProps {
  program: programs[];
  totalCount: number;
}
