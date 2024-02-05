export interface ActiveCountData {
  menteeCount: number;
  mentorCount: number;
  activePairCount: number;
}

export interface AdminDashboardProps {
  data: ActiveCountData;
}
