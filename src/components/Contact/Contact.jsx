

import { useState } from 'react';
import { CONTACT_LINKS } from '../../data/data';
import './Contact.css';


const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function Contact() {
  
  const [fields, setFields] = useState({ name: '', email: '', msg: '' });
  
  const [errors, setErrors] = useState({ name: false, email: false, msg: false });
  
  const [success, setSuccess] = useState(false);

  
  const updateField = (key, val) => {
    setFields((prev) => ({ ...prev, [key]: val }));
    if (key === 'name'  && val.trim())              setErrors((e) => ({ ...e, name: false }));
    if (key === 'email' && isValidEmail(val.trim())) setErrors((e) => ({ ...e, email: false }));
    if (key === 'msg'   && val.trim())              setErrors((e) => ({ ...e, msg: false }));
  };

 
  const handleSubmit = () => {
    const nameErr  = !fields.name.trim();
    const emailErr = !fields.email.trim() || !isValidEmail(fields.email.trim());
    const msgErr   = !fields.msg.trim();

    setErrors({ name: nameErr, email: emailErr, msg: msgErr });

    if (!nameErr && !emailErr && !msgErr) {
      setSuccess(true);
      setFields({ name: '', email: '', msg: '' });
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  return (
    
    <section className="section" id="contact">
      <div className="section-wrap">
        <p className="section-eye">Contact</p>
        <h2 className="section-title">Let's talk</h2>

        <div className="contact-layout">

          {}
          <div className="contact-left">
            <h3>Get in touch</h3>
            <p>
              Looking for a frontend intern? Have a project to discuss?
              I check email daily and will reply within 24 hours.
            </p>
            {CONTACT_LINKS.map((link) => (
              <div className="contact-info-row" key={link.label}>
                <span className="contact-dot" />
                <a
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {link.label}
                </a>
              </div>
            ))}
          </div>

          {}
          <div className="contact-form">

            {}
            {success && (
              <div className="form-success">✓ Message sent! I'll get back to you soon.</div>
            )}

            <div className={`form-group${errors.name ? ' err' : ''}`}>
              <label htmlFor="fname">Full Name</label>
              <input
                id="fname"
                type="text"
                placeholder="Your name"
                value={fields.name}
                onChange={(e) => updateField('name', e.target.value)}
              />
              {errors.name && <span className="form-error">Please enter your name.</span>}
            </div>

            <div className={`form-group${errors.email ? ' err' : ''}`}>
              <label htmlFor="femail">Email Address</label>
              <input
                id="femail"
                type="email"
                placeholder="you@email.com"
                value={fields.email}
                onChange={(e) => updateField('email', e.target.value)}
              />
              {errors.email && <span className="form-error">Please enter a valid email.</span>}
            </div>

            <div className={`form-group${errors.msg ? ' err' : ''}`}>
              <label htmlFor="fmsg">Message</label>
              <textarea
                id="fmsg"
                placeholder="Tell me about the role or project..."
                value={fields.msg}
                onChange={(e) => updateField('msg', e.target.value)}
              />
              {errors.msg && <span className="form-error">Please write a message.</span>}
            </div>

            {}
            <button
            type="button"
            className="btn-fill contact-btn"
            onClick={handleSubmit}
>
  Send Message →
</button>

          </div>
        </div>
      </div>
    </section>
  );
}