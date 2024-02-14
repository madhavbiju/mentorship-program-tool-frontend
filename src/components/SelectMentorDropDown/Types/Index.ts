export interface mentorList {
  programID: number;
  employeeID: number;
  firstName: string;
  lastName: string;
}

export interface programStateProp {
  setProgramID: React.Dispatch<React.SetStateAction<number>>;
}
