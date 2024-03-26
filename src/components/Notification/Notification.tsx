import { FC, ReactNode, useEffect, useState } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseUrl } from "../../config/configUrl";

const NotificationComponent: FC<{
  children: (
    notificationCount: number,
    message: string[],
    changeNotification: () => void
  ) => ReactNode;
}> = ({ children }) => {
  const [notificationCount, setNotificationsCount] = useState<number>(0);
  const [message, setMessage] = useState<string[]>([]);

  const changeNotification = () => {
    setMessage([]);
    setNotificationsCount(0);
  };

  useEffect(() => {
    // Create SignalR connection
    const hubConnection = new HubConnectionBuilder()
      .withUrl(`${baseUrl}/notificationHub`)
      .build();

    // Start the connection
    hubConnection
      .start()
      .then(() => {
        console.log("SignalR Connected");

        // Handle PairCreated event
        hubConnection.on(
          "PairCreated",
          (message: string, mentorUser, menteeUser) => {
            // Check if the current user is either the mentor or mentee
            const employeeID = sessionStorage.getItem("EmployeeId");
            if (employeeID === menteeUser || employeeID === mentorUser) {
              setNotificationsCount((prevCount) => prevCount + 1);
              setMessage((prevmessage) => [...prevmessage, message]);
              toast.info("New Pair Created");
            }
          }
        );

        // Handle ExtensionRequestNotification
        hubConnection.on(
          "ExtensionRequestNotification",
          (
            message: string,
            adminUser: string,
            mentorUser: string,
            mentorName: string
          ) => {
            // Handle extension request notification
            const employeeID = sessionStorage.getItem("EmployeeId");
            if (employeeID === adminUser) {
              setNotificationsCount((prevCount) => prevCount + 1);
              setMessage((prevmessage) => [...prevmessage, message]);
              toast.info(`A Program extension request raised by ${mentorName}`);
            }
          }
        );

        hubConnection.on(
          "ExtensionApprovalNotification",
          (message: string, mentorUser: string) => {
            console.log(message, ",", mentorUser);
            const employeeID = sessionStorage.getItem("EmployeeId");
            if (employeeID === mentorUser) {
              setNotificationsCount((prevCount) => prevCount + 1);
              setMessage((prevmessage) => [...prevmessage, message]);
              toast.info("Your Program extension request has been approved");
            }
          }
        );

        hubConnection.on(
          "TaskPostedNotification",
          (message: string, menteeUser: string) => {
            const employeeID = sessionStorage.getItem("EmployeeId");
            if (employeeID === menteeUser) {
              setNotificationsCount((prevCount) => prevCount + 1);
              setMessage((prevmessage) => [...prevmessage, message]);
              toast.info("New Task is Assigned to You");
            }
          }
        );

        hubConnection.on(
          "TaskSubmittedNotification",
          (message: string, mentorUser: string) => {
            const employeeID = sessionStorage.getItem("EmployeeId");
            if (employeeID === mentorUser) {
              setNotificationsCount((prevCount) => prevCount + 1);
              setMessage((prevmessage) => [...prevmessage, message]);
              toast.info("A Task was Submitted");
            }
          }
        );

        hubConnection.on(
          "TaskDueDateUpdatedNotification",
          (message: string, menteeUser: string) => {
            const employeeID = sessionStorage.getItem("EmployeeId");
            if (employeeID === menteeUser) {
              setNotificationsCount((prevCount) => prevCount + 1);
              setMessage((prevmessage) => [...prevmessage, message]);
              toast.info("A Task dueDate is extented");
            }
          }
        );

        hubConnection.on(
          "MeetingScheduledNotification",
          (message: string, menteeUser: string) => {
            const employeeID = sessionStorage.getItem("EmployeeId");
            if (employeeID === menteeUser) {
              setNotificationsCount((prevCount) => prevCount + 1);
              setMessage((prevmessage) => [...prevmessage, message]);
              toast.info("New meeting is scheduled.");
            }
          }
        );

        // Handle connection errors
        hubConnection.onclose((error: any) => {
          console.log("SignalR Connection Closed: ", error);
        });
      })
      .catch((error: any) =>
        console.error("SignalR Connection Error: ", error)
      );

    // Clean up on component unmount
    return () => {
      hubConnection.off("PairCreated"); // Unsubscribe from the "PairCreated" event
      hubConnection.stop(); // Stop the SignalR connection
    };
  }, []);

  return <div>{children(notificationCount, message, changeNotification)}</div>;
};

export default NotificationComponent;
