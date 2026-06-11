"use client";

import React, { useState } from "react";
import styles from "../car-dealerships-janitorial-services/page.module.css";

interface ServiceFormProps {
  serviceType: string;
  serviceLabel: string;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  messagePlaceholder?: string;
}

export default function ServiceForm({
  serviceType,
  serviceLabel,
  namePlaceholder = "e.g. John Doe / Business Corp",
  emailPlaceholder = "manager@yourbusiness.com",
  messagePlaceholder = "Describe your cleaning schedules, frequency, or specific requests..."
}: ServiceFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    email: "",
    message: "",
    privacy: false
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) {
      setSubmitError("You must accept the Privacy Policy to proceed.");
      return;
    }
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          facilitySize: formData.location ? `Location: ${formData.location}` : "Not Specified",
          serviceType: serviceType,
          message: formData.message,
          email: formData.email
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit request.");
      }

      setFormSubmitted(true);
    } catch (error: any) {
      setSubmitError(error.message || "Failed to connect to the server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (formSubmitted) {
    return (
      <div className={styles.formCard} style={{ textAlign: "center", padding: "3rem 2rem" }}>
        <div style={{ fontSize: "3rem", color: "var(--color-primary)", marginBottom: "1rem" }}>✓</div>
        <h2 className={styles.formCardTitle}>Request Received!</h2>
        <p className={styles.spamText} style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
          Thank you for reaching out. An Allstate Building & Office Maintenance expert will call you shortly to arrange an on-site walkthrough and customized quote.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.formCard}>
      <div className={styles.formCardHeader}>
        <h2 className={styles.formCardTitle}>Request a Free Estimate</h2>
        <p className={styles.formCardSub}>Get a fast response for your {serviceLabel}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">Business / Contact Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className={styles.input}
            placeholder={namePlaceholder}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className={styles.input}
            placeholder="(818) 887-1134"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="location">City / Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className={styles.input}
            placeholder="e.g. Woodland Hills, CA"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={styles.input}
            placeholder={emailPlaceholder}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="message">Message / Scope of Work *</label>
          <textarea
            id="message"
            name="message"
            required
            rows={3}
            value={formData.message}
            onChange={handleInputChange}
            className={`${styles.input} ${styles.textarea}`}
            placeholder={messagePlaceholder}
          />
        </div>

        <div className={styles.privacyGroup}>
          <input
            type="checkbox"
            id="privacy"
            name="privacy"
            required
            checked={formData.privacy}
            onChange={handleInputChange}
            className={styles.checkbox}
          />
          <label htmlFor="privacy" className={styles.privacyText}>
            I consent to the collection and handling of my data in accordance with the Privacy Policy for the purpose of receiving an estimate.
          </label>
        </div>

        <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Request Free Valuation"}
        </button>

        {submitError && (
          <div style={{ color: "#ef4444", marginTop: "1rem", fontSize: "0.85rem", fontWeight: "600", textAlign: "center" }}>
            ⚠️ {submitError}
          </div>
        )}

        <p className={styles.spamText}>
          No spam. Your business information is fully secure.
        </p>
      </form>
    </div>
  );
}
