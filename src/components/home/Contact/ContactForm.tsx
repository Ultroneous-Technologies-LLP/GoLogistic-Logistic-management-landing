/* eslint-disable @typescript-eslint/naming-convention */
"use client";

import { useState, ChangeEvent, FormEvent, FC } from "react";

import { CONTACT } from "@/utils/api-routes";

import { FORM_FIELDS } from "./constant";
import { ContactFormeTypeEnum, ErrorOrSuccessMessageEnum, TempErrorsEnum } from "./enum";
import { FormErrors, FormData } from "./types";

const EMPTY_ERROR_COUNT = 0;

const ContactForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    yourName: "",
    email: "",
    phoneNumber: "",
    city: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState<ErrorOrSuccessMessageEnum | "">("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};

    if (!formData.yourName.trim()) {
      tempErrors.yourName = TempErrorsEnum.NAME_IS_REQUIRED;
    }

    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = TempErrorsEnum.INVALID_EMAIL;
    }

    if (!formData.phoneNumber) {
      tempErrors.phoneNumber = "Phone number is required";
    } else if (!/^[0-9]{7,15}$/.test(formData.phoneNumber)) {
      tempErrors.phoneNumber = TempErrorsEnum.INVALID_PHONE_NUMBER;
    }

    if (!formData.city.trim()) {
      tempErrors.city = TempErrorsEnum.CITY_IS_REQUIRED;
    }

    if (!formData.message.trim()) {
      tempErrors.message = TempErrorsEnum.MESSAGE_IS_REQUIRED;
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === EMPTY_ERROR_COUNT;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsLoading(true);
    setSuccess("");

    try {
      const res = await fetch(CONTACT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(ErrorOrSuccessMessageEnum.MESSAGE_SEND_SUCCESS_FULL);
        setFormData({
          yourName: "",
          email: "",
          phoneNumber: "",
          city: "",
          message: "",
        });
        setErrors({});
      } else {
        setSuccess(ErrorOrSuccessMessageEnum.SOMETHING_WENT_WRONG);
      }
    } catch (error) {
      console.error(error);
      setSuccess(ErrorOrSuccessMessageEnum.ERROR_SENDING_MESSAGE);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="grid gap-y-4 xl:grid-cols-2 xl:gap-x-6 xl:gap-y-7"
      onSubmit={(e) => void handleSubmit(e)}
    >
      {FORM_FIELDS.map(({ id, label, placeholder, type }) => (
        <div className="relative" key={id}>
          <label className="sr-only" htmlFor={id}>
            {label}
          </label>
          <input
            className="border-spanish-gray text-spanish-gray w-full border px-6 py-3 text-lg placeholder:text-black focus:outline-0 xl:px-6.5 xl:py-4.5"
            id={id}
            name={id}
            onChange={handleChange}
            placeholder={placeholder}
            type={type}
            value={formData[`${id}`]}
          />
          {errors[`${id}`] && (
            <p className="absolute top-full left-0 mt-1 text-sm text-red-500">{errors[`${id}`]}</p>
          )}
        </div>
      ))}
      <div className="relative col-span-1 xl:col-span-2">
        <label className="sr-only" htmlFor="message">
          {ContactFormeTypeEnum.YOUR_MESSAGE}
        </label>
        <textarea
          className="border-spanish-gray text-spanish-gray w-full border px-5 py-4.5 text-lg placeholder:text-black focus:outline-0"
          id="message"
          name="message"
          onChange={handleChange}
          placeholder={ContactFormeTypeEnum.YOUR_MESSAGE}
          rows={3}
          value={formData.message}
        />
        {errors.message && (
          <p className="absolute top-full left-0 mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>
      <div className="col-span-1 xl:col-span-2">
        <button
          aria-label={ContactFormeTypeEnum.SUBMIT_CONTACT_FORM}
          className="hover:border-light-silver w-full max-w-47.5 cursor-pointer rounded-lg border border-transparent bg-black px-6 py-3 text-sm/snug font-semibold text-white transition-all duration-500 ease-out hover:bg-white hover:text-black hover:ease-in xl:px-7.5 xl:py-4"
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? ContactFormeTypeEnum.SENDING : ContactFormeTypeEnum.SUBMIT_MESSAGE}
        </button>
        {success && <p className="mt-2 text-green-600">{success}</p>}
      </div>
    </form>
  );
};

export default ContactForm;
