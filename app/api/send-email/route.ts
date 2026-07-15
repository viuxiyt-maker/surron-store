import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Dane zamówienia:", body);

const email = await resend.emails.send({
  from: "potwierdzenie@surronzone.pl",
  to: body.email,
      subject: "Nowe zamówienie Surron Light Bee 2",
      html: `
        <h1>Nowe zamówienie 🚀</h1>

        <p><b>Imię:</b> ${body.name}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Telefon:</b> ${body.phone}</p>

        <p><b>Ulica:</b> ${body.street}</p>
        <p><b>Miasto:</b> ${body.city}</p>

        <h2>Surron Light Bee 2</h2>
        <p>29 999 zł</p>
      `,
    });

    console.log("Resend:", email);

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    console.error("Błąd Resend:", error);

    return NextResponse.json(
      {
        success:false,
      },
      {
        status:500,
      }
    );
  }
}