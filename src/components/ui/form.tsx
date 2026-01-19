"use client";

import { TriangleAlert } from "lucide-react";
import { Form as FormPrimitive } from "radix-ui";
import { createContext, useContext } from "react";
import { cn } from "@/lib/utils";

function FormRoot({
  className,
  ...props
}: React.ComponentProps<typeof FormPrimitive.Root>) {
  return (
    <FormPrimitive.Root
      data-slot="form-root"
      className={cn("flex flex-col gap-4", className)}
      {...props}
    />
  );
}

function FormField({
  className,
  ...props
}: React.ComponentProps<typeof FormPrimitive.Field>) {
  return (
    <FormPrimitive.Field
      data-slot="form-field"
      className={cn(
        "group flex flex-col gap-1 pb-5 has-data-[slot=form-message]:pb-0 data-invalid:pb-0 data-invalid:text-destructive",
        "has-disabled:text-label-tertiary",
        className,
      )}
      {...props}
    />
  );
}

function FormLabel({
  className,
  children,
  showOptional = true,
  ...props
}: React.ComponentProps<typeof FormPrimitive.Label> & {
  showOptional?: boolean;
}) {
  return (
    <FormPrimitive.Label
      data-slot="form-label"
      className={cn("text-sm", className)}
      {...props}
    >
      {children}
      {showOptional && <span> (optional)</span>}
    </FormPrimitive.Label>
  );
}

function FormControl({
  className,
  ...props
}: React.ComponentProps<typeof FormPrimitive.Control>) {
  return (
    <FormPrimitive.Control
      data-slot="form-control"
      className={cn(
        "peer w-full border border-fill-primary px-3 py-2 rounded-xl caret-brand",
        "disabled:cursor-not-allowed disabled:bg-background-secondary/50 disabled disabled:border-fill-secondary",
        "hover:bg-accent/3",
        "focus:border-accent focus:outline-none focus:ring ring-accent",
        "group-data-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}

type FormMessageProps = React.ComponentProps<typeof FormPrimitive.Message> & {
  variant?: "info" | "error" | "warning";
};

function FormMessage({
  children,
  className,
  variant = "info",
  ...props
}: FormMessageProps) {
  const isError = variant === "error";
  const isWarning = variant === "warning";

  return (
    <FormPrimitive.Message
      data-slot="form-message"
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
    </FormPrimitive.Message>
  );
}

// Context for sharing validity state between FormMessages children
const FormMessagesContext = createContext<ValidityState | undefined>(undefined);

type FormMessagesProps = {
  children: React.ReactNode;
};

/**
 * Container component that provides validity state context to its children.
 * Use with FormDefaultMessage and FormInvalidMessages for declarative message handling.
 */
function FormMessages({ children }: FormMessagesProps) {
  return (
    <FormPrimitive.ValidityState>
      {(validity) => (
        <FormMessagesContext.Provider value={validity}>
          {children}
        </FormMessagesContext.Provider>
      )}
    </FormPrimitive.ValidityState>
  );
}

/**
 * Renders children only when the field is valid (no validation errors).
 * Must be used within FormMessages.
 */
function FormDefaultMessage(props: React.ComponentProps<typeof FormMessage>) {
  const validity = useContext(FormMessagesContext);

  // Hide when there are validation errors (validity.valid is false)
  // Show when pristine (validity is undefined) or when valid
  if (validity && !validity.valid) {
    return null;
  }

  return <FormMessage {...props} />;
}

type FormInvalidMessagesProps = {
  children: React.ReactNode;
};

/**
 * Semantic wrapper for grouping validation error messages.
 * FormMessage components inside will show based on their match prop.
 */
function FormInvalidMessages({ children }: FormInvalidMessagesProps) {
  return <>{children}</>;
}

function FormSubmit({
  className,
  ...props
}: React.ComponentProps<typeof FormPrimitive.Submit>) {
  return (
    <FormPrimitive.Submit
      data-slot="form-submit"
      className={cn(className)}
      {...props}
    />
  );
}

export {
  FormRoot,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormMessages,
  FormDefaultMessage,
  FormInvalidMessages,
  FormSubmit,
};
