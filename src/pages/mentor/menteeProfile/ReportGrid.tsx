import React, { useState } from "react";
import PairReportTaskTableHandler from "../../../components/PairReportTaskTable/PairReportTaskTableHandler";
import PairReportMeetingTableHandler from "../../../components/PairReportMeetingTable/PairReportMeetingTableHandler";
import { Grid } from "@mui/joy";

const ReportGrid = () => {
  const [programID, setProgramID] = useState<number>(1);
  const [refreshKey, setRefreshKey] = useState(0);
  const [selectedSortOption, setSelectedSortOption] = useState("TaskName");
  const [selectedmeetingSortOption, setSelectedMeetingSortOption] =
    useState("MeetingName");
  return (
    <>
      <Grid sx={{ marginTop: 1 }}>
        <PairReportTaskTableHandler
          key={refreshKey}
          sort={selectedSortOption}
          programid={programID}
        />
      </Grid>
      <Grid>
        <PairReportMeetingTableHandler
          key={refreshKey}
          sort={selectedmeetingSortOption}
          programid={programID}
        />
      </Grid>
    </>
  );
};

export default ReportGrid;
