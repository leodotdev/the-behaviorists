import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const emailContent = `
      <h2>New Job Application</h2>
      <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Phone:</strong> ${body.phone}</p>
      <p><strong>Position:</strong> ${body.position}</p>
      <p><strong>BACB Credentials:</strong> ${body.credentials}</p>
      <p><strong>Message:</strong></p>
      <p>${body.message || 'No message provided'}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: 'The Behaviorists Careers <onboarding@resend.dev>',
      to: ['hello@the-behaviorists.com'],
      subject: `New Job Application: ${body.position}`,
      html: emailContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
