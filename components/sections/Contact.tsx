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
    <Section id="contact" background="white" withSubtleSeparator>
      <div className="max-w-screen-xl mx-auto px-[20px] lg:px-[40px]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="section-header">
            <div className="section-header-title">
              <h2 className="title-section">
                {t('title')}
              </h2>
            </div>
          </div>

          <div className="grid-contact">
            {/* Contact Info */}
            <div>
              <h3 className="subtitle-section">
                {t('info_title')}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <a 
                  href="mailto:rabarijaonajoy@gmail.com" 
                  className="card-contact-info"
                >
                  <div className="card-contact-icon-wrapper">
                    <Mail size={20} className="card-contact-icon" />
                  </div>
                  <div className="card-contact-content">
                    <p className="card-contact-label">Email</p>
                    <p className="card-contact-value">
                      rabarijaonajoy@gmail.com
                    </p>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/joyrabari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-contact-info"
                >
                  <div className="card-contact-icon-wrapper">
                    <Linkedin size={20} className="card-contact-icon" />
                  </div>
                  <div className="card-contact-content">
                    <p className="card-contact-label">LinkedIn</p>
                    <p className="card-contact-value">
                      linkedin.com/in/joyrabari
                    </p>
                  </div>
                </a>

                <a 
                  href="https://github.com/rabarijoy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-contact-info"
                >
                  <div className="card-contact-icon-wrapper">
                    <Github size={20} className="card-contact-icon" />
                  </div>
                  <div className="card-contact-content">
                    <p className="card-contact-label">GitHub</p>
                    <p className="card-contact-value">
                      github.com/rabarijoy
                    </p>
                  </div>
                </a>

                <a 
                  href="tel:+261343260892" 
                  className="card-contact-info"
                >
                  <div className="card-contact-icon-wrapper">
                    <Phone size={20} className="card-contact-icon" />
                  </div>
                  <div className="card-contact-content">
                    <p className="card-contact-label">Téléphone</p>
                    <p className="card-contact-value">
                      +261 34 32 608 92
                    </p>
                  </div>
                </a>
              </div>

              <div className="info-response-time">
                <div className="info-response-time-content">
                  <CheckCircle size={20} className="info-response-time-icon" />
                  <div className="info-response-time-text">
                    <p className="info-response-time-title">{t('response_time')}</p>
                    <p className="info-response-time-desc">{t('response_time_desc')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="form-container">
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
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

                <div className="form-group">
                  <label htmlFor="name" className="form-label form-label-required">
                    {t('name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-input ${errors.name && touched.name ? 'form-input-error' : ''}`}
                    placeholder="Votre nom complet"
                  />
                  {errors.name && touched.name && (
                    <p className="form-error">
                      <XCircle size={14} />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label form-label-required">
                    {t('email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-input ${errors.email && touched.email ? 'form-input-error' : ''}`}
                    placeholder="votre@email.com"
                  />
                  {errors.email && touched.email && (
                    <p className="form-error">
                      <XCircle size={14} />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label form-label-required">
                    {t('message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-textarea ${errors.message && touched.message ? 'form-textarea-error' : ''}`}
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                  {errors.message && touched.message && (
                    <p className="form-error">
                      <XCircle size={14} />
                      {errors.message}
                    </p>
                  )}
                </div>

                {status === 'success' && (
                  <div className="form-message-success">
                    <CheckCircle size={18} />
                    {t('success')}
                  </div>
                )}

                {status === 'error' && (
                  <div className="form-message-error">
                    <XCircle size={18} />
                    {t('error')}
                  </div>
                )}

                <button
                  type="submit"
                  className="form-submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? t('sending') : t('send')}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

