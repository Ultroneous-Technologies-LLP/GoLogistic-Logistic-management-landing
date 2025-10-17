import { ButtonVariant } from "@/types";

export type IconTitle = "Email" | "Call Us";

export interface FormFields {
  id: keyof FormData;
  label: string;
  placeholder: string;
  type: string;
}

export interface FormData {
  yourName: string;
  email: string;
  phoneNumber: string;
  city: string;
  message: string;
}

export interface FormErrors {
  yourName?: string;
  email?: string;
  phoneNumber?: string;
  city?: string;
  message?: string;
}

interface FormButton {
  variant: ButtonVariant;
  label: string;
  ariaLabel: string;
}

export interface ContactFormProps {
  formButton: FormButton;
}

interface ContactDetails {
  id: number;
  title: string;
  link: string;
  ariaLabel: string;
}

interface FormButton {
  variant: ButtonVariant;
  label: string;
  ariaLabel: string;
}

export interface ContactSectionProps {
  title: string;
  longTitle: string;
  description: string;
  contactDetails: ContactDetails[];
  formButton: FormButton;
}
