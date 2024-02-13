export interface Mentee {
  employeeID: number;
  firstName: string;
  lastName: string;
  programName: string;
  programID: number;
  endDate: string;
  // Add other fields as needed
}
export interface MenteesProps {
  mentees: Mentee[];
  totalCount: number;
}
