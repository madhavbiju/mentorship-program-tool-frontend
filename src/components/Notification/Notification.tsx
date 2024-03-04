import { FC, ReactNode, useEffect, useState } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotificationComponent: FC<{
  children: (
    notificationCount: number,
    message: string,
    changeNotification: () => void
  ) => ReactNode;
}> = ({ children }) => {
  const [notificationCount, setNotificationsCount] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

  const changeNotification = () => {
    setMessage("");
    setNotificationsCount(0);
  };

  useEffect(() => {
    // Create SignalR connection
    const hubConnection = new HubConnectionBuilder()
      .withUrl("https://localhost:7259/notificationHub")
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
              setMessage((prevmessage) => prevmessage + message);
              // Show the pair creation message as a notification
              toast.info("PairCreated");
              console.log("Toast Fired");
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
            console.log(
              " admin user: ",
              adminUser,
              "mentor:",
              mentorUser,
              "message:",
              message
            );

            const employeeID = sessionStorage.getItem("EmployeeId");
            if (employeeID === adminUser) {
              setNotificationsCount((prevCount) => prevCount + 1);
              setMessage((prevmessage) => prevmessage + message);
              // Show the pair creation message as a notification
              toast.info(`A Program extension request raised by ${mentorName}`);
            }
            // You can add logic here to handle the extension request notification
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
