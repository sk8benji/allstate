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
  const canonicalUrl = `${protocol}://${host}/dance-studio-janitorial-services`;

  return {
    title: "Dance Studio & Performing Arts Center Cleaning | Woodland Hills | Allstate",
    description: "Specialized slip-resistant wood floor care, mirror wall detailing, ballet barre disinfection, and lobby cleaning in Woodland Hills & Los Angeles. Since 1981.",
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const faqs = [
  {
    q: "What chemicals do you use to wash hardwood dance floors?",
    a: "We use only pH-neutral hardwood cleaners specifically formulated for high-performance athletic wood floors. We avoid waxy finishes and harsh detergents that leave residues, ensuring your floors remain clean, slip-resistant, and safe for dancers."
  },
  {
    q: "How do you clean large mirror walls without leaving streaks or lint?",
    a: "We use specialized streak-free glass cleaners and premium micro-filament glass cloths. Our process removes dust, handprints, and sweat spray, leaving a mirror-like finish."
  },
  {
    q: "Do you sanitize ballet barres, stretch mats, and DJ booths?",
    a: "Yes. Ballet barres (both wooden and brass) are high-touch areas. We wipe them down with EPA-registered disinfectants after every sweep, and we clean stretching mats and dust electronic audio gear."
  },
  {
    q: "Can you adjust cleaning times around our class schedules?",
    a: "Absolutely. We are highly flexible. We can schedule our janitorial crew during midday breaks, late nights after the final class, or early morning hours before students arrive."
  },
  {
    q: "Are your cleaning staff background-screened and bonded?",
    a: "Yes. Allstate Building & Office Maintenance performs strict background checks and identity verification on all personnel. Our workers are fully insured, bonded, and supervised."
  }
];

export default function DanceStudiosPage() {
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
            src="/dance.jpg"
            alt="Spacious dance studio with clean wood floors and wall mirrors"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <div>
              <div className={styles.heroBadge}>
                <span className={styles.heroBadgePulse}></span>
                Slip-Resistant Wood Care & Mirror Detailing
              </div>
              <h1 className={styles.heroTitle}>
                Dance Studio & <br />
                <span className={styles.heroTitleGradient}>Performing Arts Cleaning</span>
              </h1>
              <p className={styles.heroTextBordered}>
                Specialized wood floor mopping, streak-free mirror wall detailing, and ballet barre sanitizing. Allstate Building & Office Maintenance preserves performance spaces since 1981.
              </p>
              <div className={styles.heroBtns}>
                <a href="#quote" className={styles.btnPrimary}>Request Free Quote</a>
                <a href="tel:+18188871134" className={styles.btnSecondary}>Call (818) 887-1134</a>
              </div>
            </div>
            <div id="quote">
              <ServiceForm serviceType="dance" serviceLabel="dance studio" />
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
              Dance Studios
            </span>
          </div>
        </div>
      </nav>

      {/* 4. Why Choose Us Section */}
      <section id="why-us" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose Allstate for Your Dance Studio</h2>
            <div className={styles.sectionTitleDivider}></div>
            <p className={styles.sectionSubtitle}>
              We deliver specialized slip-resistant floor care and mirror cleaning to protect dancers and showcase form.
            </p>
          </div>

          <div className={styles.strengthsGrid}>
            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>🪵</span>
              </div>
              <h3 className={styles.strengthTitle}>Specialized Wood Floor Care</h3>
              <p className={styles.strengthText}>
                We clean hardwood floors with residue-free, pH-neutral products to maintain slip resistance.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>🪟</span>
              </div>
              <h3 className={styles.strengthTitle}>Mirror Wall Detailing</h3>
              <p className={styles.strengthText}>
                Streak-free cleaning of entire wall mirrors, removing handprints, fogging, and dust.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>🛡️</span>
              </div>
              <h3 className={styles.strengthTitle}>Ballet Barre Disinfection</h3>
              <p className={styles.strengthText}>
                Wiping wood and metal handrails with EPA-registered disinfectants after every shift.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>📻</span>
              </div>
              <h3 className={styles.strengthTitle}>Sound System Dusting</h3>
              <p className={styles.strengthText}>
                Careful dry-microfiber dusting of speakers, audio mixers, DJ booths, and electronic control setups.
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
              <h2>Dancer Safety Depends on Specialized Floor Care</h2>
              <p>
                In dance and performing arts studios, the floor is the most critical asset. Hardwood, marley, and composite dance floors must be kept free of dust, grit, and residues. Standard household floor chemicals leave waxy layers that make wood slick, posing immediate safety hazards for dancers.
              </p>
              <p>
                Since 1981, Allstate Building & Office Maintenance has supported dance schools, ballet companies, and fitness studios in Woodland Hills and Los Angeles. We use wood care methods to protect your floor investment.
              </p>
              
              <h3>Mirrors & High-Touch Sanitation</h3>
              <p>
                Studio mirror walls are central to alignment and instruction, but they easily collect sweat, vapor, and prints. Our mirror cleaning is designed for absolute clarity:
              </p>
              <ul>
                <li>Applying lint-free microfiber glass cloths to eliminate smudges.</li>
                <li>Hygienically sanitizing ballet barres, yoga blocks, and resistance bands.</li>
                <li>Deep-cleaning locker facilities, showers, and public drinking fountains.</li>
                <li>Vacuuming rugs in waiting lounges and clearing entrance glass doors.</li>
              </ul>

              <h3>Adapting to Class Breaks</h3>
              <p>
                We coordinate around your dance class schedules. Whether you require night cleanings after classes conclude, or day porters to tidy up during peak afternoon breaks, we adjust our operations to ensure zero disruption.
              </p>
            </div>
            
            <div className={styles.proseImageCol}>
              <img
                src="/dance.jpg"
                alt="Dance studio interior with mirrors and barres"
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
            <h2 className={styles.sectionTitle}>Standard Cleaners vs. Allstate Studio Standard</h2>
            <div className={styles.sectionTitleDivider}></div>
            <p className={styles.sectionSubtitle}>
              Compare standard residential cleaner results against our specialized studio care.
            </p>
          </div>

          <div className={styles.comparisonContainer}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th className={styles.th}>Cleaning Aspect</th>
                  <th className={styles.th}>Generic Janitorial Services</th>
                  <th className={styles.thPrimary}>Allstate Studio Program</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.tr}>
                  <td className={styles.td}>Hardwood Mopping Chemicals</td>
                  <td className={styles.td}>Standard soap or bleach solutions</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> pH-balanced wood cleaners (no wax/residue)
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Wall Mirror Detailing</td>
                  <td className={styles.td}>Casual paper towel wipe (leaves lint)</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> Premium micro-filament towels for total clarity
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Ballet Barre Care</td>
                  <td className={styles.td}>Dusting only</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> Disinfection scrubbing of all wood & metal handrails
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Acoustics & Audio Dusting</td>
                  <td className={styles.td}>Neglected or roughly wiped</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> Dry microfiber dusting of electronics & speakers
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Liability Protection</td>
                  <td className={styles.td}>Varying coverage limits</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> Fully insured and bonded crews for safety assurance
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
            <h2 className={styles.sectionTitle}>How We Onboard Your Studio</h2>
            <div className={styles.sectionTitleDivider}></div>
            <p className={styles.sectionSubtitle}>
              A simple, planned transition process to adapt to your classes and facility.
            </p>
          </div>

          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.processNum}>01</div>
              <h3 className={styles.processHeading}>Consultation</h3>
              <p className={styles.processText}>
                We discuss class hours, student counts, floor systems, and specific material rules.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNum}>02</div>
              <h3 className={styles.processHeading}>Studio Walkthrough</h3>
              <p className={styles.processText}>
                Our manager evaluates wood coatings, mirror volumes, audio console setups, and restrooms.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNum}>03</div>
              <h3 className={styles.processHeading}>Custom Checklist</h3>
              <p className={styles.processText}>
                We define daily wood-care checks, mirror wiping schedules, and deep-clean intervals.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNum}>04</div>
              <h3 className={styles.processHeading}>Crew Training</h3>
              <p className={styles.processText}>
                Our cleaners are trained on pH wood-care formulas, mirror detailing, and electronic safety.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNum}>05</div>
              <h3 className={styles.processHeading}>Quality Audits</h3>
              <p className={styles.processText}>
                We maintain active communication with your studio managers to keep your floors safe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA High-Impact Banner */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Ready to Make Your Studio Floors Shine Safely?</h2>
          <p className={styles.ctaText}>
            Provide your dancers with the safe, slip-resistant surface they deserve. Contact Allstate Building & Office Maintenance today.
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
              Find immediate answers regarding our studio cleaning practices, scheduling, and safety protocols.
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
                <a href="/dance-studio-janitorial-services" className={styles.footerLink}>Dance Studio Cleaning</a>
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
