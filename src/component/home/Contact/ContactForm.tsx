/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Button from "@/component/common/Button";
import { CONTACT } from "@/utils/api-routes";

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
}

const ContactForm = () => {
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

    !formData.yourName.trim() && (tempErrors.yourName = "Name is required");

    !formData.email && (tempErrors.email = "Email is required");
    formData.email &&
      !/\S+@\S+\.\S+/.test(formData.email) &&
      (tempErrors.email = "Invalid email");

    !formData.phoneNumber &&
      (tempErrors.phoneNumber = "Phone number is required");
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
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-6 gap-y-7">
      {/* Name */}
      <label htmlFor="yourName" className="sr-only">
        Your Name*
      </label>
      <div className="relative">
        <input
          className="placeholder:text-black w-full py-4.5 px-6.5 border border-[#949494] text-lg text-[#949494] focus:outline-0"
          placeholder="Your name*"
          id="yourName"
          name="yourName"
          type="text"
          value={formData.yourName}
          onChange={handleChange}
        />
        {errors.yourName && (
          <p className="absolute left-0 top-full mt-1 text-red-500 text-sm">
            {errors.yourName}
          </p>
        )}
      </div>

      {/* Email */}
      <label htmlFor="email" className="sr-only">
        Email*
      </label>
      <div className="relative">
        <input
          className="placeholder:text-black w-full py-4.5 px-6.5 border border-[#949494] text-lg text-[#949494] focus:outline-0"
          placeholder="Email*"
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <p className="absolute left-0 top-full mt-1  text-red-500 text-sm">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <label htmlFor="phoneNumber" className="sr-only">
        Phone Number*
      </label>
      <div className="relative">
        <input
          className="placeholder:text-black w-full py-4.5 px-6.5 border border-[#949494] text-lg text-[#949494] focus:outline-0"
          placeholder="Phone Number*"
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        {errors.phoneNumber && (
          <p className="absolute left-0 top-full mt-1  text-red-500 text-sm">
            {errors.phoneNumber}
          </p>
        )}
      </div>

      {/* City */}
      <label htmlFor="city" className="sr-only">
        City*
      </label>
      <div className="relative">
        <input
          className="placeholder:text-black w-full py-4.5 px-6.5 border border-[#949494] text-lg text-[#949494] focus:outline-0"
          placeholder="City*"
          id="city"
          name="city"
          type="text"
          value={formData.city}
          onChange={handleChange}
        />
        {errors.city && (
          <p className="absolute left-0 top-full mt-1  text-red-500 text-sm">
            {errors.city}
          </p>
        )}
      </div>

      {/* Message */}
      <label htmlFor="message" className="sr-only">
        Your Message
      </label>
      <div className="col-span-2 relative">
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
          <p className="absolute left-0 top-full mt-1  text-red-500 text-sm">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <div className="col-span-2">
        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          className="max-w-45.5 !w-full py-4 px-7.5 rounded-lg text-sm/snug"
        >
          {loading ? "Sending..." : "Submit Message"}
        </Button>
        {success && <p className="text-green-600 mt-2">{success}</p>}
      </div>
    </form>
  );
};

export default ContactForm;
