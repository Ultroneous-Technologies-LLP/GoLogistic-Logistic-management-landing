import { ButtonVariant } from "@/types";

import { IconTitleEnum } from "./enum";

export type IconTitle = IconTitleEnum.EMAIL | IconTitleEnum.CALL_US;

export interface FormData {
  city: string;
  email: string;
  message: string;
  phoneNumber: string;
  yourName: string;
}

export interface FormFields {
  id: keyof FormData;
  label: string;
  placeholder: string;
  type: string;
}

export interface FormErrors {
  city?: string;
  email?: string;
  message?: string;
  phoneNumber?: string;
  yourName?: string;
}

interface FormButton {
  ariaLabel: string;
  label: string;
  variant: ButtonVariant;
}

export interface ContactFormProps {
  formButton: FormButton;
}

interface ContactDetails {
  ariaLabel: string;
  id: number;
  link: string;
  title: IconTitleEnum;
}

export interface ContactSectionProps {
  contactDetails: ContactDetails[];
  description: string;
  formButton: FormButton;
  longTitle: string;
  title: string;
}
