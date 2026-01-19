import { FileText, Mail, MapPin, Phone, User } from "lucide-react";
import { AnimatedCheckmark } from "@/components/animated-checkmark";
import { DataRow } from "@/components/data-row";
import { FilePreview } from "@/components/file-preview";
import { VStack, WithSidebar } from "@/components/layout";
import { formatFileSize } from "@/lib/format-file-size";
import type { RegistrationFormData } from "@/schemas/registration";

type RegistrationConfirmationProps = {
  data: RegistrationFormData;
};

export function RegistrationConfirmation({
  data,
}: RegistrationConfirmationProps) {
  const fullName = `${data.givenName} ${data.familyName}`;

  return (
    <VStack className="gap-8">
      <WithSidebar.Root>
        <WithSidebar.Side>
          <AnimatedCheckmark className="size-17 sm:size-15" />
        </WithSidebar.Side>
        <WithSidebar.Content className="min-w-7/10">
          <h2 className="text-lg sm:text-2xl font-semibold text-balance animate-fade-slide-in delay-600">
            Registration Complete
          </h2>
          <p className="text-label-secondary text-sm sm:text-lg text-pretty animate-fade-slide-in delay-700">
            Thank you for registering. Here&apos;s a summary of your
            information.
          </p>
        </WithSidebar.Content>
      </WithSidebar.Root>

      <WithSidebar.Root className="gap-8">
        <WithSidebar.Content>
          <VStack className="divide-y divide-fill-secondary">
            <DataRow
              icon={User}
              label="Full Name"
              value={fullName}
              animationDelay="800ms"
            />
            <DataRow
              icon={Mail}
              label="Email"
              value={data.email}
              animationDelay="900ms"
            />
            <DataRow
              icon={Phone}
              label="Phone"
              value={data.phone}
              animationDelay="1000ms"
            />
            {data.address && (
              <DataRow
                icon={MapPin}
                label="Address"
                value={data.address}
                animationDelay="1100ms"
              />
            )}
            <DataRow
              icon={FileText}
              label={data.cv.name}
              value={formatFileSize(data.cv.size)}
              animationDelay="1100ms"
            />
          </VStack>
        </WithSidebar.Content>
        <WithSidebar.Side className="max-w-full">
          <div className="animate-fade-slide-in delay-1200">
            <FilePreview file={data.cv} />
          </div>
        </WithSidebar.Side>
      </WithSidebar.Root>

      <p className="text-center text-sm text-muted-foreground animate-fade-slide-in delay-1300">
        A confirmation email has been sent to{" "}
        <span className="font-medium text-foreground">{data.email}</span>
      </p>
    </VStack>
  );
}
