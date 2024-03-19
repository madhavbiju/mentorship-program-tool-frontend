import { SetStateAction } from "react";
import { ParticularProgramProps } from "../../editPage/types";

export interface Mentees {
  employeeID: number;
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

export interface EditPageProps {
  program: ParticularProgramProps;
  mentorName: string;
  menteeName: string;
  mentees: Mentees[];
}
