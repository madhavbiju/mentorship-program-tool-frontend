export interface requests {
  programID: number;
  reason: string;
}

export interface RequestBoxProps {
  request: requests[];
  totalCount: number;
}
