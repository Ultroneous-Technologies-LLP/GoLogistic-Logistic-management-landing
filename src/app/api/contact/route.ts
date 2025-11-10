import { NextResponse, type NextRequest } from "next/server";
import nodemailer from "nodemailer";

import { ContactEmailMessageEnum, ContactEmailTextEnum } from "./enum";
import { ContactData } from "./types";

export const isContactData = (value: unknown): value is ContactData => {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const contactCandidate = value as Record<string, unknown>;

  const { city, email, message, phoneNumber, yourName } = contactCandidate;

  const isValid =
    typeof city === "string" &&
    typeof email === "string" &&
    typeof message === "string" &&
    typeof phoneNumber === "string" &&
    typeof yourName === "string";

  return isValid;
};

export async function POST(req: NextRequest): Promise<NextResponse> {
  const json: unknown = await req.json();

  if (!isContactData(json)) {
    return NextResponse.json({ success: false, message: "Invalid request body" }, { status: 400 });
  }

  const data: ContactData = json;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER || "",
      pass: process.env.EMAIL_PASS || "",
    },
  });

  const htmlContent = `
    <h2>${ContactEmailTextEnum.TITLE}</h2>
    <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
      <tr><td><strong>Name</strong></td><td>${data.yourName}</td></tr>
      <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
      <tr><td><strong>Phone Number</strong></td><td>${data.phoneNumber}</td></tr>
      <tr><td><strong>City</strong></td><td>${data.city}</td></tr>
      <tr><td><strong>Message</strong></td><td>${data.message}</td></tr>
    </table>
  `;

  try {
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || "",
      subject: ContactEmailTextEnum.SUBJECT,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: ContactEmailMessageEnum.SUCCESS_MESSAGE,
    });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, message: ContactEmailMessageEnum.ERROR_MESSAGE },
      { status: 500 }
    );
  }
}
