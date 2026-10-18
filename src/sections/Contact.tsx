import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { personalInfo } from '../data/portfolioData';
import {
  Mail,
  Send,
  Linkedin,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Info,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<'idle' | 'success'>('idle');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message content is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Provide real, immediate usability: create pre-filled mailto action
    // and show client-side confirmation with clear deployment note
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedStatus('success');

      // Trigger user's email client with pre-filled content
      const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
      const body = encodeURIComponent(
        `Hi Zarbab,\n\nName: ${formData.fullName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${personalInfo.contactLinks.email}?subject=${subject}&body=${body}`;
    }, 400);
  };

  const handleReset = () => {
    setFormData({ fullName: '', email: '', subject: '', message: '' });
    setSubmittedStatus('idle');
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#080B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="GET IN TOUCH"
          heading="Let's Start a Conversation."
          description="Interested in business development, Upwork client acquisition, digital marketing agency growth, or technology-related business opportunities? I'd be happy to connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Info & Professional Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-[#111827] border border-[#263246] rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">
                Direct Contact Details
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                Open for business development management roles, agency growth consulting, and international client acquisition contracts.
              </p>

              <div className="space-y-4">
                {/* Email Address */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#172033] border border-[#263246]">
                  <div className="p-2 rounded-lg bg-[#3B82F6]/10 text-[#3B82F6]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono uppercase text-[#64748B]">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${personalInfo.contactLinks.email}`}
                      className="block text-sm font-semibold text-[#F8FAFC] hover:text-[#22D3EE] truncate transition-colors"
                    >
                      {personalInfo.contactLinks.email}
                    </a>
                  </div>
                </div>

                {/* LinkedIn Profile with View Linkedin Profile Button */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#172033] border border-[#263246]">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2 rounded-lg bg-[#0A66C2]/15 text-[#0A66C2]">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-[#64748B]">
                        LinkedIn Profile
                      </span>
                      <a
                        href={personalInfo.contactLinks.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm font-semibold text-[#F8FAFC] hover:text-[#22D3EE] transition-colors"
                      >
                        Zarbab Zia
                      </a>
                    </div>
                  </div>
                  <a
                    href={personalInfo.contactLinks.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#0A66C2] hover:bg-[#004182] rounded-lg transition-all shadow-sm cursor-pointer whitespace-nowrap"
                  >
                    <span>View Linkedin Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* WhatsApp Direct Contact Button */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#172033] border border-[#263246]">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2 rounded-lg bg-[#25D366]/15 text-[#25D366]">
                      {/* Authentic WhatsApp SVG Icon */}
                      <svg
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.19 8.19 0 01-1.26-4.37c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.23.25-.88.86-.88 2.1 0 1.23.9 2.43 1.03 2.6.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.12-.23-.19-.48-.31z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-[#64748B]">
                        WhatsApp Direct
                      </span>
                      <a
                        href={personalInfo.contactLinks.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm font-semibold text-[#F8FAFC] hover:text-[#25D366] transition-colors"
                      >
                        {personalInfo.contactLinks.whatsappNumber}
                      </a>
                    </div>
                  </div>
                  <a
                    href={personalInfo.contactLinks.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#1EBE5D] rounded-lg transition-all shadow-sm cursor-pointer whitespace-nowrap"
                  >
                    <span>Chat on WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Development Mode Notice */}
            <div className="p-4 rounded-xl bg-[#111827] border border-[#263246] flex items-start gap-3 text-xs text-[#94A3B8]">
              <Info className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#F8FAFC] font-semibold">Form Integration Note: </strong>
                Submitting this form prepares a pre-filled email directly addressed to{' '}
                <code className="text-[#22D3EE]">{personalInfo.contactLinks.email}</code>. To route via a headless backend (e.g. Resend, SendGrid, or Formspree), connect your endpoint without exposing private keys.
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#111827] border border-[#263246] rounded-2xl p-6 sm:p-8 shadow-xl"
          >
            {submittedStatus === 'success' ? (
              <div className="py-12 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#F8FAFC]">
                  Message Prepared & Mail Client Opened
                </h3>
                <p className="mt-2 text-sm text-[#94A3B8] max-w-md">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. Your email client was triggered with your message. If it didn't open automatically, you can send directly to{' '}
                  <span className="text-[#22D3EE] font-medium">{personalInfo.contactLinks.email}</span>.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 px-5 py-2.5 text-xs font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-xl transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-1.5"
                    >
                      Full Name <span className="text-[#3B82F6]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="e.g. Alex Johnson"
                      className={`w-full px-4 py-3 rounded-xl bg-[#080B14] border text-[#F8FAFC] placeholder-[#64748B] text-sm focus:outline-none focus:ring-1 focus:ring-[#3B82F6] transition-all ${
                        errors.fullName
                          ? 'border-red-500/80 focus:border-red-500'
                          : 'border-[#263246] focus:border-[#3B82F6]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-1.5"
                    >
                      Email Address <span className="text-[#3B82F6]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#080B14] border text-[#F8FAFC] placeholder-[#64748B] text-sm focus:outline-none focus:ring-1 focus:ring-[#3B82F6] transition-all ${
                        errors.email
                          ? 'border-red-500/80 focus:border-red-500'
                          : 'border-[#263246] focus:border-[#3B82F6]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-1.5"
                  >
                    Subject <span className="text-[#3B82F6]">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="e.g. Upwork Business Development Partnership"
                    className={`w-full px-4 py-3 rounded-xl bg-[#080B14] border text-[#F8FAFC] placeholder-[#64748B] text-sm focus:outline-none focus:ring-1 focus:ring-[#3B82F6] transition-all ${
                      errors.subject
                        ? 'border-red-500/80 focus:border-red-500'
                        : 'border-[#263246] focus:border-[#3B82F6]'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-1.5"
                  >
                    Message <span className="text-[#3B82F6]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Briefly outline your requirements, company profile, or opportunity details..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#080B14] border text-[#F8FAFC] placeholder-[#64748B] text-sm focus:outline-none focus:ring-1 focus:ring-[#3B82F6] transition-all resize-y ${
                      errors.message
                        ? 'border-red-500/80 focus:border-red-500'
                        : 'border-[#263246] focus:border-[#3B82F6]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] disabled:bg-[#3B82F6]/50 rounded-xl transition-all shadow-lg shadow-blue-900/30 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
