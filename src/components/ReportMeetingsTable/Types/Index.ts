export interface meetings {
  menteeName: string;
  meetingID: number;
  meetingName: string;
  scheduledDate: string;
  scheduledTime: string;
  status: string;

  // Add other fields as needed
}

export interface ReportMeetingTableProps {
  meetings: meetings[];
  totalCount: number;
}

export interface Sort {
  sort: string;
}
