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
  const canonicalUrl = `${protocol}://${host}/school-cleaning-services`;

  return {
    title: "School & Educational Facility Cleaning | Woodland Hills | Allstate",
    description: "Classroom sanitization, corridor stripping & waxing, HEPA air quality vacuuming, and child-safe cleaning in Woodland Hills & Los Angeles. Trusted since 1981.",
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const faqs = [
  {
    q: "Are the chemicals you use safe for children and students?",
    a: "Yes. Allstate Building & Office Maintenance prioritizes child-safe, non-toxic cleaning products. We use Green Seal and EcoLogo certified sanitizers that kill pathogens without leaving volatile organic compounds (VOCs) or toxic chemical residue."
  },
  {
    q: "How do you maintain high-traffic school hallways and corridors?",
    a: "We perform complete floor restoration, including corridor scrubbing, stripping, waxing, and high-gloss buffing. Our high-durability polymers protect VCT and terrazzo floors from scuffs and heavy student traffic."
  },
  {
    q: "Are all your school cleaning crew members background-checked?",
    a: "Yes. Every member of our staff undergoes thorough background checks, identity verification, and screening before deployment, ensuring security on your school premises."
  },
  {
    q: "Do you clean school restrooms, locker rooms, and cafeterias?",
    a: "Absolutely. We apply virucidal sanitizers in cafeterias, clean food prep benches, scrub restroom grout lines, and sanitize locker rooms, preventing the spread of germs and odors."
  },
  {
    q: "Can you schedule deep cleanings during school holidays and summer breaks?",
    a: "Yes. We offer complete scheduling flexibility. We coordinates with school districts for summer deep cleans, winter breaks, weekend carpet extraction, and daily evening janitorial services."
  }
];

export default function SchoolCleaningPage() {
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
            src="/school.jpg"
            alt="School classroom with clean desks, chairs, and blackboard"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <div>
              <div className={styles.heroBadge}>
                <span className={styles.heroBadgePulse}></span>
                Child-Safe & HEPA Dusted Environments
              </div>
              <h1 className={styles.heroTitle}>
                School & Educational <br />
                <span className={styles.heroTitleGradient}>Facility Cleaning</span>
              </h1>
              <p className={styles.heroTextBordered}>
                Classroom disinfection, corridor waxing, and high-efficiency HEPA air filtration. Allstate Building & Office Maintenance delivers safe, healthy learning spaces since 1981.
              </p>
              <div className={styles.heroBtns}>
                <a href="#quote" className={styles.btnPrimary}>Request Free Quote</a>
                <a href="tel:+18188871134" className={styles.btnSecondary}>Call (818) 887-1134</a>
              </div>
            </div>
            <div id="quote">
              <ServiceForm serviceType="schools" serviceLabel="school facility" />
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
              School Cleaning
            </span>
          </div>
        </div>
      </nav>

      {/* 4. Why Choose Us Section */}
      <section id="why-us" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose Allstate for Your School</h2>
            <div className={styles.sectionTitleDivider}></div>
            <p className={styles.sectionSubtitle}>
              We deliver green-certified, thorough sanitation checklists that protect both students and educators.
            </p>
          </div>

          <div className={styles.strengthsGrid}>
            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>🍎</span>
              </div>
              <h3 className={styles.strengthTitle}>Classroom Disinfection</h3>
              <p className={styles.strengthText}>
                We sanitize desks, chairs, handles, and shared learning supplies to suppress germ cycles.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>✨</span>
              </div>
              <h3 className={styles.strengthTitle}>Corridor Strip & Wax</h3>
              <p className={styles.strengthText}>
                We restore hallways, cafeterias, and lobbies with high-grade slip-resistant floor seals.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>💨</span>
              </div>
              <h3 className={styles.strengthTitle}>HEPA Air Filtration</h3>
              <p className={styles.strengthText}>
                Our commercial HEPA vacuums trap 99.97% of fine dust, pollen, and classroom allergens.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>🌱</span>
              </div>
              <h3 className={styles.strengthTitle}>Child-Safe Detergents</h3>
              <p className={styles.strengthText}>
                We clean with EcoLogo and Green Seal certified solutions, avoiding toxic chemical residues.
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
              <h2>Creating Safe, Germ-Free Learning Environments</h2>
              <p>
                Schools and educational centers are high-density, high-traffic spaces where viruses and bacteria can spread rapidly. Student attendance and teacher wellness rely heavily on rigorous, systematic sanitizing protocols that cover classrooms, cafeterias, and restrooms.
              </p>
              <p>
                Since 1981, Allstate Building & Office Maintenance has serviced public and private schools, daycare facilities, and higher education halls in Woodland Hills and Los Angeles. We combine child-safe cleaning agents with powerful floor preservation technologies.
              </p>
              
              <h3>Restroom & Locker Room Deep Cleans</h3>
              <p>
                High-humidity locker rooms and heavily used student restrooms require more than general wiping. Our disinfection process includes:
              </p>
              <ul>
                <li>Scrubbing tiles, grout lines, and bathroom sinks with germicides.</li>
                <li>Sterilizing toilet seats, partition handles, and faucet controls.</li>
                <li>Restocking hand towels, toilet tissue rolls, and soap dispensers.</li>
                <li>Treating drain lines to prevent blockages and persistent odors.</li>
              </ul>

              <h3>Summer & Holiday Deep-Cleaning Services</h3>
              <p>
                During school break cycles, we provide schools with heavy carpet extraction, window washing, and wall sanitizing. We restore floor VCT tiles and strip corridors so your facility is fresh, bright, and ready before the first bell rings.
              </p>
            </div>
            
            <div className={styles.proseImageCol}>
              <img
                src="/school.jpg"
                alt="Corridor floor inside a school facility"
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
            <h2 className={styles.sectionTitle}>Basic Dusting vs. Allstate Educational Cleaning</h2>
            <div className={styles.sectionTitleDivider}></div>
            <p className={styles.sectionSubtitle}>
              Compare the values of specialized school-certified cleaners against basic office crews.
            </p>
          </div>

          <div className={styles.comparisonContainer}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th className={styles.th}>Feature</th>
                  <th className={styles.th}>Basic Commercial Cleaners</th>
                  <th className={styles.thPrimary}>Allstate School Program</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.tr}>
                  <td className={styles.td}>Classroom Desk Care</td>
                  <td className={styles.td}>Light dusting or casual wipes</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> Virucidal wiping of all surfaces & touchpoints
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Floor Corridor Treatment</td>
                  <td className={styles.td}>Standard vacuum & sweep</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> Rotary stripping, waxing, & slip-resistant finish
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Chemical Safety</td>
                  <td className={styles.td}>Industrial bleach-heavy products</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> 100% EcoLogo/Green Seal certified, non-toxic products
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Vacuum Filtration</td>
                  <td className={styles.td}>Standard bag filters (spreads dust)</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> HEPA-rated vacuums trapping 99.97% of allergens
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Staff Verification</td>
                  <td className={styles.td}>Self-supervised workers</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> Fully background-screened, supervisor-audited teams
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
            <h2 className={styles.sectionTitle}>How We Onboard Your School</h2>
            <div className={styles.sectionTitleDivider}></div>
            <p className={styles.sectionSubtitle}>
              A secure, detailed transition plan that conforms to school boards and holiday schedules.
            </p>
          </div>

          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.processNum}>01</div>
              <h3 className={styles.processHeading}>Consultation</h3>
              <p className={styles.processText}>
                We discuss class sizes, schedules, eco-friendly product demands, and budgets.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNum}>02</div>
              <h3 className={styles.processHeading}>Site Assessment</h3>
              <p className={styles.processText}>
                Our operations manager evaluates corridor tile flooring, gym floors, classrooms, and cafeteria areas.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNum}>03</div>
              <h3 className={styles.processHeading}>Checklist Design</h3>
              <p className={styles.processText}>
                We define daily sanitation checklists, classroom rules, and deep-clean holiday plans.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNum}>04</div>
              <h3 className={styles.processHeading}>Staff Briefing</h3>
              <p className={styles.processText}>
                Cleaners are briefed on campus-specific rules, safety procedures, and background clearances.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNum}>05</div>
              <h3 className={styles.processHeading}>Inspection Audits</h3>
              <p className={styles.processText}>
                We run weekly quality check-ins to make sure all learning environments are in immaculate shape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA High-Impact Banner */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Ready to Create a Healthy Environment for Your Students?</h2>
          <p className={styles.ctaText}>
            Protect your learning community with professional educational janitorial care. Contact Allstate Building & Office Maintenance today.
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
              Find immediate answers regarding our school cleaning practices, scheduling, and safety protocols.
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
                <a href="/school-cleaning-services" className={styles.footerLink}>School Cleaning</a>
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
