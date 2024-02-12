export interface Mentees {
  employeeID: SetStateAction<number>;
  firstName: string;
  lastName: string;
}
export interface MenteesProps {
  mentees: Mentees[];
  setMenteeID: React.Dispatch<React.SetStateAction<number>>;
}
export interface MenteeIdProps {
  setMenteeID: React.Dispatch<React.SetStateAction<number>>;
}
