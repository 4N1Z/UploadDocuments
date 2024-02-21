"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useUploadThing } from "@/lib/uploadthing";
import React, { useState } from "react";
import { toast } from "sonner";

import Dropzone from "react-dropzone";
import { useRouter } from "next/navigation";
import { Divide, Loader2 } from "lucide-react";

const UploadDropZone = () => {
  const { startUpload } = useUploadThing("pdfUploader");
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const router = useRouter();

  return (
    <Dropzone
      multiple={false}
      onDrop={async (acceptedFile) => {
        setIsUploading(true);

        const res = await startUpload(acceptedFile);

        if (res) {
          toast.success("File uploaded successfully");
        } else {
          toast.error("File upload Error");
        }

        const [fileResponse] = res;
        const key = fileResponse?.key;
        console.log("Key", key);

        // This is how the url looks like :
        const urlLink = `https://utfs.io/f/${key}`;
        router.push(fileResponse.url);
        // if (!key)
      }}
    >
      {({ getRootProps, getInputProps, acceptedFiles }) => (
        <div
          {...getRootProps()}
          className="border h-64 m-4 borrder-dashed border-gray-300 rounded-lg"
        >
          <div className="flex items-center justify-center h-full w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <p className="mb-2 text-sm text-zinc-700">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-zinc-500">Upload any files.</p>
              </div>

              {/* Upload button, and tracking */}
              {isUploading ? (
                <div className="flex gap-1 items-center justify-center text-sm text-zinc-800 text-center pt-2">
                  <Loader2 className="h-3 w-3 animate-spin" />
                  Loading !
                </div>
              ) : null}

              {acceptedFiles && acceptedFiles[0] ? (
                <div className="max-w-xs bg-white flex items-center rounded-md overflow-hidden outline outline-[1px] outline-zinc-200 divide-zinc divide-zinc-200">
                  <div className="px-3 py-2 h-full grid place-items-center">
                    <div className="px-3 py-2 h-full text-sm truncate">
                      {acceptedFiles[0].name}
                    </div>
                  </div>
                </div>
              ) : null}

              <input
                {...getInputProps()}
                type="file"
                id="dropzone-file"
                className="hidden"
              />
            </label>
          </div>
        </div>
      )}
    </Dropzone>
  );
};

const UploadButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v);
        }
      }}
    >
      <DialogTrigger onClick={() => setIsOpen(true)} asChild>
        <Button>Upload Your Report to chat with it</Button>
      </DialogTrigger>

      <DialogContent>
        <UploadDropZone />
      </DialogContent>
    </Dialog>
  );
};

export default UploadButton;
