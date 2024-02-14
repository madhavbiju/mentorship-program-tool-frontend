export interface requests {
  programExtensionID: number;
  programID: number;
  menteeID: number;
  mentorID: number;
  programName: string;
  newEndDate: string;
  reason: string;
  menteeName: string;
  mentorName: string;
  currentEndDate: string;
  requestStatusID: number;
}

export interface RequestBoxProps {
  request: requests[];
  totalCount: number;
}

export interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menteeData: requests;
}
