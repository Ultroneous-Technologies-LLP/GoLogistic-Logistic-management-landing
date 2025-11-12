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

interface ContactDetails {
  ariaLabel: string;
  display: string;
  icon: string;
  id: number;
  link: string;
  linkTitle: string;
  type: string;
}

export interface ContactSectionProps {
  contactDetails: ContactDetails[];
  description: string;
  longTitle: string;
  title: string;
}
