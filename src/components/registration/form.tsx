"use client";

import { useActionState } from "react";
import { RegistrationConfirmation } from "@/components/registration/confirmation";
import { RegistrationFileUpload } from "@/components/registration/file-upload";
import { RegistrationLoading } from "@/components/registration/loading";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormInvalidMessages,
  FormLabel,
  FormMessage,
  FormMessages,
  FormRoot,
  FormSubmit,
} from "@/components/ui/form";
import {
  type RegistrationFormData,
  registrationSchema,
} from "@/schemas/registration";

type RequiredFieldProps = Omit<
  React.ComponentProps<typeof FormControl>,
  "name"
> & {
  name: string;
};

type FieldConfig = {
  label: string;
  inputProps: RequiredFieldProps;
};

/** Configuration for registration form fields including labels and input properties */
const REGISTRATION_FIELDS: FieldConfig[] = [
  {
    label: "First Name",
    inputProps: {
      name: "givenName",
      required: true,
      autoComplete: "given-name webauthn",
    },
  },
  {
    label: "Last Name",
    inputProps: {
      name: "familyName",
      required: true,
      autoComplete: "family-name webauthn",
    },
  },
  {
    label: "Email",
    inputProps: {
      name: "email",
      required: true,
      autoComplete: "email webauthn",
      type: "email",
    },
  },
  {
    label: "Phone",
    inputProps: {
      name: "phone",
      required: true,
      inputMode: "tel",
      autoComplete: "tel webauthn",
      type: "tel",
    },
  },
  {
    label: "Address",
    inputProps: {
      name: "address",
      autoComplete: "address-line1 webauthn",
    },
  },
];

type ActionState = {
  success: boolean;
  info: RegistrationFormData;
} | null;

/**
 * Server action that validates and processes form data
 * Simulates a 3-second delay before returning validated registration info
 */
async function register(
  _: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await new Promise((r) => setTimeout(r, 3000));
  const entries = Object.fromEntries(formData);
  const info = registrationSchema.parse(entries);

  return {
    success: true,
    info,
  };
}

/**
 * Multi-step registration form component that handles loading, submission, and confirmation states
 */
export function RegistrationForm() {
  const [state, formAction, isPending] = useActionState(register, null);

  if (isPending) {
    return <RegistrationLoading />;
  }

  if (state?.success) {
    return <RegistrationConfirmation data={state.info} />;
  }

  return (
    <FormRoot asChild>
      <form
        action={!isPending ? formAction : undefined}
        className="flex max-w-2xl flex-col gap-6"
      >
        <div className="flex flex-col gap-2">
          <fieldset className="grid-cols-auto grid gap-x-6 gap-y-2">
            <legend className="sr-only">Personal information</legend>
            {REGISTRATION_FIELDS.map(({ label, inputProps }) => (
              <FormField key={inputProps.name} name={inputProps.name}>
                <FormLabel showOptional={!inputProps.required}>
                  {label}
                </FormLabel>
                <FormControl type="text" {...inputProps} />
                <FormMessages>
                  <FormInvalidMessages>
                    <FormMessage match="valueMissing" variant="error">
                      Please enter your {label.toLowerCase()}.
                    </FormMessage>
                    <FormMessage match="typeMismatch" variant="error">
                      Please provide a valid {label.toLowerCase()}.
                    </FormMessage>
                  </FormInvalidMessages>
                </FormMessages>
              </FormField>
            ))}
            <RegistrationFileUpload
              name="cv"
              required
              className="col-start-1"
            />
          </fieldset>
        </div>
        <div className="flex gap-2.5">
          <FormSubmit asChild>
            <Button type="submit" size="lg">
              Send
            </Button>
          </FormSubmit>
          <Button type="reset" size="lg" variant="secondary">
            Clear
          </Button>
        </div>
      </form>
    </FormRoot>
  );
}
