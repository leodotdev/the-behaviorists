'use client';

import { useState } from 'react';
import { IconLoader } from '@tabler/icons-react';

interface ContactFormProps {
  variant?: 'homepage' | 'contact' | 'getting-started';
}

export default function ContactForm({ variant = 'contact' }: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setMessage({ type: 'success', text: 'Thank you! We\'ll be in touch soon.' });
      e.currentTarget.reset();
    } catch {
      setMessage({ type: 'error', text: 'Something went wrong. Please try calling us instead.' });
    } finally {
      setLoading(false);
    }
  };

  if (variant === 'homepage') {
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
        />

        {message && (
          <div className={`p-4 rounded-lg ${message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
            {message.text}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {loading && <IconLoader className="animate-spin" size={20} />}
          {loading ? 'Sending...' : 'Submit'}
        </button>
      </form>
    );
  }

  // Contact and Getting Started form variant
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="childName"
        placeholder="Child's Name"
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
      />
      <input
        type="text"
        name="parentName"
        placeholder="Parent/Caregiver's Name"
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
      />
      <input
        type="date"
        name="childDOB"
        placeholder="Child's Date of Birth"
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
      />
      <input
        type="text"
        name="diagnosis"
        placeholder="Child's Diagnosis"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
      />
      <input
        type="text"
        name="insurance"
        placeholder="Insurance Provider Name"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
      />
      <textarea
        name="message"
        placeholder="Message"
        rows={4}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
      />

      {message && (
        <div className={`p-4 rounded-lg ${message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
          {message.text}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {loading && <IconLoader className="animate-spin" size={20} />}
        {loading ? 'Sending...' : 'Submit'}
      </button>
    </form>
  );
}
