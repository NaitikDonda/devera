import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, projectType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Save to Firebase
    const contactRef = collection(db, 'contacts');
    const newContact = {
      name,
      email,
      company: company || '',
      projectType: projectType || '',
      message,
      createdAt: Timestamp.now(),
    };

    const docRef = await addDoc(contactRef, newContact);

    // Send email via Resend
    try {
      await resend.emails.send({
        from: 'Devera Contact <onboarding@resend.dev>',
        to: 'deveracrew@gmail.com',
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #008081;">New Contact Form Submission</h2>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 20px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
              ${projectType ? `<p><strong>Project Type:</strong> ${projectType}</p>` : ''}
              <p><strong>Message:</strong></p>
              <p style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">${message}</p>
            </div>
            <p style="margin-top: 20px; color: #666; font-size: 12px;">
              This message was sent from the Devera website contact form.
            </p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // Continue even if email fails - the data is saved to Firebase
    }

    return NextResponse.json(
      { id: docRef.id, message: 'Contact form submitted successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}
