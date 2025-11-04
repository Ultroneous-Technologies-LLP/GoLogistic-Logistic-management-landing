/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";

import { useState, ChangeEvent, FormEvent, FC } from "react";

import { CONTACT } from "@/utils/api-routes";

import { FORM_FIELDS } from "./constant";
import { ContactFormProps, FormErrors, FormData } from "./types";
import { ContactFormeTypeEnum } from "./enum";

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
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // validation
  const validate = (): boolean => {
    const tempErrors: FormErrors = {};

    !formData.yourName.trim() && (tempErrors.yourName = "Name is required");

    !formData.email && (tempErrors.email = "Email is required");
    formData.email && !/\S+@\S+\.\S+/.test(formData.email) && (tempErrors.email = "Invalid email");

    !formData.phoneNumber && (tempErrors.phoneNumber = "Phone number is required");
    formData.phoneNumber &&
      !/^[0-9]{7,15}$/.test(formData.phoneNumber) &&
      (tempErrors.phoneNumber = "Enter a valid phone number");

    !formData.city.trim() && (tempErrors.city = "City is required");

    !formData.message.trim() && (tempErrors.message = "Message is required");

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
      const res = await fetch(CONTACT, {
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
      console.error(error);
      setSuccess("Error sending message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-y-4 xl:grid-cols-2 xl:gap-x-6 xl:gap-y-7">
      {FORM_FIELDS.map(({ id, label, placeholder, type }) => (
        <div key={id} className="relative">
          <label htmlFor={id} className="sr-only">
            {label}
          </label>
          <input
            className="border-spanish-gray text-spanish-gray w-full border px-6 py-3 text-lg placeholder:text-black focus:outline-0 xl:px-6.5 xl:py-4.5"
            placeholder={placeholder}
            id={id}
            name={id}
            type={type}
            value={formData[id]}
            onChange={handleChange}
          />
          {errors[id] && (
            <p className="absolute top-full left-0 mt-1 text-sm text-red-500">{errors[id]}</p>
          )}
        </div>
      ))}
      <div className="relative col-span-1 xl:col-span-2">
        <label htmlFor="message" className="sr-only">
          {ContactFormeTypeEnum.YOUR_MESSAGE}
        </label>
        <textarea
          className="border-spanish-gray text-spanish-gray w-full border px-5 py-4.5 text-lg placeholder:text-black focus:outline-0"
          placeholder={ContactFormeTypeEnum.YOUR_MESSAGE}
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && (
          <p className="absolute top-full left-0 mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>
      <div className="col-span-1 xl:col-span-2">
        <button
          type="submit"
          disabled={loading}
          className="hover:border-light-silver w-full max-w-47.5 cursor-pointer rounded-lg border border-transparent bg-black px-6 py-3 text-sm/snug font-semibold text-white transition-all duration-500 ease-out hover:bg-white hover:text-black hover:ease-in xl:px-7.5 xl:py-4"
          aria-label={formButton.ariaLabel}
        >
          {loading ? ContactFormeTypeEnum.SENDING : formButton.label}
        </button>
        {success && <p className="mt-2 text-green-600">{success}</p>}
      </div>
    </form>
  );
};

export default ContactForm;
