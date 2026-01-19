"use client";

import { FileUpload } from "@ark-ui/react/file-upload";
import { TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";

type FileUploadRootProps = React.ComponentProps<typeof FileUpload.Root>;
type FileUploadLabelProps = React.ComponentProps<typeof FileUpload.Label> & {
  showOptional?: boolean;
};
type FileUploadDropzoneProps = React.ComponentProps<typeof FileUpload.Dropzone>;
type FileUploadTriggerProps = React.ComponentProps<typeof FileUpload.Trigger>;
type FileUploadItemGroupProps = React.ComponentProps<
  typeof FileUpload.ItemGroup
>;
type FileUploadItemProps = React.ComponentProps<typeof FileUpload.Item>;
type FileUploadItemNameProps = React.ComponentProps<typeof FileUpload.ItemName>;
type FileUploadItemSizeTextProps = React.ComponentProps<
  typeof FileUpload.ItemSizeText
>;
type FileUploadItemDeleteTriggerProps = React.ComponentProps<
  typeof FileUpload.ItemDeleteTrigger
>;
type FileUploadHiddenInputProps = React.ComponentProps<
  typeof FileUpload.HiddenInput
>;

function FileUploadRoot({ className, ...props }: FileUploadRootProps) {
  return (
    <FileUpload.Root
      data-slot="file-upload-root"
      className={cn(
        "group flex flex-col gap-1 pb-5",
        "has-data-[slot=file-upload-message]:pb-0",
        "data-invalid:pb-0 data-invalid:text-destructive",
        className,
      )}
      {...props}
    />
  );
}

function FileUploadLabel({
  className,
  children,
  showOptional = true,
  ...props
}: FileUploadLabelProps) {
  return (
    <FileUpload.Label
      data-slot="file-upload-label"
      className={cn("text-sm", className)}
      {...props}
    >
      {children}
      {showOptional && <span> (optional)</span>}
    </FileUpload.Label>
  );
}

function FileUploadDropzone({ className, ...props }: FileUploadDropzoneProps) {
  return (
    <FileUpload.Dropzone
      data-slot="file-upload-dropzone"
      className={cn(
        "flex flex-col items-center justify-center gap-3 p-3 border-2 border-dashed border-fill-primary rounded-xl cursor-pointer transition-colors duration-200",
        "focus:outline-none focus:border-accent",
        "hover:border-accent hover:bg-background-secondary/30",
        "data-dragging:border-accent data-dragging:bg-background-secondary/50",
        "group-data-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}

function FileUploadTrigger({ className, ...props }: FileUploadTriggerProps) {
  return (
    <FileUpload.Trigger
      data-slot="file-upload-trigger"
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "px-4 py-2 rounded-xl",
        "bg-brand text-brand-foreground font-medium text-sm",
        "hover:bg-brand/90 transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
        className,
      )}
      {...props}
    />
  );
}

function FileUploadItemGroup({
  className,
  ...props
}: FileUploadItemGroupProps) {
  return (
    <FileUpload.ItemGroup
      data-slot="file-upload-item-group"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function FileUploadItem({ className, ...props }: FileUploadItemProps) {
  return (
    <FileUpload.Item
      data-slot="file-upload-item"
      className={cn(
        "flex items-center gap-3 p-3",
        "border-2 border-fill-primary rounded-xl",
        "bg-background-secondary/30",
        className,
      )}
      {...props}
    />
  );
}

function FileUploadItemName({ className, ...props }: FileUploadItemNameProps) {
  return (
    <FileUpload.ItemName
      data-slot="file-upload-item-name"
      className={cn("text-sm font-medium truncate", className)}
      {...props}
    />
  );
}

function FileUploadItemSizeText({
  className,
  ...props
}: FileUploadItemSizeTextProps) {
  return (
    <FileUpload.ItemSizeText
      data-slot="file-upload-item-size"
      className={cn("text-xs text-label-secondary", className)}
      {...props}
    />
  );
}

function FileUploadItemDeleteTrigger({
  className,
  ...props
}: FileUploadItemDeleteTriggerProps) {
  return (
    <FileUpload.ItemDeleteTrigger
      data-slot="file-upload-item-delete"
      className={cn(
        "ml-auto p-1.5 rounded-full",
        "text-muted-foreground hover:text-destructive",
        "hover:bg-destructive/10 transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destructive",
        className,
      )}
      aria-label="Remove file"
      {...props}
    />
  );
}

function FileUploadHiddenInput(props: FileUploadHiddenInputProps) {
  return <FileUpload.HiddenInput data-slot="file-upload-input" {...props} />;
}

type FileUploadMessageProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "info" | "error" | "warning";
};

function FileUploadMessage({
  children,
  className,
  variant = "info",
  ...props
}: FileUploadMessageProps) {
  const isError = variant === "error";
  const isWarning = variant === "warning";

  return (
    <span
      data-slot="file-upload-message"
      data-variant={variant}
      data-error={isError ? true : undefined}
      data-warning={isWarning ? true : undefined}
      role={isError ? "alert" : undefined}
      aria-live={isError ? "polite" : undefined}
      className={cn("text-xs", className)}
      {...props}
    >
      {isError && (
        <>
          <TriangleAlert className="inline align-text-top leading-4 size-[1em]" />{" "}
        </>
      )}
      {children}
    </span>
  );
}

const FileUploadContext = FileUpload.Context;

export {
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
  FileUploadTrigger,
};
