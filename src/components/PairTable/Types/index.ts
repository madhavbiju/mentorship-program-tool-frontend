export interface programs {
  programID: number;
  mentorFirstName: string;
  menteeFirstName: string;
  programName: string;
  endDate: string;
  programStatus: number;
}

export interface PairTableProps {
  program: programs[];
  totalCount: number;
}

export interface FilterProps {
  status: string;
  sort: string;
  search: string;
}