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
  const canonicalUrl = `${protocol}://${host}/offices-and-buildings-janitorial-services`;

  return {
    title: "Commercial Office Building Cleaning | Woodland Hills | Allstate",
    description: "Daily office janitorial services, desk sanitization, conference room detailing, and entryway glass polishing in Woodland Hills & Los Angeles. Since 1981.",
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const faqs = [
  {
    q: "What tasks are included in your standard office cleaning checklist?",
    a: "Our standard office janitorial checklist includes emptying trash & recycling bins, vacuuming carpets, dry & damp mopping hard floors, sanitizing desks, conference tables, and breakroom counters, deep-cleaning restrooms, and polishing entryway glass."
  },
  {
    q: "Do you sanitize keyboards, monitors, and telephones?",
    a: "Yes. High-touch office electronics are primary breeding grounds for bacteria. We dust computer monitors with dry microfibers and wipe telephone receivers and keyboards with EPA-registered, fast-drying sanitizing wipes to prevent liquid damage."
  },
  {
    q: "Are your cleaning shifts scheduled after business hours?",
    a: "Yes. We offer complete off-hours flexibility. Most corporate clients prefer cleaning shifts in the evening or early morning (e.g., between 6:00 PM and 2:00 AM) to ensure employees are never interrupted during the workday."
  },
  {
    q: "Do you offer eco-friendly or low-odor cleaning options for offices?",
    a: "Yes. Allstate Building & Office Maintenance uses Green Seal and EcoLogo certified, low-VOC products. This ensures excellent hygiene while preventing chemical smells, protecting indoor air quality for your staff."
  },
  {
    q: "Are your cleaners background-checked, insured, and bonded?",
    a: "Absolutely. We prioritize workplace security. Every crew member is 100% background-checked, bonded, and insured under our comprehensive $5M policy, guaranteeing protection for your proprietary files and office equipment."
  }
];

export default function OfficeBuildingsPage() {
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
            src="/office.jpg"
            alt="Modern corporate office lobby with clean tile floors and glass doors"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <div>
              <div className={styles.heroBadge}>
                <span className={styles.heroBadgePulse}></span>
                Corporate Desk Sanitizing & Floor Care
              </div>
              <h1 className={styles.heroTitle}>
                Commercial Office <br />
                <span className={styles.heroTitleGradient}>Building Upkeep</span>
              </h1>
              <p className={styles.heroTextBordered}>
                Daily janitorial care, conference room detailing, trash extraction, and glass polishing. Allstate Building & Office Maintenance maintains productive corporate environments since 1981.
              </p>
              <div className={styles.heroBtns}>
                <a href="#quote" className={styles.btnPrimary}>Request Free Quote</a>
                <a href="tel:+18188871134" className={styles.btnSecondary}>Call (818) 887-1134</a>
              </div>
            </div>
            <div id="quote">
              <ServiceForm serviceType="offices" serviceLabel="office facility" />
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
              Office Buildings
            </span>
          </div>
        </div>
      </nav>

      {/* 4. Why Choose Us Section */}
      <section id="why-us" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose Allstate for Your Office Building</h2>
            <div className={styles.sectionTitleDivider}></div>
            <p className={styles.sectionSubtitle}>
              We deliver premium, thorough commercial office cleaning that keeps your workplace safe and professional.
            </p>
          </div>

          <div className={styles.strengthsGrid}>
            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>🖥️</span>
              </div>
              <h3 className={styles.strengthTitle}>Desk Sanitization</h3>
              <p className={styles.strengthText}>
                We disinfect desks, keyboards, phones, and conference tables with fast-drying, residue-free sanitizers.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>🛋️</span>
              </div>
              <h3 className={styles.strengthTitle}>Conference Detailing</h3>
              <p className={styles.strengthText}>
                Polishing wood tables, vacuuming chair upholstery, and dusting audio-visual presentation hubs.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>🗑️</span>
              </div>
              <h3 className={styles.strengthTitle}>Trash & Recycle Extraction</h3>
              <p className={styles.strengthText}>
                Timely, daily clearing of waste bins, replacement of liners, and separating recyclables.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>🪟</span>
              </div>
              <h3 className={styles.strengthTitle}>Entry Glass Polishing</h3>
              <p className={styles.strengthText}>
                Keeping glass doors, lobby panels, and reception partitions completely streak-free.
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
              <h2>Hygienic Workspaces Boost Employee Productivity</h2>
              <p>
                A clean, well-ordered office is a cornerstone of corporate culture, employee morale, and public trust. Dusty workstations, un-emptied waste baskets, and neglected bathrooms can impact productivity, increase sick days, and make a poor impression on visiting clients.
              </p>
              <p>
                Since 1981, Allstate Building & Office Maintenance has supported office towers, corporate headquarters, and small business suites in Woodland Hills and Los Angeles. We tailor our janitorial checklists to match your precise workplace layout and company policies.
              </p>
              
              <h3>Daily Janitorial & Desk Care</h3>
              <p>
                We focus on high-touch hotspots and public areas where germs are most likely to spread. Our daily checklist includes:
              </p>
              <ul>
                <li>Emptying waste bins and replacing trash liners.</li>
                <li>Sanitizing conference tables, chairs, and audio-visual setups.</li>
                <li>Vacuuming traffic lines and detailing hard-floor thresholds.</li>
                <li>Cleaning breakroom sinks, microwaves, and refrigerator exteriors.</li>
              </ul>

              <h3>Secure and Bonded Crew Operations</h3>
              <p>
                We prioritize the security of your business records and high-value equipment. Our cleaners are background-checked, insured, and bonded, and they follow strict rules to respect files, folders, and computer workstations.
              </p>
            </div>
            
            <div className={styles.proseImageCol}>
              <img
                src="/office.jpg"
                alt="Corporate conference room inside a clean office"
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
            <h2 className={styles.sectionTitle}>Basic Cleaners vs. Allstate Office Standard</h2>
            <div className={styles.sectionTitleDivider}></div>
            <p className={styles.sectionSubtitle}>
              Compare typical cleaning companies against our professional commercial office program.
            </p>
          </div>

          <div className={styles.comparisonContainer}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th className={styles.th}>Janitorial Task</th>
                  <th className={styles.th}>Generic Cleaning Teams</th>
                  <th className={styles.thPrimary}>Allstate Office Standard</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.tr}>
                  <td className={styles.td}>Workspace Desk Care</td>
                  <td className={styles.td}>Trash emptied; desks ignored</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> Disinfection wiping of desks & electronic touchpoints
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Conference Room Care</td>
                  <td className={styles.td}>Quick vacuum & dusting</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> Boardroom table polishing, leather conditioning & AV dusting
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Entryway & Partition Glass</td>
                  <td className={styles.td}>Wiped occasionally</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> Daily streak-free glass polishing & railing wipe-downs
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Chemical Safety</td>
                  <td className={styles.td}>Standard household chemical smells</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> 100% EcoLogo/Green Seal certified, low-VOC products
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Liability Protection</td>
                  <td className={styles.td}>Basic standard policy limits</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> $5M comprehensive general liability + full worker bond
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
            <h2 className={styles.sectionTitle}>How We Onboard Your Office</h2>
            <div className={styles.sectionTitleDivider}></div>
            <p className={styles.sectionSubtitle}>
              Our office onboarding process guarantees zero business interruption and a completely tailored task checklist.
            </p>
          </div>

          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.processNum}>01</div>
              <h3 className={styles.processHeading}>Inquiry & Consult</h3>
              <p className={styles.processText}>
                Submit our simple online form or call us directly. We'll verify your office parameters and schedule preferences.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNum}>02</div>
              <h3 className={styles.processHeading}>Site Walkthrough</h3>
              <p className={styles.processText}>
                Our manager visits your office to evaluate floor materials, desk configurations, and restroom capacity.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNum}>03</div>
              <h3 className={styles.processHeading}>Task Checklist</h3>
              <p className={styles.processText}>
                We build a detailed list outlining daily, weekly, and monthly tasks so you know exactly what is included.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNum}>04</div>
              <h3 className={styles.processHeading}>Crew Deployment</h3>
              <p className={styles.processText}>
                Our safety-certified commercial cleaning crew begins service under supervision, during your designated off-hours.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNum}>05</div>
              <h3 className={styles.processHeading}>Quality Check-in</h3>
              <p className={styles.processText}>
                We run supervisor audits and hold regular review calls to guarantee you are 100% satisfied with our upkeep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA High-Impact Banner */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Ready for a Productive, Sparkling Office Environment?</h2>
          <p className={styles.ctaText}>
            Provide your team with the clean office environment they deserve. Contact Allstate Building & Office Maintenance today.
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
              Find immediate answers regarding our office cleaning practices, scheduling, and safety protocols.
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
                  maxWidth: "200px",
                  height: "auto",
                  display: "block",
                  marginBottom: "1.25rem",
                  borderRadius: "8px",
                  backgroundColor: "#ffffff",
                  padding: "0.5rem"
                }}
              />
              <p style={{ fontSize: "0.9rem", lineHeight: "1.6", margin: "1rem 0" }}>
                Allstate Building & Office Maintenance is Woodland Hills' trusted commercial janitorial and floor-care provider. Licensed, bonded, and insured since 1981.
              </p>
            </div>
            <div className={styles.footerCol}>
              <h3>Sectors</h3>
              <div className={styles.footerLinks}>
                <a href="/car-dealerships-janitorial-services" className={styles.footerLink}>Dealerships Cleaning</a>
                <a href="/dental-office-janitorial-services" className={styles.footerLink}>Medical Clinics Cleaning</a>
                <a href="/industrial-manufacturing-janitorial-services" className={styles.footerLink}>Manufacturing Upkeep</a>
                <a href="/offices-and-buildings-janitorial-services" className={styles.footerLink}>Office Buildings Upkeep</a>
                <a href="/#services" className={styles.footerLink}>Schools & Malls Upkeep</a>
              </div>
            </div>
            <div className={styles.footerCol}>
              <h3>Contact</h3>
              <div className={styles.footerLinks}>
                <span className={styles.footerLink}>📞 (818) 887-1134</span>
                <span className={styles.footerLink}>📍 19720 Ventura Blvd, Woodland Hills, CA</span>
                <span className={styles.footerLink}>✉️ allstatecustomercare1@gmail.com</span>
              </div>
            </div>
          </div>
          <div className={styles.footerCopyright}>
            &copy; {new Date().getFullYear()} Allstate Building & Office Maintenance. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
