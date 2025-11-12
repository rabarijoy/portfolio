'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Mail, Linkedin, Github } from 'lucide-react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

export function Contact() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '', // Anti-spam field
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const validateField = (name: string, value: string) => {
    let error = '';
    if (name === 'name' && !value.trim()) {
      error = 'Le nom est requis';
    } else if (name === 'email') {
      if (!value.trim()) {
        error = 'L\'email est requis';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = 'Format d\'email invalide';
      }
    } else if (name === 'message' && !value.trim()) {
      error = 'Le message est requis';
    } else if (name === 'message' && value.trim().length < 10) {
      error = 'Le message doit contenir au moins 10 caractères';
    }
    return error;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (touched[name] && errors[name]) {
      const error = validateField(name, value);
      setErrors({ ...errors, [name]: error });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: { [key: string]: string } = {};
    Object.keys(formData).forEach(key => {
      if (key !== 'honeypot') {
        const error = validateField(key, formData[key as keyof typeof formData]);
        if (error) newErrors[key] = error;
      }
    });
    
    setTouched({ name: true, email: true, message: true });
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', honeypot: '' });
        setErrors({});
        setTouched({});
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <Section id="contact" background="white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <div className="flex flex-col items-center mb-4">
              <h2 className="font-ppneuebit text-[50px] lg:text-[58px] leading-[1.1] mb-2 text-gray-900">
                &lt;contact&gt;
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto font-helvetica">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Restons en contact
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-blue-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="font-helvetica font-semibold text-[15px] text-gray-900 mb-1">Email</p>
                    <a 
                      href="mailto:rabarijaonajoy@gmail.com" 
                      className="font-helvetica text-[16px] text-blue-accent hover:text-blue-600 transition-colors inline-flex items-center gap-2 group"
                    >
                      <span>rabarijaonajoy@gmail.com</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <path d="M7 17L17 7M7 7h10v10"/>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Linkedin size={20} className="text-blue-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="font-helvetica font-semibold text-[15px] text-gray-900 mb-1">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/joyrabari" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-helvetica text-[16px] text-blue-accent hover:text-blue-600 transition-colors inline-flex items-center gap-2 group"
                    >
                      <span>linkedin.com/in/joyrabari</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <path d="M7 17L17 7M7 7h10v10"/>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Github size={20} className="text-blue-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="font-helvetica font-semibold text-[15px] text-gray-900 mb-1">GitHub</p>
                    <a 
                      href="https://github.com/rabarijoy" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-helvetica text-[16px] text-blue-accent hover:text-blue-600 transition-colors inline-flex items-center gap-2 group"
                    >
                      <span>github.com/rabarijoy</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <path d="M7 17L17 7M7 7h10v10"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-accent flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-helvetica font-semibold text-[15px] text-gray-900 mb-1">
                      {t('response_time')}
                    </p>
                    <p className="font-helvetica text-[14px] text-gray-600 leading-relaxed">
                      {t('response_time_desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field (hidden) */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <label htmlFor="name" className="block font-helvetica text-[15px] font-medium text-gray-900 mb-2">
                    {t('name')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 font-helvetica text-[15px] border rounded-xl transition-all duration-200 ${
                      errors.name && touched.name
                        ? 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:ring-2 focus:ring-blue-accent focus:border-blue-accent'
                    }`}
                    placeholder="Votre nom complet"
                  />
                  {errors.name && touched.name && (
                    <p className="mt-1.5 text-[13px] text-red-500 font-helvetica">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block font-helvetica text-[15px] font-medium text-gray-900 mb-2">
                    {t('email')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 font-helvetica text-[15px] border rounded-xl transition-all duration-200 ${
                      errors.email && touched.email
                        ? 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:ring-2 focus:ring-blue-accent focus:border-blue-accent'
                    }`}
                    placeholder="votre@email.com"
                  />
                  {errors.email && touched.email && (
                    <p className="mt-1.5 text-[13px] text-red-500 font-helvetica">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block font-helvetica text-[15px] font-medium text-gray-900 mb-2">
                    {t('message')} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 font-helvetica text-[15px] border rounded-xl transition-all duration-200 resize-none ${
                      errors.message && touched.message
                        ? 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:ring-2 focus:ring-blue-accent focus:border-blue-accent'
                    }`}
                    placeholder="Décrivez votre projet en détail..."
                  />
                  {errors.message && touched.message && (
                    <p className="mt-1.5 text-[13px] text-red-500 font-helvetica">{errors.message}</p>
                  )}
                  {formData.message && !errors.message && (
                    <p className="mt-1.5 text-[13px] text-gray-500 font-helvetica">
                      {formData.message.length} caractère{formData.message.length > 1 ? 's' : ''}
                    </p>
                  )}
                </div>

                {status === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                    {t('success')}
                  </div>
                )}

                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {t('error')}
                  </div>
                )}

                <Button
                  type="submit"
                  fullWidth
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? t('sending') : t('send')}
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

