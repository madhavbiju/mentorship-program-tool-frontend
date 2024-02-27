import React, { FC, ReactNode, useEffect, useState } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotificationComponent: FC<{
  children: (notifications: string[]) => ReactNode;
}> = ({ children }) => {
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    // Create SignalR connection
    const hubConnection = new HubConnectionBuilder()
      .withUrl("https://localhost:7259/notificationHub")
      .build();

    // Start the connection
    hubConnection
      .start()
      .then(() => console.log("SignalR Connected"))
      .catch((error: any) =>
        console.error("SignalR Connection Error: ", error)
      );

    // Receive notifications
    hubConnection.on("ReceiveMessage", (message: string, id: string) => {
      // Handle received message and ID
      console.log("Received Message: ", message);
      console.log("Received ID: ", id);

      // Update notifications state with received message
      setNotifications((prevNotifications) => [...prevNotifications, message]);
    });

    hubConnection.on("PairCreated", (mentorUser, menteeUser) => {
      // Handle pair creation notification
      console.log(
        "Pair created for mentor:",
        mentorUser,
        "and mentee:",
        menteeUser
      );
      // Show the pair creation message as a notification
      const employeeID = sessionStorage.getItem("EmployeeId");
      if(employeeID==menteeUser || employeeID==mentorUser){
      toast.info("PairCreated");
      }
    });

    // Handle ExtensionRequestNotification
    hubConnection.on("ExtensionRequestNotification", (adminUser: string) => {
      // Handle extension request notification
      console.log(
        "Received Extension Request Notification for admin user: ",
        adminUser
      );
      // You can add logic here to handle the extension request notification
    });

    // Handle connection errors
    hubConnection.onclose((error: any) => {
      console.log("SignalR Connection Closed: ", error);
    });

    // Clean up on component unmount
    return () => {
      hubConnection.off("ReceiveMessage"); // Unsubscribe from the "ReceiveMessage" event
      hubConnection.stop(); // Stop the SignalR connection
    };
  }, []);

  return (
    // Pass notifications state to children
    <div>
      <ToastContainer style={{ marginTop: 40 }} />
      {children(notifications)}
    </div>
  );
};

export default NotificationComponent;
