"use client";

import { File, FileText, X } from "lucide-react";
import { useState } from "react";
import { VStack } from "@/components/layout";
import {
  FileUploadContext,
  FileUploadDropzone,
  FileUploadHiddenInput,
  FileUploadItem,
  FileUploadItemDeleteTrigger,
  FileUploadItemGroup,
  FileUploadItemName,
  FileUploadItemSizeText,
  FileUploadLabel,
  FileUploadMessage,
  FileUploadRoot,
} from "@/components/ui/file-upload";
import { formatFileSize } from "@/lib/format-file-size";
import { formatList } from "@/lib/format-list";

const CV_ACCEPTED_FORMATS: Record<string, string[]> = {
  "application/pdf": [".pdf"],
  "application/msword": [".doc"],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
    ".docx",
  ],
  "application/vnd.oasis.opendocument.text": [".odt"],
};

const ACCEPTED_EXTENSIONS = Object.values(CV_ACCEPTED_FORMATS).flat();

type CvFileUploadProps = {
  name?: string;
  required?: boolean;
  className?: string;
};

export function RegistrationFileUpload({
  name = "cv",
  required = false,
  className,
}: CvFileUploadProps) {
  const [hasError, setHasError] = useState(false);
  const [hasFile, setHasFile] = useState(false);

  const handleFileChange = (details: { acceptedFiles: globalThis.File[] }) => {
    const hasFiles = details.acceptedFiles.length > 0;
    setHasFile(hasFiles);
    if (hasFiles) {
      setHasError(false);
    }
  };

  const handleFormInvalid = (e: React.FormEvent<HTMLDivElement>) => {
    // Check if the invalid event is from our hidden input
    const target = e.target as HTMLInputElement;
    if (target.name === name && !hasFile) {
      setHasError(true);
    }
  };

  return (
    <FileUploadRoot
      maxFiles={1}
      accept={CV_ACCEPTED_FORMATS}
      name={name}
      required={required}
      onFileChange={handleFileChange}
      onInvalidCapture={handleFormInvalid}
      data-invalid={hasError ? true : undefined}
      className={className}
    >
      <FileUploadLabel showOptional={!required}>CV File</FileUploadLabel>
      {hasFile ? (
        <FileUploadContext>
          {({ acceptedFiles }) =>
            acceptedFiles.length > 0 && (
              <FileUploadItemGroup>
                {acceptedFiles.map((file) => (
                  <FileUploadItem
                    key={file.name}
                    file={file}
                    className="bg-accent/5 border-transparent grid grid-cols-[auto_1fr_auto]"
                  >
                    <div className="flex size-10 items-center justify-center rounded bg-accent/15 shrink-0">
                      <FileText className="size-6 text-accent" />
                    </div>
                    <VStack className="gap-1 grow overflow-hidden">
                      <FileUploadItemName className="">
                        {file.name}
                      </FileUploadItemName>
                      <FileUploadItemSizeText>
                        {formatFileSize(file.size)}
                      </FileUploadItemSizeText>
                    </VStack>
                    <FileUploadItemDeleteTrigger>
                      <X className="h-4 w-4" />
                    </FileUploadItemDeleteTrigger>
                  </FileUploadItem>
                ))}
              </FileUploadItemGroup>
            )
          }
        </FileUploadContext>
      ) : (
        <FileUploadDropzone>
          <div className="flex gap-2.5 items-center">
            <div className="flex size-10 items-center justify-center rounded bg-fill-secondary shrink-0 group-data-invalid:bg-destructive/15">
              <File className="size-6 text-label-secondary group-data-invalid:text-destructive shrink-0" />
            </div>
            <span className="text-balance text-sm">
              Drag and drop your file or click to select.
            </span>
          </div>
        </FileUploadDropzone>
      )}
      {hasError ? (
        <FileUploadMessage variant="error">
          Please upload a{" "}
          {formatList(ACCEPTED_EXTENSIONS, { type: "disjunction" })} file.
        </FileUploadMessage>
      ) : (
        <FileUploadMessage>
          Allowed files: {formatList(ACCEPTED_EXTENSIONS)}.
        </FileUploadMessage>
      )}

      <FileUploadHiddenInput />
    </FileUploadRoot>
  );
}
