import React from "react";
import { Metadata } from "next";
import styles from "./page.module.css";
import ServiceForm from "../services/ServiceForm";
import Header from "../services/Header";
import ServiceFaq from "../services/ServiceFaq";

import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get("host") || "allstatebuildingmaintenance.com";
  const protocol = headersList.get("x-forwarded-proto") || "https";
  const canonicalUrl = `${protocol}://${host}/car-dealerships-janitorial-services`;

  return {
    title: "Car Dealership Showroom Cleaning & Polish | Woodland Hills | Allstate",
    description: "Premium auto showroom cleaning, high-gloss floor polishing, and storefront display window detailing in Woodland Hills & Los Angeles. Trusted since 1981.",
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const faqs = [
  {
    q: "How do you protect showroom vehicles during cleaning?",
    a: "Vehicle safety is our absolute priority. Our cleaning crews undergo strict training on safety buffers, avoiding contact with vehicles, and using non-marking hoses and low-profile equipment. We are fully insured and bonded to guarantee protection."
  },
  {
    q: "What scheduling options do you offer for dealerships?",
    a: "We offer complete flexibility, operating 24/7. Most dealerships opt for overnight or early morning cleanings so that high-gloss floors and display windows are dry, sparkling, and ready before the morning sales rush."
  },
  {
    q: "What types of showroom flooring do you treat?",
    a: "We deep-clean, wax, strip, and polish all showroom flooring types, including high-gloss epoxy resins, polished concrete, porcelain tile, terrazzo, and vinyl. We use professional rotary buffers to maintain a pristine, mirror-like finish."
  },
  {
    q: "Do you clean the large display windows and glass entries?",
    a: "Yes. Exterior display glass is vital for attracting drive-by buyers. We provide streak-free squeegee cleaning for all storefront window walls, glass doors, glass office partitions, and mirrors."
  },
  {
    q: "Do we need to supply our own cleaning chemicals or machines?",
    a: "No. Allstate Building & Office Maintenance supplies all professional janitorial equipment (commercial floor scrubbers, high-speed buffers, HEPA vacuums) and EPA-registered, eco-friendly sanitizing solutions at no extra cost."
  }
];

export default function CarDealershipCleaningPage() {
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
            src="/dealership.jpg"
            alt="Car showroom interior showing clean floors and reflective display glass"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <div>
              <div className={styles.heroBadge}>
                <span className={styles.heroBadgePulse}></span>
                Available in Woodland Hills & LA County
              </div>
              <h1 className={styles.heroTitle}>
                Car Dealership & <br />
                <span className={styles.heroTitleGradient}>Showroom Cleaning</span>
              </h1>
              <p className={styles.heroTextBordered}>
                Pristine showroom display window detailing, tire mark removal, and high-gloss floor polishing. Allstate Building & Office Maintenance has delivered professional commercial care since 1981.
              </p>
              <div className={styles.heroBtns}>
                <a href="#quote" className={styles.btnPrimary}>Request Free Quote</a>
                <a href="tel:+18188871134" className={styles.btnSecondary}>Call (818) 887-1134</a>
              </div>
            </div>
            <div id="quote">
              <ServiceForm serviceType="dealerships" serviceLabel="dealership" />
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
              Car Dealership Cleaning
            </span>
          </div>
        </div>
      </nav>

      {/* 4. Why Choose Us Section */}
      <section id="why-us" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose Allstate for Your Showroom</h2>
            <div className={styles.sectionTitleDivider}></div>
            <p className={styles.sectionSubtitle}>
              We deliver a premium presentation standard that keeps your clients focused on the vehicles, not the dirt.
            </p>
          </div>

          <div className={styles.strengthsGrid}>
            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>✨</span>
              </div>
              <h3 className={styles.strengthTitle}>Taller-Grade Floor Care</h3>
              <p className={styles.strengthText}>
                Equipped with rotary buffers and industrial scrubbers to strip tire marks, grease, and dirt from high-gloss epoxy and porcelain.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>🪟</span>
              </div>
              <h3 className={styles.strengthTitle}>Streak-Free Display Glass</h3>
              <p className={styles.strengthText}>
                Crystal-clear window cleaning of large glass fronts, entryways, and sales offices to draw in drive-by buyers.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>🛡️</span>
              </div>
              <h3 className={styles.strengthTitle}>Safety-Trained Crew</h3>
              <p className={styles.strengthText}>
                Every crew member is background-checked, insured, and trained on strict vehicle-clearance safety boundaries.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>📅</span>
              </div>
              <h3 className={styles.strengthTitle}>Flexible Off-Hours Plan</h3>
              <p className={styles.strengthText}>
                Janitorial schedules tailored entirely around your business hours. Overnight operations ensure your floors are dry by opening.
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
              <h2>First Impressions Sell Cars</h2>
              <p>
                In the automotive sales industry, presentation is the cornerstone of trust. A customer’s perception of your inventory is heavily influenced by the environment surrounding it. Smudged entrance doors, stained tiles, or dust-coated fixtures detract from the premium value of your vehicles.
              </p>
              <p>
                Since 1981, Allstate Building & Office Maintenance has provided dealerships with commercial floor-care programs and janitorial solutions. We specialize in maintaining high-traffic automobile retail centers, keeping common lobbies, customer restrooms, and finance offices in immaculate shape.
              </p>
              
              <h3>Showroom Floor Restoration & Buffing</h3>
              <p>
                dealership floors endure a unique set of challenges: heavy car weights, tire scuffs, engine oil leaks, and constant pedestrian traffic. To maintain that mirror-like look, we apply:
              </p>
              <ul>
                <li>Industrial scrubbers with specialized detergent to pull tire scuffs.</li>
                <li>High-speed rotary burnishers for epoxy, concrete, and terrazzo.</li>
                <li>Careful cleaning boundaries so no equipment gets close to vehicle bodies.</li>
                <li>Eco-friendly sealant coats to defend your floors from upcoming stains.</li>
              </ul>

              <h3>Complete Facility Presentation</h3>
              <p>
                We go beyond the showroom floor. Our commercial cleaning services include complete sanitization of customer waiting lounges, coffee stations, service bays, administrative desks, and high-visibility glass partitions. Let our professionals handle the details so your sales team can focus on closing deals.
              </p>
            </div>
            
            <div className={styles.proseImageCol}>
              <img
                src="/dealership.jpg"
                alt="Polished high-gloss dealership showroom floor reflecting modern cars"
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
            <h2 className={styles.sectionTitle}>Standard Cleaners vs. Allstate Commercial</h2>
            <div className={styles.sectionTitleDivider}></div>
            <p className={styles.sectionSubtitle}>
              See the difference a specialized commercial contractor makes for your dealership's brand image.
            </p>
          </div>

          <div className={styles.comparisonContainer}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th className={styles.th}>Cleaning Aspect</th>
                  <th className={styles.th}>Generic Janitorial Services</th>
                  <th className={styles.thPrimary}>Allstate Premium Program</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.tr}>
                  <td className={styles.td}>Showroom Floor Treatment</td>
                  <td className={styles.td}>Basic damp mop & sweep</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> Rotary burnish & tire-mark extraction
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Display Storefront Glass</td>
                  <td className={styles.td}>Occasional spray-bottle wipe</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> Streak-free professional squeegee detail
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Vehicle Clearance Safety</td>
                  <td className={styles.td}>Standard training</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> Strict clearance rules & soft-bumper equipment
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Personnel Screening</td>
                  <td className={styles.td}>Casual or sub-contracted staff</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> 100% background-checked, insured & bonded
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Oversight & Verification</td>
                  <td className={styles.td}>Self-audited by cleaner</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> Supervisor 10-step checklist inspection
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
            <h2 className={styles.sectionTitle}>How We Onboard Your Showroom</h2>
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
                Submit our simple online form or call us directly. We'll verify your space parameters and schedule preferences.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNum}>02</div>
              <h3 className={styles.processHeading}>Site Walkthrough</h3>
              <p className={styles.processText}>
                Our manager visits your dealership to evaluate floor compounds, traffic areas, and glass window volumes.
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
          <h2 className={styles.ctaTitle}>Ready for a Spotless, Reflective Showroom?</h2>
          <p className={styles.ctaText}>
            Give your vehicles the background they deserve. Contact Allstate Building & Office Maintenance today for a free walkthrough.
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
              Find immediate answers regarding our dealership cleaning practices, scheduling, and safety protocols.
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
