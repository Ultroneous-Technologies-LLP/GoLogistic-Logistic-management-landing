import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

import { ContactEmailMessageEnum, ContactEmailTextEnum } from "./enum";

interface ContactData {
  yourName: string;
  email: string;
  phoneNumber: string;
  city: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const data: ContactData = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
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

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
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
