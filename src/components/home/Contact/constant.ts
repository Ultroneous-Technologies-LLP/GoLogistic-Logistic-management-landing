import { FormFields } from "./types";

export const FORM_FIELDS: FormFields[] = [
  {
    id: "yourName",
    label: "Your Name*",
    placeholder: "Your name*",
    type: "text",
  },
  { id: "email", label: "Email*", placeholder: "Email*", type: "email" },
  {
    id: "phoneNumber",
    label: "Phone Number*",
    placeholder: "Phone Number*",
    type: "tel",
  },
  { id: "city", label: "City*", placeholder: "City*", type: "text" },
];
