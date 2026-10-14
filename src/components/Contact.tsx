import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, Clock } from 'lucide-react';

interface ContactProps {
  initialProjectType?: string;
}

const PROJECT_TYPE_OPTIONS = [
  'Technical Writing',
  'UX Writing',
  'Graphic Design',
  'UI/UX Design',
  'Content Strategy',
  'Digital Products',
  'Freelance',
  'Full-Time Opportunity',
  'Other'
];

export const Contact: React.FC<ContactProps> = ({ initialProjectType = 'Technical Writing' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: initialProjectType,
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync prop changes if user clicked freelance or full-time button
  React.useEffect(() => {
    if (initialProjectType) {
      setFormData((prev) => ({ ...prev, projectType: initialProjectType }));
    }
  }, [initialProjectType]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please include details about your project or role';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please write at least 15 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // CONFIGURATION NOTE:
    // Replace this simulation with your actual form backend endpoint:
    // e.g. Formspree, Formkeep, Netlify Forms, or your custom server API:
    // fetch('[CONTACT FORM ENDPOINT]', { method: 'POST', body: JSON.stringify(formData) })

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-px bg-[#2DD4BF]" aria-hidden="true" />
              <span className="text-xs font-mono font-semibold tracking-widest text-[#2DD4BF] uppercase">
                Initiate A Conversation
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
              LET'S CREATE<br />
              <span className="text-[#2DD4BF]">SOMETHING</span><br />
              MEANINGFUL.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 leading-relaxed mb-8">
              Have a documentation challenge, design project, UX content requirement, or freelance opportunity?
              <br /><br />
              Let's talk.
            </p>

            {/* Direct Channel Details */}
            <div className="space-y-4 pt-6 border-t border-slate-800/80 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#0F172A] border border-slate-800 text-[#2DD4BF]">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="text-slate-500 block">Direct Email</span>
                  <span className="text-white font-medium">[EMAIL] (sparrowhunt88@gmail.com)</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#0F172A] border border-slate-800 text-[#2DD4BF]">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="text-slate-500 block">Location & Mobility</span>
                  <span className="text-white font-medium">India · Available for Global Engagements</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#0F172A] border border-slate-800 text-[#2DD4BF]">
                  <Clock size={16} />
                </div>
                <div>
                  <span className="text-slate-500 block">Response Time</span>
                  <span className="text-white font-medium">Within 24 Business Hours</span>
                </div>
              </div>
            </div>

            {/* Endpoint note */}
            <div className="mt-8 p-3.5 rounded-xl bg-[#0F172A] border border-slate-800/80 text-[11px] font-mono text-slate-400">
              <span className="text-[#2DD4BF] font-semibold">Integration Notice:</span> Form is pre-configured with client-side verification. Attach your endpoint URL at <code className="text-slate-300">[CONTACT FORM ENDPOINT]</code>.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0F172A] border border-slate-800 p-6 sm:p-10 shadow-2xl relative">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#2DD4BF]/10 border border-[#2DD4BF] text-[#2DD4BF] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Message Sent Successfully
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry regarding <span className="text-[#2DD4BF] font-mono">{formData.projectType}</span> has been received. I will review and reply within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        projectType: 'Technical Writing',
                        message: ''
                      });
                    }}
                    className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 text-slate-200 text-xs font-mono hover:bg-slate-700 transition-colors"
                  >
                    <span>Send Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                        Your Name <span className="text-[#2DD4BF]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Maya Patel"
                        className={`w-full px-4 py-3 rounded-xl bg-[#0B1220] border text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-slate-800 focus:border-[#2DD4BF]'
                        }`}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                          <AlertCircle size={12} />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                        Email Address <span className="text-[#2DD4BF]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. maya@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#0B1220] border text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-slate-800 focus:border-[#2DD4BF]'
                        }`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                          <AlertCircle size={12} />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Company */}
                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                        Company / Organization
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Corp / Studio"
                        className="w-full px-4 py-3 rounded-xl bg-[#0B1220] border border-slate-800 focus:border-[#2DD4BF] text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Project Type Dropdown */}
                    <div>
                      <label htmlFor="contact-project-type" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                        Project Type <span className="text-[#2DD4BF]">*</span>
                      </label>
                      <select
                        id="contact-project-type"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0B1220] border border-slate-800 focus:border-[#2DD4BF] text-sm text-white focus:outline-none transition-colors"
                      >
                        {PROJECT_TYPE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#0B1220] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 font-medium">
                        Project Details / Opportunity Scope <span className="text-[#2DD4BF]">*</span>
                      </label>
                      <span className="text-[11px] font-mono text-slate-500">
                        {formData.message.length} chars
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your timeline, current documentation challenges, design requirements, or team setup..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#0B1220] border text-sm text-white placeholder-slate-600 focus:outline-none transition-colors resize-y ${
                        errors.message
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-slate-800 focus:border-[#2DD4BF]'
                      }`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                        <AlertCircle size={12} />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#2DD4BF] hover:bg-[#34E0C4] text-[#0B1220] font-bold text-sm tracking-wider uppercase transition-all duration-200 shadow-lg shadow-[#2DD4BF]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2DD4BF] disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
