export interface programs {
  programID: number;
  mentorFirstName: string;
  menteeFirstName: string;
  endDate: string;
  startDate: string;
  programStatus: number;
  // Add other fields as needed
}

export interface MentorMenteeTableProps {
  program: programs[];
  totalCount: number;
}
