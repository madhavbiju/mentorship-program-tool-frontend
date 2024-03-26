import React, { useEffect, useState } from "react";
import { talkToPaLM } from "./Api/getFromPalm";
import { Box, Button, Grid, Skeleton, Typography } from "@mui/joy";
import ProgramProgressBar from "../../../components/ProgramProgressBar/ProgramProgressBar";
import CreateRequestModalHandler from "../../../components/CreateRequestModal/CreateRequestModalHandler";
import { menteeProfileProp } from "./Types";
import StaggerText from "react-stagger-text";

const ProgressGrid = ({ menteeData }: menteeProfileProp) => {
  const [daysLeft, setDaysLeft] = useState<number>(0);
  const [percentageCompletion, setPercentageCompletion] = useState<number>(0);
  const [open, setOpen] = React.useState<boolean>(false);
  const handleClick = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (menteeData.endDate) {
      const currentDate = new Date();
      const startDate = new Date(menteeData.startDate);
      const endDateDate = new Date(menteeData.endDate);

      const differenceInTime = endDateDate.getTime() - currentDate.getTime();

      const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

      setDaysLeft(differenceInDays); //to find how many days left using currentDate and EndDate

      const totalDuration = endDateDate.getTime() - startDate.getTime();
      const elapsedDuration = currentDate.getTime() - startDate.getTime();
      const percentage = (elapsedDuration / totalDuration) * 100;
      setPercentageCompletion(percentage); //to find percentage of completion using start and end date
    }
  }, [menteeData.startDate, menteeData.endDate]);

  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month indexes are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>("");
  const [responseText, setResponseText] = useState<string>("");

  const requestData = {
    prompt: {
      context: "",
      examples: [],
      messages: [{ content: inputText }],
    },
    temperature: 0.25,
    top_k: 40,
    top_p: 0.95,
    candidate_count: 1,
  };

  const sendToPalm = async () => {
    console.log("Sending");
    try {
      const response = await talkToPaLM(requestData);
      console.log(response.candidates[0].content);
      setResponseText(response.candidates[0].content);
    } catch (error) {
      console.error("Error with PaLM", error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    setInputText(
      `Program Name:${menteeData.programName};Mentor:${menteeData.mentorFirstName};Mentee:${menteeData.menteeFirstName};Start date:${menteeData.startDate};End Date:${menteeData.endDate};Total tasks assigned:10;Completed:8;2 pending;4 meetings scheduled. Summarize these details into a simple formal paragraph. Don't add any other information other than what is mentioned.Don't have to mention who is the mentor and mentee. Reply only the paragraph.`
    );
  }, []);

  useEffect(() => {
    console.log(inputText);
    sendToPalm();
  }, [inputText]);

  useEffect(() => {
    if (responseText != "") setIsLoading(false); // Set loading state to false regardless of success or failure
  }, [responseText]);

  return (
    <>
      <CreateRequestModalHandler
        open={open}
        setOpen={setOpen}
        menteeData={menteeData}
      />
      <Box
        sx={{
          flex: 1,
          borderRadius: "sm",
          marginTop: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid sx={{ padding: 2, width: "100%" }}>
          <ProgramProgressBar
            daysLeft={daysLeft}
            percentageCompletion={percentageCompletion}
          />
          <br></br>
          <Typography sx={{ opacity: "80%" }}>
            ✨ AI Generated Summary:
          </Typography>
          {isLoading ? ( // Render skeleton if loading
            <Typography>
              <Skeleton>
                The ReactJS program started on February 10, 2024 and will end on
                March 20, 2024. A total of 10 tasks were assigned, 8 of which
                have been completed. 2 tasks are pending and 4 meetings have
                been scheduled.
              </Skeleton>
            </Typography>
          ) : (
            <Typography>
              <StaggerText>{responseText}</StaggerText>
            </Typography>
          )}
        </Grid>
        {/* <Grid sx={{ padding: 2 }}>
          <Typography level="h4">
            Start Date: {formatDate(menteeData.startDate)}
          </Typography>
          <Typography level="h4">
            End Date: {formatDate(menteeData.endDate)}
          </Typography>
        </Grid> */}
        <br></br>
        <Button onClick={() => handleClick()}>Request Extension</Button>
      </Box>
    </>
  );
};

export default ProgressGrid;
