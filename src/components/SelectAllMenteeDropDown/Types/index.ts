export interface menteeList {
  programID: number;
  employeeID: number;
  firstName: string;
  lastName: string;
}
export interface programStateProp {
  setProgramID: React.Dispatch<React.SetStateAction<number>>;
}
