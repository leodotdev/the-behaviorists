import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Determine if this is a homepage form or contact/getting started form
    const isHomepageForm = 'firstName' in body;

    let emailContent;
    if (isHomepageForm) {
      emailContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone || 'Not provided'}</p>
        <p><strong>Address:</strong> ${body.address || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message || 'No message provided'}</p>
      `;
    } else {
      emailContent = `
        <h2>New Client Inquiry</h2>
        <p><strong>Child's Name:</strong> ${body.childName}</p>
        <p><strong>Parent/Caregiver:</strong> ${body.parentName}</p>
        <p><strong>Child's Date of Birth:</strong> ${body.childDOB}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Child's Diagnosis:</strong> ${body.diagnosis || 'Not provided'}</p>
        <p><strong>Insurance Provider:</strong> ${body.insurance || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message || 'No message provided'}</p>
      `;
    }

    const { data, error } = await resend.emails.send({
      from: 'The Behaviorists Website <onboarding@resend.dev>',
      to: ['hello@the-behaviorists.com'],
      subject: isHomepageForm ? 'New Contact Form Submission' : 'New Client Inquiry',
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
