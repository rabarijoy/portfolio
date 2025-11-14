'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Mail, Linkedin, Github, Phone, CheckCircle, XCircle } from 'lucide-react';
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
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validateField = (name: string, value: string) => {
    let error = '';
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        error = 'L\'email est requis';
      } else if (!emailRegex.test(value)) {
        error = 'Format d\'email invalide';
      }
    } else if (name === 'name') {
      if (!value.trim()) {
        error = 'Le nom est requis';
      } else if (value.trim().length < 2) {
        error = 'Le nom doit contenir au moins 2 caractères';
      }
    } else if (name === 'message') {
      if (!value.trim()) {
        error = 'Le message est requis';
      } else if (value.trim().length < 10) {
        error = 'Le message doit contenir au moins 10 caractères';
      }
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
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors({ ...errors, [name]: error });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <Section id="contact" background="white" className="py-[120px] lg:py-[140px]" withSubtleSeparator>
      <div className="max-w-screen-xl mx-auto px-[20px] lg:px-[40px]">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 font-helvetica">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('info_title')}
              </h3>

              <div className="space-y-5">
                <a 
                  href="mailto:rabarijaonajoy@gmail.com" 
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-accent/10 rounded-xl flex items-center justify-center group-hover:bg-blue-accent transition-colors">
                    <Mail size={20} className="text-blue-accent group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <p className="text-blue-accent group-hover:text-blue-600 transition-colors">
                      rabarijaonajoy@gmail.com
                    </p>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/joyrabari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-accent/10 rounded-xl flex items-center justify-center group-hover:bg-blue-accent transition-colors">
                    <Linkedin size={20} className="text-blue-accent group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 mb-1">LinkedIn</p>
                    <p className="text-blue-accent group-hover:text-blue-600 transition-colors">
                      linkedin.com/in/joyrabari
                    </p>
                  </div>
                </a>

                <a 
                  href="https://github.com/rabarijoy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-accent/10 rounded-xl flex items-center justify-center group-hover:bg-blue-accent transition-colors">
                    <Github size={20} className="text-blue-accent group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 mb-1">GitHub</p>
                    <p className="text-blue-accent group-hover:text-blue-600 transition-colors">
                      github.com/rabarijoy
                    </p>
                  </div>
                </a>

                <a 
                  href="tel:+261343260892" 
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-accent/10 rounded-xl flex items-center justify-center group-hover:bg-blue-accent transition-colors">
                    <Phone size={20} className="text-blue-accent group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 mb-1">Téléphone</p>
                    <p className="text-blue-accent group-hover:text-blue-600 transition-colors">
                      +261 34 32 608 92
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-8 p-6 bg-blue-50/50 rounded-xl border border-blue-accent/20">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-blue-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{t('response_time')}</p>
                    <p className="text-gray-700 text-sm">{t('response_time_desc')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
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
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
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
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-accent focus:border-transparent transition-all ${
                      errors.name && touched.name
                        ? 'border-red-300 bg-red-50/50'
                        : 'border-gray-300 bg-white'
                    }`}
                    placeholder="Votre nom complet"
                  />
                  {errors.name && touched.name && (
                    <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                      <XCircle size={14} />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
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
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-accent focus:border-transparent transition-all ${
                      errors.email && touched.email
                        ? 'border-red-300 bg-red-50/50'
                        : 'border-gray-300 bg-white'
                    }`}
                    placeholder="votre@email.com"
                  />
                  {errors.email && touched.email && (
                    <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                      <XCircle size={14} />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
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
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-accent focus:border-transparent resize-none transition-all ${
                      errors.message && touched.message
                        ? 'border-red-300 bg-red-50/50'
                        : 'border-gray-300 bg-white'
                    }`}
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                  {errors.message && touched.message && (
                    <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                      <XCircle size={14} />
                      {errors.message}
                    </p>
                  )}
                </div>

                {status === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl flex items-center gap-2">
                    <CheckCircle size={18} />
                    {t('success')}
                  </div>
                )}

                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center gap-2">
                    <XCircle size={18} />
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
      </div>
    </Section>
  );
}

