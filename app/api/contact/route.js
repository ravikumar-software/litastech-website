import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, company, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: "Name, email and enquiry message are required.",
        },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Litas Tech Website <onboarding@resend.dev>",
      to: ["ravikumarsoftware18@gmail.com"],
      replyTo: email,
      subject: `New Website Enquiry - ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b;">
          <h2 style="color: #0f172a;">
            New Enquiry from Litas Tech Website
          </h2>

          <hr />

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Company:</strong> ${company || "Not provided"}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Phone:</strong> ${phone || "Not provided"}
          </p>

          <p>
            <strong>Service Required:</strong> ${service || "Not specified"}
          </p>

          <h3>Enquiry</h3>

          <p style="white-space: pre-wrap;">
            ${message}
          </p>

          <hr />

          <p style="font-size: 12px; color: #64748b;">
            This enquiry was submitted through the Litas Tech website.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error: "Unable to send enquiry email.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry sent successfully.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong while submitting the enquiry.",
      },
      { status: 500 },
    );
  }
}
