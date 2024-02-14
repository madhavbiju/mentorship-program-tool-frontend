import { useState, useEffect } from "react";
import { Stack } from "@mui/joy";
import { mentorList } from "./Types";
import ChatListItem from "./ChatListItem";
import { fetchMentorList } from "./Api/getMentorList";

const ChatListItemHandler = () => {
  const mentor: mentorList = {
    emailID: "",
    firstName: "",
    lastName: "",
  };

  const [mentorListData, setMenteeListData] = useState<mentorList[]>([]);
  const EmployeeID = sessionStorage.getItem("EmployeeId");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getMenteeListData = async () => {
    setIsLoading(true); // Set loading state to true while fetching data
    let response = await fetchMentorList(EmployeeID!);
    setMenteeListData(response);
    setIsLoading(false); // Set loading state to false after fetching data
  };

  useEffect(() => {
    getMenteeListData();
  }, []);

  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        {isLoading ? <></> : <ChatListItem mentorListData={mentorListData} />}
      </Stack>
    </>
  );
};
export default ChatListItemHandler;
