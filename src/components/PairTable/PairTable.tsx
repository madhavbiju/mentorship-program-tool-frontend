import {
  ColDef,
  SizeColumnsToFitGridStrategy,
  ValueFormatterParams,
} from "ag-grid-community";
import "../AgGrid/Style.css";
import { useMemo, useState } from "react";
import { AgGridReact, CustomCellRendererProps } from "ag-grid-react"; // AG Grid Component
import { Chip } from "@mui/joy";
import { PairTableProps } from "./Types";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import { useColorScheme as useMaterialColorScheme } from "@mui/material/styles";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useNavigate } from "react-router-dom";

// Create new GridExample component
const PairTable = ({ program, totalCount }: PairTableProps) => {
  const history = useNavigate();
  const { mode } = useMaterialColorScheme();
  // Convert Date to Readable Format
  const dateFormatter = (params: ValueFormatterParams): string => {
    const date = new Date(params.value);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month indexes are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  /* Custom Cell Renderer (Display tick / cross in 'Status' column) */
  const ProgramStatusRenderer = (params: CustomCellRendererProps) => (
    <Chip
      variant="soft"
      size="sm"
      color={params.value === 1 ? "success" : "neutral"}
      startDecorator={
        params.value === 1 ? (
          <RotateRightIcon />
        ) : params.value === 8 ? (
          <CheckRoundedIcon />
        ) : (
          <HighlightOffIcon />
        )
      }
    >
      {params.value === 1
        ? "Ongoing"
        : params.value === 8
        ? "Completed"
        : "Inactive"}
    </Chip>
  );

  // Column Definitions: Defines & controls grid columns.
  const [colDefs] = useState<ColDef[]>([
    {
      headerName: "Program Name",
      field: "programName",
    },
    {
      headerName: "Mentor",
      field: "mentorFirstName",
    },
    {
      headerName: "Mentee",
      field: "menteeFirstName",
    },
    {
      headerName: "End Date",
      field: "endDate",
      valueFormatter: dateFormatter,
    },
    {
      headerName: "Status",
      field: "programStatus",
      cellRenderer: ProgramStatusRenderer,
    },
  ]);

  // Apply settings across all columns
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      filter: true,
      editable: false,
    };
  }, []);

  const autoSizeStrategy: SizeColumnsToFitGridStrategy = {
    type: "fitGridWidth",
    defaultMinWidth: 100,
    columnLimits: [
      {
        colId: "country",
        minWidth: 900,
      },
    ],
  };

  // Container: Defines the grid's theme & dimensions.
  return (
    <div
      className={`${
        mode === "dark" ? "ag-theme-quartz-dark" : "ag-theme-quartz"
      }`}
      style={{ width: "100%", height: "350px" }}
    >
      <AgGridReact
        rowData={program}
        columnDefs={colDefs}
        onRowClicked={(event) => {
          history(`edit/${event.data.programID}`);
        }}
        defaultColDef={defaultColDef}
        autoSizeStrategy={autoSizeStrategy}
      />
    </div>
  );
};

export default PairTable;
