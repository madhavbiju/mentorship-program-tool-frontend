export interface ParticularProgramProps {
  programID: number;
  mentorID: number;
  menteeID: number;
  modifiedTime: string;
  startDate: string;
  endDate: string;
  programName: string;
  modifiedBy: number;
  programStatus:number
}
export interface ProgramProps {
  program: ParticularProgramProps;
}
