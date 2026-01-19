"use client";

import { Download, FileText } from "lucide-react";
import { useEffect, useRef } from "react";
import { VStack } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { formatFileSize } from "@/lib/format-file-size";

type FilePreviewClientProps = {
  file: File;
};

export function FilePreview({ file }: FilePreviewClientProps) {
  const fileUrlRef = useRef<string | null>(null);

  // Create blob URL on first client-side render (lazy initialization)
  if (!fileUrlRef.current) {
    fileUrlRef.current = URL.createObjectURL(file);
  }

  const fileUrl = fileUrlRef.current;
  const isPdf = file.type === "application/pdf";

  // Cleanup blob URL on unmount
  useEffect(() => {
    return () => {
      if (fileUrlRef.current) {
        URL.revokeObjectURL(fileUrlRef.current);
        fileUrlRef.current = null;
      }
    };
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-xl border border-fill-secondary overflow-hidden bg-background-secondary h-68.5">
        {isPdf ? (
          <iframe
            src={fileUrl}
            title="CV Preview"
            className="border-0 size-full"
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 p-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <FileText className="h-8 w-8 text-label-secondary" />
            </div>
            <VStack className="items-center gap-1">
              <span className="text-base font-medium text-foreground">
                {file.name}
              </span>
              <span className="text-sm text-label-secondary">
                {formatFileSize(file.size)}
              </span>
              <span className="text-xs text-label-tertiary mt-2">
                Preview not available for this file type
              </span>
            </VStack>
            <Button variant="outline" size="sm" asChild>
              <a href={fileUrl} download={file.name}>
                <Download className="h-4 w-4" />
                Download File
              </a>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
