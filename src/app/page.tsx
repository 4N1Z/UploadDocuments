import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 sm:mt-40 flex flex-col items-center justify-center text-center">
      <div className="py-[6em] max-w-[90vw] min-w-[90vw] max-h-[60vh] min-h-[60vh] rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl grainy ">
        <div className="flex flex-col gap-[3rem] items-center justify-between">
          <div className="text-4xl font-medium text-zinc-900">
            This is your guide to set up the Uploads for any files from {"\n"}
            <div>
              <span className="text-purple-500 text-semibold"> Next JS </span>
              to
              <span className="text-purple-500 text-semibold"> Amazon S3 </span>
            </div>
          </div>
          <Button className="">
            <Link href="/upload">Go to the upload page</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
