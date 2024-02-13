export interface meetingDetails {
    meetingID: number,
    programID: number,
    scheduleDate: string,
    startTime: string,
    endTime: string,
    title: string,
    agenda: string,
    meetingModeID: number,
    location: string,
  }

  export interface meetingProp{
    detailsOfMeeting: meetingDetails
  }
  