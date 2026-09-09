import { z } from "zod";

export const partnerFormSchema = z.object({
  name: z.string().trim().min(2, "Enter your name or alias"),
  contact: z.string().trim().min(3, "How can we reach you?"),
  project: z.string().trim().min(2, "Enter your project or organisation"),
  role: z.string().trim().min(2, "Enter your role"),
  link: z
    .string()
    .trim()
    .refine((value) => value.length === 0 || z.url().safeParse(value).success, {
      error: "Enter a valid URL",
    }),
  message: z.string().trim().min(10, "Tell us a bit more (10+ characters)"),
});

export type PartnerFormValues = z.infer<typeof partnerFormSchema>;

export const PARTNER_FORM_DEFAULTS: PartnerFormValues = {
  name: "",
  contact: "",
  project: "",
  role: "",
  link: "",
  message: "",
};
