import { FormEvent } from "react"

export interface ModalProps{
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    menteeData: Mentee
}

export interface SubmitModalProps{
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    menteeData: Mentee
    submit: (e: FormEvent<HTMLFormElement>) => Promise<void>
}

export interface Mentee {
    employeeID: number;
    firstName: string;
    lastName: string;
    programName: string;
    programID: number;
    endDate: string;
    // Add other fields as needed
  }

  export interface requestType{
    programID: number;
      newEndDate: string,
      reason: string
      modifiedBy: number,
      requestStatusID: number,
  }