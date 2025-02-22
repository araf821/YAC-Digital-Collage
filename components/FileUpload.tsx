"use client";

import { FC } from "react";
import "@uploadthing/react/styles.css";
import { UploadDropzone } from "@/lib/uploadthing";
import Image from "next/image";
import { X } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import Link from "next/link";
import PDFViewer from "./PDFViewer";

interface FileUploadProps {
  endPoint: "audio" | "image" | "pdf" | "video" | "thumbnail";
  onChange: (url?: string) => void;
  value: string;
  classNames?: string;
}

const FileUpload: FC<FileUploadProps> = ({
  endPoint,
  onChange,
  value,
  classNames,
}) => {
  if (value) {
    if (endPoint === "image" || endPoint === "thumbnail") {
      return (
        <div
          className={cn(
            "relative aspect-square h-full w-full rounded-sm border border-background-surface bg-zinc-800",
            classNames,
          )}
        >
          <Image
            src={value}
            alt="uploaded image"
            className="rounded-sm object-cover"
            fill
          />
          <button
            onClick={() => onChange("")}
            type="button"
            className="morph-sm group absolute -right-2 -top-2 rounded-md border border-border-dark bg-background-muted text-zinc-300 hover:text-red-500"
          >
            <X className="size-6 transition group-hover:rotate-90" />
          </button>
        </div>
      );
    }

    if (endPoint === "video") {
      return (
        <div className="relative aspect-video max-h-[40vh] w-full border border-border-dark">
          <video
            src={value}
            controls
            className="h-full w-full rounded-sm object-contain"
          />
          <button
            onClick={() => onChange("")}
            type="button"
            className="morph-sm group absolute -right-2 -top-2 rounded-md border border-border-dark bg-background-muted text-zinc-300 hover:text-red-500"
          >
            <X className="size-5 transition group-hover:rotate-90" />
          </button>
        </div>
      );
    }

    if (endPoint === "audio") {
      return (
        <div className="w-full space-y-2 text-center">
          <audio src={value} controls className="w-full" />
          <button
            onClick={() => onChange("")}
            type="button"
            className="morph-sm rounded-sm bg-zinc-800 px-2.5 py-1.5 text-zinc-300 transition duration-200 hover:bg-background-surface hover:text-zinc-100 max-md:text-sm"
          >
            Remove selected audio
          </button>
        </div>
      );
    }

    if (endPoint === "pdf") {
      return (
        <div className="relative w-full">
          <PDFViewer url={value} />
          <button
            onClick={() => onChange("")}
            type="button"
            className="morph-sm group absolute -right-2 -top-2 rounded-md border border-border-dark bg-background-muted text-zinc-300 hover:text-red-500"
          >
            <X className="size-5 transition group-hover:rotate-90" />
          </button>
          <Link
            href={value}
            target="_blank"
            className="group relative text-zinc-400 transition hover:text-zinc-100"
          >
            View Externally
            <span className="absolute bottom-0 left-0 h-[1px] w-full origin-bottom-left scale-x-0 bg-zinc-400 transition group-hover:scale-x-100 group-hover:bg-zinc-100" />
          </Link>
        </div>
      );
    }
  }

  return (
    <UploadDropzone
      className={cn(
        "morph-md h-full w-full border-2 border-background-surface bg-zinc-800",
        classNames,
      )}
      endpoint={endPoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.error(error);

        if (error.message.includes("maximum allowed size")) {
          toast.error(
            "File size limit exceeded. Please choose a different file.",
          );
        } else {
          toast.error(
            "Something went wrong. Could not upload your file at this time.",
          );
        }
      }}
    />
  );
};

export default FileUpload;
