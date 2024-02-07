import React, { FC, ReactNode, useEffect } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";

const NotificationComponent = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    // Create SignalR connection
    const connection = new HubConnectionBuilder()
      .withUrl("https://localhost:7259/notificationHub")
      .build();

    // Start the connection
    connection
      .start()
      .then(() => console.log("SignalR Connected"))
      .catch((error: any) =>
        console.error("SignalR Connection Error: ", error)
      );

    // Receive notifications
    connection.on("ReceiveMessage", (message: string, id: string) => {
      // to handle the received message and ID
      console.log("Received Message: ", message);
      console.log("Received ID: ", id);
    });

    // Handle connection errors
    connection.onclose((error: any) => {
      console.log("SignalR Connection Closed: ", error);
    });

    // Clean up on component unmount
    return () => {
      connection.off("ReceiveMessage"); // Unsubscribe from the "ReceiveMessage" event
      connection.stop(); // Stop the SignalR connection
    };
  }, []);

  return (
    // Your component JSX
    <div>{children}</div>
  );
};

export default NotificationComponent;
