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
  const canonicalUrl = `${protocol}://${host}/church-cleaning-services`;

  return {
    title: "Churches, Synagogues & Temples Cleaning | Woodland Hills | Allstate",
    description: "Sanctuary high dusting, delicate woodwork care, fellowship hall sanitizing, and flexible worship-hour cleaning schedules in Woodland Hills & LA. Since 1981.",
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const faqs = [
  {
    q: "How do you protect delicate woodwork, altars, and historic relics?",
    a: "We train our staff to use specialized, pH-neutral wood cleaners and soft microfiber cloths. We avoid harsh abrasive chemicals and pressure, preserving the natural finish of pews, altars, and religious decorations."
  },
  {
    q: "Can you clean high-altitude sanctuary rafters, ceilings, and chandeliers?",
    a: "Yes. Our team is equipped with specialized extendable dusting rods and high-reach vacuums to clean sanctuary ceilings, rafters, lighting panels, and high window frames safely from the ground."
  },
  {
    q: "Are you able to clean around variable schedules, holidays, and special services?",
    a: "Absolutely. We coordinates closely with your administration team. We adjust cleaning shifts around weekend worship services, weekday study groups, weddings, funerals, and high holiday cycles, ensuring your space is always ready."
  },
  {
    q: "Do you sanitize fellowship halls, nurseries, and community kitchens?",
    a: "Yes. We clean all auxiliary structures. This includes high-touch sanitization in nurseries to protect children, deep kitchen degreasing, and trash clearing in fellowship halls."
  },
  {
    q: "Do you offer green or fragrance-free cleaning options for sensitive members?",
    a: "Yes. Allstate Building & Office Maintenance uses EcoLogo and Green Seal certified products. We can design a completely fragrance-free and dye-free cleaning schedule for members with respiratory sensitivities."
  }
];

export default function ReligiousFacilitiesPage() {
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
            src="/religious.jpg"
            alt="Sanctuary interior showing neat wooden pews and lighting"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <div>
              <div className={styles.heroBadge}>
                <span className={styles.heroBadgePulse}></span>
                Delicate Wood Care & Respectful Upkeep
              </div>
              <h1 className={styles.heroTitle}>
                Churches, Synagogues <br />
                <span className={styles.heroTitleGradient}>& Temples Cleaning</span>
              </h1>
              <p className={styles.heroTextBordered}>
                Sacred woodwork preservation, high-altitude sanctuary dusting, and community kitchen hygiene. Allstate Building & Office Maintenance provides respectful, flexible care since 1981.
              </p>
              <div className={styles.heroBtns}>
                <a href="#quote" className={styles.btnPrimary}>Request Free Quote</a>
                <a href="tel:+18188871134" className={styles.btnSecondary}>Call (818) 887-1134</a>
              </div>
            </div>
            <div id="quote">
              <ServiceForm serviceType="religious" serviceLabel="religious facility" />
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
              Religious Facilities
            </span>
          </div>
        </div>
      </nav>

      {/* 4. Why Choose Us Section */}
      <section id="why-us" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose Allstate for Your House of Worship</h2>
            <div className={styles.sectionTitleDivider}></div>
            <p className={styles.sectionSubtitle}>
              We deliver respectful, thorough janitorial support tailored to the unique values of your spiritual community.
            </p>
          </div>

          <div className={styles.strengthsGrid}>
            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>🪵</span>
              </div>
              <h3 className={styles.strengthTitle}>Sacred Woodwork Care</h3>
              <p className={styles.strengthText}>
                We clean and polish altars, handrails, pews, and wooden carvings using dedicated, non-abrasive products.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>🕊️</span>
              </div>
              <h3 className={styles.strengthTitle}>High Sanctuary Dusting</h3>
              <p className={styles.strengthText}>
                We remove dust, cobwebs, and dirt from cathedral ceilings, chandeliers, rafters, and high organ pipe arrays.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>🍎</span>
              </div>
              <h3 className={styles.strengthTitle}>Kitchen & Nursery Hygiene</h3>
              <p className={styles.strengthText}>
                Complete sanitization of fellowship kitchens, cafeteria zones, and children's nursery play spaces.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>📅</span>
              </div>
              <h3 className={styles.strengthTitle}>Flexible Scheduling</h3>
              <p className={styles.strengthText}>
                Janitorial shifts planned around your worship hours, holiday calendars, study schedules, and special events.
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
              <h2>Preserving Sacred Spaces for Community Worship</h2>
              <p>
                A house of worship is more than a building; it's a sacred home for community gathering, spiritual reflection, and family milestones. Maintaining a tidy, dust-free sanctuary and sterile community spaces is key to welcoming congregation members and maintaining historical fixtures.
              </p>
              <p>
                Since 1981, Allstate Building & Office Maintenance has supported churches, synagogues, temples, and mosque centers in Woodland Hills and Los Angeles. We provide respectful, quiet, and detailed cleaning services matching your community's standards.
              </p>
              
              <h3>Meticulous Sanctuary Care</h3>
              <p>
                Sanctuaries feature delicate materials that require custom care. Our experienced crews apply careful techniques for every asset:
              </p>
              <ul>
                <li>Damp-dusting and polishing pews, pulpits, and benches.</li>
                <li>Vacuuming and carpet extraction along sanctuary aisle paths.</li>
                <li>Streak-free window detailing on stained glass and entries.</li>
                <li>Polishing brass fixtures, candle stands, and decorative panels.</li>
              </ul>

              <h3>Hygienic Fellowship & Children's Areas</h3>
              <p>
                Fellowship halls, nurseries, and public restrooms endure heavy traffic on weekends and holidays. We sterilize toys, changing tables, and counter spaces in children's areas, and deep-clean food prep spaces in community kitchens to prevent foodborne illness.
              </p>
            </div>
            
            <div className={styles.proseImageCol}>
              <img
                src="/religious.jpg"
                alt="Neat sanctuary inside a chapel"
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
            <h2 className={styles.sectionTitle}>Casual Cleaning vs. Allstate Dedicated Sanctuary Care</h2>
            <div className={styles.sectionTitleDivider}></div>
            <p className={styles.sectionSubtitle}>
              Compare standard residential-style cleaners against our professional commercial program.
            </p>
          </div>

          <div className={styles.comparisonContainer}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th className={styles.th}>Upkeep Aspect</th>
                  <th className={styles.th}>Volunteer or Basic Cleaners</th>
                  <th className={styles.thPrimary}>Allstate Dedicated Care</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.tr}>
                  <td className={styles.td}>Antique Wood Treatment</td>
                  <td className={styles.td}>Standard spray-bottle multi-cleaner</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> pH-balanced premium wood oils & conditioning
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>High Ceilings & Lighting</td>
                  <td className={styles.td}>Often neglected due to height</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> High-reach extendable dusting & rafter cleaning
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Nursery Disinfection</td>
                  <td className={styles.td}>Basic surface wiping</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> Complete organic sanitizing of toys & surfaces
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Scheduling Alignment</td>
                  <td className={styles.td}>Rigid weekday-only slots</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> 24/7 rescheduling to match worship calendars
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Liability Protection</td>
                  <td className={styles.td}>Varying insurance details</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> Fully insured and bonded staff for historic properties
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
            <h2 className={styles.sectionTitle}>How We Onboard Your Sanctuary</h2>
            <div className={styles.sectionTitleDivider}></div>
            <p className={styles.sectionSubtitle}>
              A respectful, planned onboarding to fit your community's timeline and budget.
            </p>
          </div>

          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.processNum}>01</div>
              <h3 className={styles.processHeading}>Consultation</h3>
              <p className={styles.processText}>
                We discuss worship calendars, community activities, delicate materials, and budgets.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNum}>02</div>
              <h3 className={styles.processHeading}>Walkthrough</h3>
              <p className={styles.processText}>
                Our manager inspects sanctuary layouts, wood carvings, high rafters, and kitchens.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNum}>03</div>
              <h3 className={styles.processHeading}>Custom Plan</h3>
              <p className={styles.processText}>
                We define daily, weekly, and holiday checklists to maintain every zone of your property.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNum}>04</div>
              <h3 className={styles.processHeading}>Crew Briefing</h3>
              <p className={styles.processText}>
                Our cleaners are trained on respectful behavior, sanctuary boundaries, and wood preservation.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNum}>05</div>
              <h3 className={styles.processHeading}>Quality Audits</h3>
              <p className={styles.processText}>
                We maintain active communication with your administrator to ensure total satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA High-Impact Banner */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Ready to Create a Warm, Welcoming House of Worship?</h2>
          <p className={styles.ctaText}>
            Provide your community with a pristine environment. Contact Allstate Building & Office Maintenance today for a free walkthrough.
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
              Find immediate answers regarding our sanctuary cleaning practices, scheduling, and safety protocols.
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
              We proudly provide church and temple sanitizing and janitorial maintenance across the San Fernando Valley and Greater Los Angeles.
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
                <a href="/church-cleaning-services" className={styles.footerLink}>Religious Facilities</a>
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
