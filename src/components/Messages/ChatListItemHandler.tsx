import { useState, useEffect } from "react";
import { Stack } from "@mui/joy";
import { menteeList } from "./Types";
import { fetchMenteeList } from "./Api/getMenteeList";
import ChatListItem from "./ChatListItem";

const ChatListItemHandler = () => {
  const mentee: menteeList = {
    emailID: "",
    firstName: "",
    lastName: "",
  };

  const [menteeListData, setMenteeListData] = useState<menteeList[]>([]);
  const EmployeeID = sessionStorage.getItem("EmployeeId");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getMenteeListData = async () => {
    setIsLoading(true); // Set loading state to true while fetching data
    let response = await fetchMenteeList(EmployeeID!);
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
        {isLoading ? <></> : <ChatListItem menteeListData={menteeListData} />}
      </Stack>
    </>
  );
};
export default ChatListItemHandler;
