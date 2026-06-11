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
  const canonicalUrl = `${protocol}://${host}/fitness-center-cleaning`;

  return {
    title: "Gym & Fitness Center Cleaning | Woodland Hills | Allstate",
    description: "Locker room acid scrubbing, equipment sanitizing, sweat odor elimination, and floor care for fitness centers in Woodland Hills & Los Angeles. Since 1981.",
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const faqs = [
  {
    q: "What disinfectants do you use to clean gym machines and weights?",
    a: "We use EPA-registered, gym-safe virucidal disinfectants. These solutions are formulated to destroy bacteria and sweat-borne pathogens (like MRSA, influenza, and athlete's foot fungus) without corroding rubber grips or vinyl upholstery pads."
  },
  {
    q: "How do you control sweat and body odors in high-traffic gym zones?",
    a: "We maintain odor management. This includes daily HEPA air-vacuuming to capture skin flakes and dust, rapid towel waste extraction, trash bin disinfection, and treating locker room drains with enzyme digestants."
  },
  {
    q: "Do you sanitize locker room showers, steam rooms, and saunas?",
    a: "Yes. Locker room showers and steam rooms endure constant humidity. We apply acid descaling detergents to remove soap scum, hard water stains, and mold, followed by virucidal tile scrubbing to prevent fungi growth."
  },
  {
    q: "Can you clean 24-hour gym facilities without disrupting members?",
    a: "Yes. For 24/7 fitness centers, we schedule our heavy cleaning cycles during low-traffic windows (typically between 11:00 PM and 4:00 AM) and employ discrete, quiet cleaning procedures to keep members comfortable."
  },
  {
    q: "Do you supply and restock locker room amenities like soap and paper towels?",
    a: "Yes. Allstate Building & Office Maintenance can supply and restock locker room soaps, shampoos, paper towels, tissue rolls, and cleaning wipes, simplifying your inventory management."
  }
];

export default function FitnessCenterCleaningPage() {
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
            src="/fitness.jpg"
            alt="Modern fitness center showing neat weight racks and gym machines"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <div>
              <div className={styles.heroBadge}>
                <span className={styles.heroBadgePulse}></span>
                Antiviral Disinfection & Odor Management
              </div>
              <h1 className={styles.heroTitle}>
                Gym & Fitness <br />
                <span className={styles.heroTitleGradient}>Center Cleaning</span>
              </h1>
              <p className={styles.heroTextBordered}>
                Locker room acid scrubbing, gym machine sanitization, and sweat odor elimination. Allstate Building & Office Maintenance keeps your athletic club hygienic since 1981.
              </p>
              <div className={styles.heroBtns}>
                <a href="#quote" className={styles.btnPrimary}>Request Free Quote</a>
                <a href="tel:+18188871134" className={styles.btnSecondary}>Call (818) 887-1134</a>
              </div>
            </div>
            <div id="quote">
              <ServiceForm serviceType="fitness" serviceLabel="fitness center" />
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
              Fitness Center Cleaning
            </span>
          </div>
        </div>
      </nav>

      {/* 4. Why Choose Us Section */}
      <section id="why-us" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose Allstate for Your Fitness Center</h2>
            <div className={styles.sectionTitleDivider}></div>
            <p className={styles.sectionSubtitle}>
              We deliver rigorous athletic sanitation checklists to keep members safe, healthy, and returning.
            </p>
          </div>

          <div className={styles.strengthsGrid}>
            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>🏋️</span>
              </div>
              <h3 className={styles.strengthTitle}>Gym Machine Sanitization</h3>
              <p className={styles.strengthText}>
                We sanitize vinyl pads, weight plates, treadmill buttons, and metal bars with non-corrosive disinfectants.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>🧼</span>
              </div>
              <h3 className={styles.strengthTitle}>Locker Room Acid Scrub</h3>
              <p className={styles.strengthText}>
                Deep-cleaning tile grouting, descamming showers, sanitizing toilets, and restoring high humidity zones.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>👃</span>
              </div>
              <h3 className={styles.strengthTitle}>Odor Elimination</h3>
              <p className={styles.strengthText}>
                Treating drains, clearing damp towels, and using antimicrobial cleaners to prevent stale bacteria odors.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>📅</span>
              </div>
              <h3 className={styles.strengthTitle}>Off-Hours Flexibility</h3>
              <p className={styles.strengthText}>
                Cleaning schedules adapted entirely to your facility's traffic flow, including late night or early morning shifts.
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
              <h2>Hygienic Excellence Retains Gym Members</h2>
              <p>
                In the competitive fitness industry, facility hygiene is one of the highest deciding factors for member retention. Athletic spaces are highly prone to bacterial build-up and viral transmission due to skin contact, heavy sweating, and shared locker facilities.
              </p>
              <p>
                Since 1981, Allstate Building & Office Maintenance has serviced health clubs, crossfit gyms, yoga centers, and wellness studios in Woodland Hills and Los Angeles. We provide specialized gym sanitizing plans that target bacteria at the source.
              </p>
              
              <h3>Locker Room & Shower Sanitization</h3>
              <p>
                Showers and changing areas are key vectors for mold, mildew, and athlete's foot fungus. Our locker room cleaning program utilizes deep-reaching protocols:
              </p>
              <ul>
                <li>Acid scrubbing of shower floor and wall tiles to remove scale.</li>
                <li>Hygienic wipedowns of lockers, benches, and vanity surfaces.</li>
                <li>Emptying wet towel hampers and disinfecting bins.</li>
                <li>Sanitizing restroom plumbing fixtures, glass panels, and mirrors.</li>
              </ul>

              <h3>Safe, Antiviral Surface Disinfection</h3>
              <p>
                We use commercial sanitizers that are highly effective against viruses but gentle on specialized exercise gear. We sanitize free weight racks, grip bars, cardiovascular consoles, and rubber workout mats, keeping your equipment sterile and prolonging its lifespan.
              </p>
            </div>
            
            <div className={styles.proseImageCol}>
              <img
                src="/fitness.jpg"
                alt="Gym equipment rows in a clean fitness facility"
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
            <h2 className={styles.sectionTitle}>Basic Wiping vs. Allstate Athletic Sanitization</h2>
            <div className={styles.sectionTitleDivider}></div>
            <p className={styles.sectionSubtitle}>
              Compare standard commercial cleaners against our deep athletic sanitation program.
            </p>
          </div>

          <div className={styles.comparisonContainer}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th className={styles.th}>Upkeep Priority</th>
                  <th className={styles.th}>Basic Cleaning Services</th>
                  <th className={styles.thPrimary}>Allstate Gym Standard</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.tr}>
                  <td className={styles.td}>Equipment Grips & Consoles</td>
                  <td className={styles.td}>Light dusting or ignore</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> Virucidal sanitation of high-touch consoles & weights
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Shower Floor Grouting</td>
                  <td className={styles.td}>Basic spray & mop down</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> Acid scrub treatment to kill fungus & scale
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Odors & Bacteria</td>
                  <td className={styles.td}>Masking sprays or air fresheners</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> Active enzyme drain treatments & HEPA filtration
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Locker Sanitization</td>
                  <td className={styles.td}>Exterior dust only</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> Total interior & bench sanitizing with EPA disinfectants
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Porter Responsiveness</td>
                  <td className={styles.td}>No daytime emergency coverage</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> Uniformed day-porters for rapid spill & towel recovery
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
            <h2 className={styles.sectionTitle}>How We Onboard Your Gym</h2>
            <div className={styles.sectionTitleDivider}></div>
            <p className={styles.sectionSubtitle}>
              Our streamlined onboarding process guarantees zero business interruption and a completely tailored task checklist.
            </p>
          </div>

          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.processNum}>01</div>
              <h3 className={styles.processHeading}>Inquiry & Consult</h3>
              <p className={styles.processText}>
                Submit our simple online form or call us directly. We'll verify your gym parameters and schedule preferences.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNum}>02</div>
              <h3 className={styles.processHeading}>Site Walkthrough</h3>
              <p className={styles.processText}>
                Our manager visits your gym to evaluate equipment volume, locker room setups, and high-traffic floor areas.
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
          <h2 className={styles.ctaTitle}>Ready for a Cleaner, Safer Workout Space?</h2>
          <p className={styles.ctaText}>
            Give your members the clean environment they expect. Contact Allstate Building & Office Maintenance today for a free walkthrough.
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
              Find immediate answers regarding our gym cleaning practices, scheduling, and safety protocols.
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
              We proudly provide gym floor care and locker room sanitizing across the San Fernando Valley and Greater Los Angeles.
            </p>
          </div>

          <div className={styles.locationGrid}>
            {locations.map((loc, idx) => (
              <div key={idx} className={styles.locationCard}>
                <span className={styles.locationDot}></span>
                {loc}
              </div>
            ))}
          </div>
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
                <a href="/fitness-center-cleaning" className={styles.footerLink}>Fitness Center Cleaning</a>
                <a href="/#services" className={styles.footerLink}>Office Buildings Upkeep</a>
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
