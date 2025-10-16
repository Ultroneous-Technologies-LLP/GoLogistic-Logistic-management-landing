import { BUTTON_VARIANT } from "@/constant";

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
  [key: string]: string | undefined;
}

export interface ContactFormProps {
  formButton: {
    variant: BUTTON_VARIANT
    label: string;
    ariaLabel: string;
  };
}

interface ContactDetails {
  id: number;
  title: string;
  link: string;
  ariaLabel: string;
}

interface FormButton {
  variant: BUTTON_VARIANT
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
