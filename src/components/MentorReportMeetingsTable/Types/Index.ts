export interface meetings {
  menteeFirstName: string;
  meetingID: number;
  title: string;
  scheduleDate: string;
  startTime: string;
  meetingStatus: number;

  // Add other fields as needed
}

export interface MentorReportMeetingTableProps {
  meetings: meetings[];
  totalCount: number;
}

export interface Sort {
  sort: string;
}
