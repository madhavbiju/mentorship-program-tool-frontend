export interface Mentee {
  programName: string;
  menteeFirstName: string;
  menteeLastName: string;
  mentorFirstName: string;
  programID: number;
  endDate: string;
  startDate: string;
  // Add other fields as needed
}
export interface MenteesProps {
  mentees: Mentee[];
  totalCount: number;
}

export interface menteeProfileProp {
  menteeData: Mentee;
}
