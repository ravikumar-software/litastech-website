import { Resend } from "resend";

export async function POST(request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return Response.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    const { name, company, email, phone, service, message } =
      await request.json();

    if (!name || !email || !message) {
      return Response.json(
        {
          success: false,
          message: "Name, email and message are required.",
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
        <h2>New Website Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || "-"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Service:</strong> ${service || "-"}</p>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);

      return Response.json(
        {
          success: false,
          message: "Failed to send enquiry.",
        },
        { status: 500 },
      );
    }

    return Response.json({
      success: true,
      message: "Enquiry sent successfully.",
      data,
    });
  } catch (error) {
    console.error("Contact API Error:", error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 },
    );
  }
}
