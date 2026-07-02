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
  const canonicalUrl = `${protocol}://${host}/shopping-mall-cleaning`;

  return {
    title: "Shopping Mall & Retail Center Cleaning | Woodland Hills | Allstate",
    description: "Atrium sweeps, food court sanitization, escalator glass detailing, and high-gloss floor polishing in Woodland Hills & Los Angeles. Trusted since 1981.",
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const faqs = [
  {
    q: "How do you clean large retail areas during active shopping hours?",
    a: "We deploy discrete, professionally uniformed day-porters who focus on trash removal, spill cleaning, restroom restocking, and entrance glass wiping, ensuring zero friction for mall visitors."
  },
  {
    q: "What is your cleaning protocol for mall food courts?",
    a: "We maintain regular cycles. Our staff wipes tables with sanitizing detergents, empties waste bins, sweeps floor debris, and deep-cleans trash enclosures, preventing pests and bacteria build-up."
  },
  {
    q: "Do you clean high glass panes, escalators, and atrium structures?",
    a: "Yes. Allstate Building & Office Maintenance specializes in escalator glass detailing, handrail sanitation, and high-altitude window cleaning using specialized poles and lifts."
  },
  {
    q: "How do you maintain high-gloss mall flooring?",
    a: "We use professional walk-behind floor scrubbers and high-speed burnishers during overnight shifts. We apply high-solid polymer waxes to protect terrazzo, marble, and tile surfaces from foot traffic."
  },
  {
    q: "What scheduling options do you offer for major retail centers?",
    a: "We offer 24/7 support. Heavy floor polishing and window washing are scheduled overnight when the mall is closed, while day-porter services are available during active hours."
  }
];

export default function ShoppingMallCleaningPage() {
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
            src="/mall.jpg"
            alt="Polished shopping mall hallway showing reflecting display windows and clean floors"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <div>
              <div className={styles.heroBadge}>
                <span className={styles.heroBadgePulse}></span>
                Day Porters & Night Floor Restoration
              </div>
              <h1 className={styles.heroTitle}>
                Shopping Mall & <br />
                <span className={styles.heroTitleGradient}>Retail Cleaning</span>
              </h1>
              <p className={styles.heroTextBordered}>
                Food court sanitation, high-gloss floor polishing, and crystal-clear storefront window washing. Allstate Building & Office Maintenance keeps your retail center shining since 1981.
              </p>
              <div className={styles.heroBtns}>
                <a href="#quote" className={styles.btnPrimary}>Request Free Quote</a>
                <a href="tel:+18188871134" className={styles.btnSecondary}>Call (818) 887-1134</a>
              </div>
            </div>
            <div id="quote">
              <ServiceForm serviceType="malls" serviceLabel="retail facility" />
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
              Shopping Mall Cleaning
            </span>
          </div>
        </div>
      </nav>

      {/* 4. Why Choose Us Section */}
      <section id="why-us" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose Allstate for Your Retail Center</h2>
            <div className={styles.sectionTitleDivider}></div>
            <p className={styles.sectionSubtitle}>
              We deliver premium appearance standards that attract customers and protect retail leases.
            </p>
          </div>

          <div className={styles.strengthsGrid}>
            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>🧹</span>
              </div>
              <h3 className={styles.strengthTitle}>Atrium Sweeping</h3>
              <p className={styles.strengthText}>
                Continuous sweeping, trash collection, and entrance door detailing to keep main corridors spotless.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>🪟</span>
              </div>
              <h3 className={styles.strengthTitle}>Escalator & Railing Detailing</h3>
              <p className={styles.strengthText}>
                We clean handrails, metal framing, glass banisters, and escalator side panels for a modern look.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>🍔</span>
              </div>
              <h3 className={styles.strengthTitle}>Food Court Management</h3>
              <p className={styles.strengthText}>
                Wiping tables, sweeping food debris, and sanitizing trash bins to maintain dining comfort.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>✨</span>
              </div>
              <h3 className={styles.strengthTitle}>High-Gloss Restrooms</h3>
              <p className={styles.strengthText}>
                Hourly restroom inspections, sanitizing high-touch points, and stocking essential restroom items.
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
              <h2>Making First Impressions in Retail Real Estate</h2>
              <p>
                In the retail sector, aesthetics are directly linked to foot traffic and tenant leasing values. Customers expect a clean, bright, and hygienic environment when they shop. Sticky floors, dusty glass panels, or messy food court spaces push consumers away and degrade retail brands.
              </p>
              <p>
                Since 1981, Allstate Building & Office Maintenance has supported malls, lifestyle centers, and retail parks in Woodland Hills and Greater Los Angeles. We supply day-porters and night floor maintenance crews to manage large-scale properties.
              </p>
              
              <h3>Overnight Floor Polishing & Buffing</h3>
              <p>
                Retail floors sustain heavy pedestrian wear. To maintain that high-gloss, premium finish, our off-hours crews perform systematic floor restoration:
              </p>
              <ul>
                <li>Scrubbing stone, ceramic tile, and concrete surfaces.</li>
                <li>Applying high-solids polymer finishes to seal against scuffs.</li>
                <li>Burnishing marble and terrazzo tile to restore high reflectivity.</li>
                <li>Deep-cleaning expansion joints and baseboards of dirt.</li>
              </ul>

              <h3>Hygienic Food Court & Dining Zones</h3>
              <p>
                Mall food courts are hotspots for bacteria and sticky residues. We sanitize table surfaces, clear trash receptacles, scrub dining floors, and sanitize food prep surrounds. We ensure your dining zone is clean and pleasant for every visitor.
              </p>
            </div>
            
            <div className={styles.proseImageCol}>
              <img
                src="/mall.jpg"
                alt="Polished floor inside a mall corridor"
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
            <h2 className={styles.sectionTitle}>Standard Janitorial vs. Allstate Mall Maintenance</h2>
            <div className={styles.sectionTitleDivider}></div>
            <p className={styles.sectionSubtitle}>
              See the difference specialized commercial mall maintenance makes for your property.
            </p>
          </div>

          <div className={styles.comparisonContainer}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th className={styles.th}>Service Detail</th>
                  <th className={styles.th}>Standard Janitorial Services</th>
                  <th className={styles.thPrimary}>Allstate Mall Program</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.tr}>
                  <td className={styles.td}>Atrium Floor Treatment</td>
                  <td className={styles.td}>Basic sweeping & mopping</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> Overnight rotary scrub & high-speed burnishing
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Food Court Services</td>
                  <td className={styles.td}>Light sweep & occasional wipe</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> Continuous sanitization cycles & trash emptying
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Escalator & Rail Glass</td>
                  <td className={styles.td}>Wiped only during deep cleans</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> Daily streak-free glass detailing & rail disinfection
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Restroom Coverage</td>
                  <td className={styles.td}>Cleaned once daily</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> Hourly Day-Porter checks & rigorous sanitizing
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Staffing Security</td>
                  <td className={styles.td}>Varying background standards</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> 100% background-checked, uniformed, and bonded staff
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
            <h2 className={styles.sectionTitle}>How We Onboard Your Retail Center</h2>
            <div className={styles.sectionTitleDivider}></div>
            <p className={styles.sectionSubtitle}>
              Our mall onboarding process guarantees smooth operations and customized day/night cleaning schedules.
            </p>
          </div>

          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.processNum}>01</div>
              <h3 className={styles.processHeading}>Consultation</h3>
              <p className={styles.processText}>
                We discuss layout sizes, day-porter demands, operating hours, and floor materials.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNum}>02</div>
              <h3 className={styles.processHeading}>Site Assessment</h3>
              <p className={styles.processText}>
                Our operations manager inspects atriums, food court tables, restrooms, and escalator setups.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNum}>03</div>
              <h3 className={styles.processHeading}>Checklist Customization</h3>
              <p className={styles.processText}>
                We construct a detailed hourly, daily, and night checklist tailored for your mall property.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNum}>04</div>
              <h3 className={styles.processHeading}>Crew Deployment</h3>
              <p className={styles.processText}>
                Uniformed, safety-trained porter and floor crews are deployed under active supervision.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNum}>05</div>
              <h3 className={styles.processHeading}>Quality Checks</h3>
              <p className={styles.processText}>
                We execute regular supervisor audits and reviews to guarantee your property remains pristine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA High-Impact Banner */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Ready to Elevate Your Mall's Visual Appeal?</h2>
          <p className={styles.ctaText}>
            Attract shoppers and keep retailers happy. Contact Allstate Building & Office Maintenance today for a free walkthrough.
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
              Find immediate answers regarding our retail cleaning practices, scheduling, and safety protocols.
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
                <a href="/shopping-mall-cleaning" className={styles.footerLink}>Mall Cleaning</a>
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
