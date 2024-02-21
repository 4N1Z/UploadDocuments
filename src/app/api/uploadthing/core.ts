//core.ts

import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
 
const f = createUploadthing();

export const ourFileRouter = {

  pdfUploader: f({ pdf: { maxFileSize: "4MB" } })

    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      // Perform the operations you want to do with the file here

      console.log("Upload complete, ", metadata);
      console.log("file url", file.url);
 
      // Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: file.url };
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;