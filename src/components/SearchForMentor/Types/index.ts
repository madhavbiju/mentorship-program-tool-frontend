export interface Mentors {
  employeeID: number;
  firstName: string;
  lastName: string;
}
export interface MentorsProps {
  mentors: Mentors[];
  setMentorID: React.Dispatch<React.SetStateAction<number>>;
}
export interface MentorIdProps {
  setMentorID: React.Dispatch<React.SetStateAction<number>>;
}
