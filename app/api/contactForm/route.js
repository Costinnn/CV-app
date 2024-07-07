// sending email 2/2

import { transporter } from "@/lib/nodemailer";
import { mailOptions } from "@/lib/nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const reqData = await req.json();

    await transporter.sendMail({
      ...mailOptions,
      subject: `CV-gratis.ro - mesaj`,
      text: "",
      html: `
      <p><b>${reqData.name}<b/>, ${reqData.email}, a trimis un mesaj.</p>
      <p>${reqData.message}</p>`,
    });

    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: `SEND_EMAIL_ERROR ${err}` }, { status: 500 });
  }
}
