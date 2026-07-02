import React from "react";
import { Metadata } from "next";
import styles from "../car-dealerships-janitorial-services/page.module.css";
import ServiceForm from "../services/ServiceForm";
import Header from "../services/Header";
import ServiceFaq from "../services/ServiceFaq";

import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get("host") || "allstatebuildingmaintenance.com";
  const protocol = headersList.get("x-forwarded-proto") || "https";
  const canonicalUrl = `${protocol}://${host}/dental-office-janitorial-services`;

  return {
    title: "Medical & Dental Clinic Cleaning & Sanitization | Woodland Hills | Allstate",
    description: "Hospital-grade clinic sanitation, medical office disinfection, and dental operatory cleaning in Woodland Hills & Los Angeles. CDC/OSHA compliant since 1981.",
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const faqs = [
  {
    q: "Are your cleaning products approved for healthcare facilities?",
    a: "Yes. Allstate Building & Office Maintenance uses EPA-registered, hospital-grade disinfectants that are proven to eliminate virucidal and bacterial pathogens on contact, ensuring a safe clinical environment."
  },
  {
    q: "How do you ensure compliance with OSHA and CDC guidelines?",
    a: "Our personnel undergo mandatory training on exposure control plans, Bloodborne Pathogens standard procedures, hazard communication, and standard precautions. We document compliance rigorously for your peace of mind."
  },
  {
    q: "Do you train your staff on HIPAA and patient privacy?",
    a: "Absolutely. We understand that medical records and patient charts are strictly confidential. Our cleaning crews are fully trained in HIPAA protocols and will never touch or reorganize files, folders, or computer terminal desks."
  },
  {
    q: "How do you prevent cross-contamination between clinic zones?",
    a: "We utilize color-coded microfiber cloths and mop pads to separate cleaning tools. A cloth used in the restroom is never introduced into an exam room or dental operatory, and we employ double-filter HEPA vacuums for indoor air safety."
  },
  {
    q: "What scheduling options do you offer for medical centers?",
    a: "We operate 24/7 and adapt entirely to your patient hours. We perform medical janitorial services in the evenings or early mornings, ensuring all patient lounges, exam chairs, and restrooms are sterilized before your clinic opens."
  }
];

export default function MedicalDentalClinicsPage() {
  const locations = [
    "Woodland Hills (HQ)",
    "Calabasas",
    "Tarzana",
    "Encino",
    "Sherman Oaks",
    "West Hills",
    "Santa Monica",
    "Beverly Hills",
    "Pasadena",
    "Glendale",
  ];

  return (
    <div className={styles.main}>
      {/* 1. Sticky Navigation Header */}
      <Header />

      {/* 2. Hero Section with Integrated Form */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <img
            src="/medical.jpg"
            alt="Sterile dental clinic environment with clean chairs and medical lighting"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <div>
              <div className={styles.heroBadge}>
                <span className={styles.heroBadgePulse}></span>
                OSHA & CDC Compliant Sanitizing
              </div>
              <h1 className={styles.heroTitle}>
                Medical & Dental <br />
                <span className={styles.heroTitleGradient}>Clinic Cleaning</span>
              </h1>
              <p className={styles.heroTextBordered}>
                Hospital-grade sterilization, virucidal disinfection, and zero-cross contamination protocols. Allstate Building & Office Maintenance protects patients and healthcare providers.
              </p>
              <div className={styles.heroBtns}>
                <a href="#quote" className={styles.btnPrimary}>Request Free Quote</a>
                <a href="tel:+18188871134" className={styles.btnSecondary}>Call (818) 887-1134</a>
              </div>
            </div>
            <div id="quote">
              <ServiceForm serviceType="medical" serviceLabel="medical clinic" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Breadcrumbs Nav */}
      <nav aria-label="Breadcrumbs" className={styles.breadcrumbsBar}>
        <div className="container">
          <div className={styles.breadcrumbs}>
            <a href="/" className={styles.breadcrumbLink}>
              Home
            </a>
            <span className={styles.breadcrumbSeparator}>&gt;</span>
            <a href="/#services" className={styles.breadcrumbLink}>
              Services
            </a>
            <span className={styles.breadcrumbSeparator}>&gt;</span>
            <span className={styles.breadcrumbCurrent} aria-current="page">
              Medical & Dental Clinics
            </span>
          </div>
        </div>
      </nav>

      {/* 4. Why Choose Us Section */}
      <section id="why-us" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose Allstate for Your Clinic</h2>
            <div className={styles.sectionTitleDivider}></div>
            <p className={styles.sectionSubtitle}>
              We deliver healthcare-focused cleaning checklists to maintain absolute safety and compliance.
            </p>
          </div>

          <div className={styles.strengthsGrid}>
            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>🧪</span>
              </div>
              <h3 className={styles.strengthTitle}>Hospital-Grade Disinfectants</h3>
              <p className={styles.strengthText}>
                We use only EPA-approved, clinic-grade sanitizing solutions that eliminate 99.99% of bacteria and viruses on high-touch surfaces.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>🛡️</span>
              </div>
              <h3 className={styles.strengthTitle}>OSHA & CDC Compliance</h3>
              <p className={styles.strengthText}>
                Our procedures adhere to strict bloodborne pathogen, hazard communication, and clinical decontamination standards.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>🔴</span>
              </div>
              <h3 className={styles.strengthTitle}>Zero Cross-Contamination</h3>
              <p className={styles.strengthText}>
                Color-coded microfiber towels and mops prevent germ transmission between operatories, lobbies, and restrooms.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>🔒</span>
              </div>
              <h3 className={styles.strengthTitle}>HIPAA-Compliant Staff</h3>
              <p className={styles.strengthText}>
                Our cleaners are background-checked, bonded, and trained to respect patient data and security guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Detailed Prose Section */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.proseGrid}>
            <div className={styles.proseCol}>
              <h2>Clinical-Grade Sanitation is Non-Negotiable</h2>
              <p>
                In healthcare settings, cleanliness isn't just about appearance; it's a critical component of infection control and patient safety. Medical and dental clinics require meticulous disinfection strategies to stop the transmission of infectious diseases and maintain trust.
              </p>
              <p>
                Since 1981, Allstate Building & Office Maintenance has supported clinical environments across Los Angeles and Woodland Hills. We provide specialized medical office cleaning, waiting area sterilization, and operatory upkeep designed around strict regulatory guidelines.
              </p>
              
              <h3>Comprehensive Decontamination Processes</h3>
              <p>
                Our team understands the difference between simple tidying and medical-grade sanitization. We focus on high-touch hotspots and critical zones:
              </p>
              <ul>
                <li>Disinfecting operatory chairs, cabinetry, tray arms, and countertops.</li>
                <li>Sterilizing clinical door handles, light switches, and payment desks.</li>
                <li>Hygienic treatment of dental basins, sinks, and clinical faucets.</li>
                <li>Proper disposal of standard trash and safe handling of clinical waste bins.</li>
              </ul>

              <h3>Safeguarding the Patient Experience</h3>
              <p>
                First impressions matter to patients. A spotless waiting lounge, pristine restrooms, and dust-free air filtration systems reduce patient anxiety and showcase the high level of professionalism of your practice. Let us manage the facility upkeep so your staff can focus on healthcare.
              </p>
            </div>
            
            <div className={styles.proseImageCol}>
              <img
                src="/medical.jpg"
                alt="Clean medical clinic examination room"
                className={styles.proseImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Comparison Table */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Standard Janitorial vs. Allstate Healthcare Care</h2>
            <div className={styles.sectionTitleDivider}></div>
            <p className={styles.sectionSubtitle}>
              Understand the safety benefits of a professional, healthcare-compliant cleaning contractor.
            </p>
          </div>

          <div className={styles.comparisonContainer}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th className={styles.th}>Sanitization Protocol</th>
                  <th className={styles.th}>Standard Commercial Cleaners</th>
                  <th className={styles.thPrimary}>Allstate Clinic Standard</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.tr}>
                  <td className={styles.td}>Disinfection Chemicals</td>
                  <td className={styles.td}>Basic multi-surface sprays</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> EPA-approved virucidal solutions
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Microfiber Zone Rules</td>
                  <td className={styles.td}>Shared towels across zones</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> Strict color-coded microfiber containment
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Compliance Oversight</td>
                  <td className={styles.td}>Minimal regulatory training</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> OSHA Bloodborne Pathogens & CDC audit paths
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Air Quality Controls</td>
                  <td className={styles.td}>Standard dusters or sweeps</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> HEPA-filtered vacuuming for allergens & particles
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Confidentiality training</td>
                  <td className={styles.td}>Casual janitorial workers</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> Fully HIPAA-compliant & background-checked staff
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. Onboarding Process ("How We Work") */}
      <section id="process" className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>How We Onboard Your Clinic</h2>
            <div className={styles.sectionTitleDivider}></div>
            <p className={styles.sectionSubtitle}>
              Our medical onboarding ensures all health protocols, schedule constraints, and regulatory audits are aligned.
            </p>
          </div>

          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.processNum}>01</div>
              <h3 className={styles.processHeading}>Consultation</h3>
              <p className={styles.processText}>
                We discuss your clinic's patient volumes, operating hours, and specific OSHA compliance concerns.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNum}>02</div>
              <h3 className={styles.processHeading}>Facility Walkthrough</h3>
              <p className={styles.processText}>
                Our operations manager evaluates layouts, operatory surfaces, high-touch areas, and HVAC setups.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNum}>03</div>
              <h3 className={styles.processHeading}>Custom Checklist</h3>
              <p className={styles.processText}>
                We develop a rigid cleaning checklist covering exam rooms, reception desks, and surgical suites.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNum}>04</div>
              <h3 className={styles.processHeading}>Crew Briefing</h3>
              <p className={styles.processText}>
                Our certified clinic cleaners are briefed on your specific facility plan and safety rules.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNum}>05</div>
              <h3 className={styles.processHeading}>Audited Inspections</h3>
              <p className={styles.processText}>
                We perform routine sanitation checks and regular communication loops to guarantee 100% compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA High-Impact Banner */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Looking for a Medical-Grade Cleaning Partner?</h2>
          <p className={styles.ctaText}>
            Maintain a sterile, welcoming healthcare space. Contact Allstate Building & Office Maintenance today for a free walkthrough.
          </p>
          <a href="#quote" className={styles.btnWhite}>
            Request Your Free Valuation
          </a>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section id="faq" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.sectionTitleDivider}></div>
            <p className={styles.sectionSubtitle}>
              Find immediate answers regarding our healthcare cleaning practices, scheduling, and safety protocols.
            </p>
          </div>
          <ServiceFaq faqs={faqs} />
        </div>
      </section>

      {/* 9.5 Office Location & Contact Section */}
      <section className={styles.contactMapSection}>
        <div className="container">
          <div className={styles.contactMapGrid}>
            <div className={styles.contactMapInfo}>
              <h2 className={styles.contactMapTitle}>Allstate Building & Office Maintenance</h2>
              
              <div className={styles.contactMapDetails}>
                <div className={styles.contactDetailItem}>
                  <span className={styles.contactDetailLabel}>Phone</span>
                  <div className={styles.contactDetailValue}>
                    <a href="tel:+18188871134">(818) 887-1134</a>
                  </div>
                </div>

                <div className={styles.contactDetailItem}>
                  <span className={styles.contactDetailLabel}>Address</span>
                  <div className={styles.contactDetailValue}>
                    19720 Ventura Blvd, Woodland Hills, CA 91364, USA
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "1rem" }}>
                <a href="tel:+18188871134" className={styles.btnPrimary} style={{ textTransform: "uppercase", fontWeight: "700" }}>
                  get a free quote
                </a>
              </div>
            </div>

            <div className={styles.mapFrameContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.0087634866068!2d-118.56576192397992!3d34.171693611413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29938a7b1ea1d%3A0x2daa9494cd87cb82!2s19720%20Ventura%20Blvd%20%23105%2C%20Woodland%20Hills%2C%20CA%2091364!5e0!3m2!1sen!2sus!4v1781205128682!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Locations Coverage Section */}
            <section className={`${styles.section} ${styles.locationSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Commercial Service Areas</h2>
            <div className={styles.sectionTitleDivider}></div>
            <p className={styles.sectionSubtitle}>
              We proudly provide office cleaning and commercial building maintenance services across Los Angeles County, Orange County, Ventura County, and the Inland Empire.
            </p>
          </div>

          <div className={styles.areaGrid}>
            <div className={styles.laCountyCol}>
              <h3 className={styles.areaSubHeader}>Los Angeles County</h3>
              <div className={styles.laLinks}>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Woodland Hills (HQ)</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Calabasas</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Tarzana</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Encino</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Sherman Oaks</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> West Hills</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Santa Monica</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Beverly Hills</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Pasadena</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Glendale</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Downtown LA</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> West Hollywood</div>
              </div>
            </div>

            <div>
              <h3 className={styles.areaSubHeader}>Orange County</h3>
              <div className={styles.singleLinks}>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Anaheim</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Buena Park</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Costa Mesa</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Cypress</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Irvine</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Laguna Beach</div>
              </div>
            </div>

            <div>
              <h3 className={styles.areaSubHeader}>Inland Empire</h3>
              <div className={styles.singleLinks}>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Rancho Cucamonga</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Ontario</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Riverside</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Moreno Valley</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Pomona</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> San Bernardino</div>
              </div>
            </div>

            <div>
              <h3 className={styles.areaSubHeader}>Ventura County</h3>
              <div className={styles.singleLinks}>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Thousand Oaks</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Ventura</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Camarillo</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Westlake Village</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Oxnard</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Simi Valley</div>
              </div>
            </div>
          </div>

          <p className={styles.whyText} style={{ marginTop: "3rem", textAlign: "center", fontSize: "1.05rem", opacity: 0.95, maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
            Our service coverage includes all areas throughout Los Angeles County, Orange County, and Ventura County. The list above represents our main service hubs, but our coverage is not limited to these specific locations.
          </p>
        </div>
      </section>

      {/* 11. Footer */}
            <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerGrid}>
            <div className={styles.footerCol}>
              <img 
                src="/logo.jpg" 
                alt="Allstate Building & Office Maintenance Logo" 
                style={{ 
                  maxWidth: "220px", 
                  height: "auto", 
                  display: "block", 
                  marginBottom: "1.25rem", 
                  borderRadius: "8px", 
                  backgroundColor: "#ffffff", 
                  padding: "0.5rem" 
                }}
              />
              <p style={{ fontSize: "0.9rem", lineHeight: "1.6", margin: "1rem 0" }}>
                Allstate Building & Office Maintenance is Woodland Hills' trusted provider of high-quality commercial janitorial, office disinfection, and facility maintenance support.
              </p>
            </div>
            <div className={styles.footerCol}>
              <h3>Services</h3>
              <div className={styles.footerLinks}>
                <a href="/car-dealerships-janitorial-services" className={styles.footerLink}>Dealerships Cleaning</a>
                <a href="/dental-office-janitorial-services" className={styles.footerLink}>Medical Clinics Cleaning</a>
                <a href="/industrial-manufacturing-janitorial-services" className={styles.footerLink}>Manufacturing Upkeep</a>
                <a href="/school-cleaning-services" className={styles.footerLink}>School Cleaning</a>
                <a href="/shopping-mall-cleaning" className={styles.footerLink}>Shopping Mall Cleaning</a>
                <a href="/fitness-center-cleaning" className={styles.footerLink}>Fitness Center Cleaning</a>
                <a href="/dance-studio-janitorial-services" className={styles.footerLink}>Dance Studio Cleaning</a>
                <a href="/offices-and-buildings-janitorial-services" className={styles.footerLink}>Office Buildings Upkeep</a>
              </div>
            </div>
            <div className={styles.footerCol}>
              <h3>Contact</h3>
              <div className={styles.footerLinks}>
                <span className={styles.footerLink}>📞 (818) 887-1134</span>
                <span className={styles.footerLink}>📍 19720 Ventura Blvd Suite # 105, Woodland Hills, CA</span>
                <span className={styles.footerLink}>✉️ allstatecustomercare1@gmail.com</span>
              </div>
            </div>
          </div>
          <div className={styles.footerCopyright}>
            &copy; {new Date().getFullYear()} Allstate Building & Office Maintenance. All Rights Reserved. Licensed, Bonded & Insured.
          </div>
        </div>
      </footer>
    </div>
  );
}
