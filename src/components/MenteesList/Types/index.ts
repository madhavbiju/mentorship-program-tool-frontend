export interface Mentee {
  id: number;
  firstName: string;
  lastName: string;
  programName: string;
  endDate: Date;
  // Add other fields as needed
}
export interface MenteesProps {
  mentees: Mentee[];
  totalCount: number;
}
