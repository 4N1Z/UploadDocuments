import UploadButton from "@/components/UploadButton";
import React from "react";


export default function page() {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="h-[40vh] max-h-[40vh] flex justify-center items-center ">
        <UploadButton  />
      </div>
    </div>
  );
}
