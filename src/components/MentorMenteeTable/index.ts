export interface programs {
  programID: number;
  mentorFirstName: string;
  menteeFirstName: string;
  endDate: string;
  // Add other fields as needed
}

export interface MentorMenteeTableProps {
  program: programs[];
  totalCount: number;
}
