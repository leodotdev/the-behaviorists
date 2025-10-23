'use client';

import { useState } from 'react';
import { IconLoader } from '@tabler/icons-react';

export default function JoinTeamForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/join-team', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      setMessage({ type: 'success', text: 'Thank you for your application! We\'ll review it and be in touch soon.' });
      e.currentTarget.reset();
    } catch {
      setMessage({ type: 'error', text: 'Something went wrong. Please try emailing your application to hello@the-behaviorists.com' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="Legal First Name"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Legal Last Name"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
      </div>

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
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
      />

      <div>
        <select
          name="position"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
        >
          <option value="">Select the position you are applying to</option>
          <option value="Registered Behavior Technician">Registered Behavior Technician</option>
          <option value="BCaBA">BCaBA</option>
          <option value="BCBA">BCBA</option>
          <option value="Administrative Support">Administrative Support</option>
        </select>
      </div>

      <div>
        <p className="mb-3 font-medium">Do you have active credentials with the Behavior Analyst Certification Board?</p>
        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="credentials"
              value="Yes"
              required
              className="w-4 h-4 text-primary focus:ring-primary"
            />
            <span>Yes</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="credentials"
              value="Not at this time"
              required
              className="w-4 h-4 text-primary focus:ring-primary"
            />
            <span>Not at this time</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="credentials"
              value="N/A: I am applying for an administrative role"
              required
              className="w-4 h-4 text-primary focus:ring-primary"
            />
            <span>N/A: I am applying for an administrative role</span>
          </label>
        </div>
      </div>

      <textarea
        name="message"
        placeholder="Tell us about yourself and why you want to join our team"
        rows={5}
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
        {loading ? 'Sending Application...' : 'Submit'}
      </button>
    </form>
  );
}
