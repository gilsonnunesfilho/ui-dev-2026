import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword", // .doc
  "application/vnd.oasis.opendocument.text", // .odt
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
];

export const registrationSchema = z.object({
  givenName: z.string().min(2, "First name is required"),
  familyName: z.string().min(2, "Last name is required"),
  email: z.email("Please enter a valid email address"),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
  address: z.string().optional(),
  cv: z
    .file()
    .refine((file) => file?.size > 0, "CV file is required")
    .refine((file) => file?.size <= MAX_FILE_SIZE, "Max file size is 5MB")
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file?.type),
      "Only .pdf, .doc, and .odt files are accepted",
    ),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;
