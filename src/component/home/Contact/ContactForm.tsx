"use client";
import { useState, ChangeEvent, FormEvent, FC } from "react";
import Button from "@/component/common/Button";

interface FormData {
  yourName: string;
  email: string;
  phoneNumber: string;
  city: string;
  message: string;
}

interface FormErrors {
  yourName?: string;
  email?: string;
  phoneNumber?: string;
  city?: string;
  message?: string;
  [key: string]: string | undefined;
}

interface ContactFormProps {
  formButton: {
    variant: "contained" | "outlined";
    label: string;
    ariaLabel: string;
  };
}

const formFields: {
  id: keyof FormData;
  label: string;
  placeholder: string;
  type: string;
}[] = [
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

const ContactForm: FC<ContactFormProps> = ({ formButton }) => {
  const [formData, setFormData] = useState<FormData>({
    yourName: "",
    email: "",
    phoneNumber: "",
    city: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // handle input change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // validation
  const validate = (): boolean => {
    const tempErrors: FormErrors = {};

    if (!formData.yourName.trim()) tempErrors.yourName = "Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email";
    }
    if (!formData.phoneNumber) {
      tempErrors.phoneNumber = "Phone number is required";
    } else if (!/^[0-9]{7,15}$/.test(formData.phoneNumber)) {
      tempErrors.phoneNumber = "Enter a valid phone number";
    }
    if (!formData.city.trim()) tempErrors.city = "City is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // submit handler
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSuccess("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess("Message sent successfully ✅");
        setFormData({
          yourName: "",
          email: "",
          phoneNumber: "",
          city: "",
          message: "",
        });
        setErrors({});
      } else {
        setSuccess("Something went wrong ❌");
      }
    } catch (error) {
      setSuccess("Error sending message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-y-4 xl:grid-cols-2 xl:gap-x-6 xl:gap-y-7"
    >
      {formFields.map(({ id, label, placeholder, type }) => (
        <div key={id} className="relative">
          <label htmlFor={id} className="sr-only">
            {label}
          </label>
          <input
            className="placeholder:text-black w-full py-3 px-6 xl:py-4.5 xl:px-6.5 border border-[#949494] text-lg text-[#949494] focus:outline-0"
            placeholder={placeholder}
            id={id}
            name={id}
            type={type}
            value={formData[id]}
            onChange={handleChange}
          />
          {errors[id] && (
            <p className="absolute left-0 top-full mt-1 text-red-500 text-sm">
              {errors[id]}
            </p>
          )}
        </div>
      ))}
      <div className="relative col-span-1 xl:col-span-2">
        <label htmlFor="message" className="sr-only">
          Your Message
        </label>
        <textarea
          className="placeholder:text-black py-4.5 px-5 border border-[#949494] text-lg text-[#949494] focus:outline-0 w-full"
          placeholder="Your Message"
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && (
          <p className="absolute left-0 top-full mt-1 text-red-500 text-sm">
            {errors.message}
          </p>
        )}
      </div>
      <div className="col-span-1 xl:col-span-2">
        <Button
          type="submit"
          variant={formButton.variant}
          disabled={loading}
          className="max-w-45.5 !w-full py-3 px-6 xl:py-4 xl:px-7.5 rounded-lg text-sm/snug"
          aria-label={formButton.ariaLabel}
        >
          {loading ? "Sending..." : formButton.label}
        </Button>
        {success && <p className="text-green-600 mt-2">{success}</p>}
      </div>
    </form>
  );
};

export default ContactForm;
