import React, { FormEvent, useState } from "react";
import { ModalProps, requestType } from "./Types";
import CreateRequestModal from "./CreateRequestModal";
import { postRequestData } from "./Api/postRequest";
import Swal from "sweetalert2";

const CreateRequestModalHandler = ({
  open,
  setOpen,
  menteeData,
}: ModalProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendRequestData = async (formatedRequestedData: requestType) => {
    setIsLoading(true);
    let response = await postRequestData(formatedRequestedData);
    setIsLoading(false);
    // Use SweetAlert2 to show success or error message based on response
    if (response?.status == 200 || 201) {
      setOpen(false);
      Swal.fire("Success", "Request Created successfully!", "success");
    } else {
      setOpen(false);
      Swal.fire("Error", "Failed to create meeting", "error");
    }
  };
  const EmployeeID = sessionStorage.getItem("EmployeeId");
  var modfifiedBy: number = +EmployeeID!;
  const convertToRequestFormat = (formDataObject: Record<string, string>) => {
    return {
      programID: menteeData.programID,
      newEndDate: formDataObject.newEndDate + "T00:00:00.000Z" || "",
      reason: formDataObject.reason || "",
      modifiedBy: modfifiedBy,
      requestStatusID: 4,
    };
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formDataObject: Record<string, string> = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value as string;
    });
    const convertedData = convertToRequestFormat(formDataObject);
    sendRequestData(convertedData);
  };
  return (
    <>
      <CreateRequestModal
        open={open}
        setOpen={setOpen}
        menteeData={menteeData}
        submit={submit}
      />
    </>
  );
};
export default CreateRequestModalHandler;
