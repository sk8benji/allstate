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
  const canonicalUrl = `${protocol}://${host}/industrial-manufacturing-janitorial-services`;

  return {
    title: "Industrial & Manufacturing Facility Cleaning | Woodland Hills | Allstate",
    description: "Heavy-duty industrial floor scrubbing, factory degreasing, and warehouse janitorial services in Woodland Hills & Los Angeles. Safety compliant since 1981.",
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const faqs = [
  {
    q: "What safety guidelines do your crews follow in industrial plants?",
    a: "Safety is our number one priority. Our crews are trained in OSHA general industry safety regulations, wear proper Personal Protective Equipment (PPE), adhere to hazard communication rules, and follow strict machinery clearance zones."
  },
  {
    q: "How do you handle heavy grease, oil build-up, and industrial floor tire scuffs?",
    a: "We deploy heavy-duty commercial walk-behind and ride-on floor scrubbers using industrial-strength degreasers. Our equipment and chemicals are designed to emulsify grease, strip scuffs, and leave slip-resistant surfaces."
  },
  {
    q: "Can you clean around high-value or sensitive production machinery?",
    a: "Yes. During our initial site walkthrough, we identify sensitive equipment and mark clear physical boundaries. We use soft-sided manual tools and keep motorized cleaning machinery well clear of production lines."
  },
  {
    q: "Can you work around our active production shifts to prevent downtime?",
    a: "Absolutely. We offer 24/7 scheduling. We can execute janitorial work during off-shifts, scheduled maintenance shut-downs, or weekends to ensure zero interruption to your active manufacturing operations."
  },
  {
    q: "Is your company fully insured for industrial environments?",
    a: "Yes. Allstate Building & Office Maintenance is fully insured with top of the line full spectrum insurance coverage and commercial bonding, providing full protection for major operations."
  }
];

export default function ManufacturingFacilitiesPage() {
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
            src="/manufacturing.jpg"
            alt="Industrial warehouse with polished concrete floors and storage racks"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <div>
              <div className={styles.heroBadge}>
                <span className={styles.heroBadgePulse}></span>
                Industrial Floor Care & Safety Protocols
              </div>
              <h1 className={styles.heroTitle}>
                Manufacturing & <br />
                <span className={styles.heroTitleGradient}>Industrial Cleaning</span>
              </h1>
              <p className={styles.heroTextBordered}>
                Heavy-duty degreasing, warehouse floor scrubbing, and high-clearance dust extraction. Allstate Building & Office Maintenance delivers robust industrial cleaning since 1981.
              </p>
              <div className={styles.heroBtns}>
                <a href="#quote" className={styles.btnPrimary}>Request Free Quote</a>
                <a href="tel:+18188871134" className={styles.btnSecondary}>Call (818) 887-1134</a>
              </div>
            </div>
            <div id="quote">
              <ServiceForm serviceType="manufacturing" serviceLabel="industrial facility" />
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
              Manufacturing Facilities
            </span>
          </div>
        </div>
      </nav>

      {/* 4. Why Choose Us Section */}
      <section id="why-us" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose Allstate for Your Industrial Facility</h2>
            <div className={styles.sectionTitleDivider}></div>
            <p className={styles.sectionSubtitle}>
              We deliver industrial-strength cleaning programs that prioritize safety, cleanliness, and operational uptime.
            </p>
          </div>

          <div className={styles.strengthsGrid}>
            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>⚙️</span>
              </div>
              <h3 className={styles.strengthTitle}>Safe Machinery Buffers</h3>
              <p className={styles.strengthText}>
                We clean safely around sensitive mechanical and electronics assemblies, establishing clear distance guidelines for our crews.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>🧹</span>
              </div>
              <h3 className={styles.strengthTitle}>Industrial Degreasing</h3>
              <p className={styles.strengthText}>
                Our commercial scrubbers remove grease, oil stains, carbon deposits, and forklift tire marks from high-traffic zones.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>🌫️</span>
              </div>
              <h3 className={styles.strengthTitle}>High-Clearance Dusting</h3>
              <p className={styles.strengthText}>
                We extract dust, cobwebs, and particulate residue from steel rafters, ventilation ducts, and high ceiling fixtures.
              </p>
            </div>

            <div className={styles.strengthCard}>
              <div className={styles.strengthIconContainer}>
                <span style={{ fontSize: "1.5rem" }}>🦺</span>
              </div>
              <h3 className={styles.strengthTitle}>Safety Pathway Clearing</h3>
              <p className={styles.strengthText}>
                We keep walkways, emergency exit paths, loading docks, and pedestrian zones clearly washed and free of debris.
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
              <h2>Optimized Plant Safety Starts with Cleanliness</h2>
              <p>
                In industrial manufacturing, clean spaces are directly tied to production efficiency and workplace safety. Oil slicks, slippery dust layers, and cluttered pathways pose immediate slip-and-fall hazards, while dirt and particulate accumulation can interfere with machinery operation.
              </p>
              <p>
                Since 1981, Allstate Building & Office Maintenance has provided industrial plants, assembly rooms, warehouses, and shipping docks with custom janitorial plans. We understand the specific regulatory, safety, and logistical requirements of heavy commercial workspaces.
              </p>
              
              <h3>Heavy-Duty Floor Maintenance</h3>
              <p>
                Industrial flooring takes a beating from heavy equipment, pallets, and chemicals. Our floor preservation program keeps concrete and epoxy surfaces safe and durable:
              </p>
              <ul>
                <li>High-pressure mechanical scrubbing to lift oil leaks and dirt.</li>
                <li>Application of non-slip floor seals and traffic stripe highlights.</li>
                <li>Manual details around structural support beams and equipment bases.</li>
                <li>Debris removal on loading bays, ramps, and outdoor staging corridors.</li>
              </ul>

              <h3>Minimizing Facility Interruption</h3>
              <p>
                We coordinate closely with your plant managers to integrate our cleaning schedules during low-activity windows or plant shutdowns. Our supervisors conduct strict safety briefings before every shift to ensure absolute compliance with your facility's safety guidelines.
              </p>
            </div>
            
            <div className={styles.proseImageCol}>
              <img
                src="/manufacturing.jpg"
                alt="Modern clean manufacturing facility warehouse floor"
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
            <h2 className={styles.sectionTitle}>Basic Sweeping vs. Allstate Industrial Clean</h2>
            <div className={styles.sectionTitleDivider}></div>
            <p className={styles.sectionSubtitle}>
              Compare the results of typical cleaning crews against our industrial-standard program.
            </p>
          </div>

          <div className={styles.comparisonContainer}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th className={styles.th}>Service Detail</th>
                  <th className={styles.th}>Standard Janitorial Teams</th>
                  <th className={styles.thPrimary}>Allstate Industrial Program</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.tr}>
                  <td className={styles.td}>Concrete Floor Upkeep</td>
                  <td className={styles.td}>Damp mopping or simple push broom</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> Heavy-duty ride-on scrubbing & degreasing
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Tire-Mark Extraction</td>
                  <td className={styles.td}>Ignored or lightly scrubbed</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> Specialized chemical extraction & rotary buffing
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>High-Bay Structures</td>
                  <td className={styles.td}>Lobby-level dusting only</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> High-clearance rafter & duct particulate removal
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>PPE & OSHA Training</td>
                  <td className={styles.td}>Basic awareness training</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> Documented safety protocols & full PPE compliance
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td}>Insurance Coverage</td>
                  <td className={styles.td}>Standard office-level policy</td>
                  <td className={styles.tdHighlight}>
                    <span className={styles.checkMark}>✓</span> $5M comprehensive general liability for heavy industries
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
            <h2 className={styles.sectionTitle}>How We Onboard Your Facility</h2>
            <div className={styles.sectionTitleDivider}></div>
            <p className={styles.sectionSubtitle}>
              A clear, safety-audited plan to transition your facility cleaning with zero operational friction.
            </p>
          </div>

          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.processNum}>01</div>
              <h3 className={styles.processHeading}>Initial Consult</h3>
              <p className={styles.processText}>
                We discuss factory layouts, safety hazards, chemicals guidelines, and shift hours.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNum}>02</div>
              <h3 className={styles.processHeading}>Technical Walkthrough</h3>
              <p className={styles.processText}>
                We inspect concrete coatings, high rafters, machinery buffers, and loading dock traffic.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNum}>03</div>
              <h3 className={styles.processHeading}>Safety Plan</h3>
              <p className={styles.processText}>
                We develop a strict site-safety protocol, outlining PPE requirements and emergency routes.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNum}>04</div>
              <h3 className={styles.processHeading}>Crew Training</h3>
              <p className={styles.processText}>
                Our cleaners complete facility-specific safety briefings before beginning active maintenance.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processNum}>05</div>
              <h3 className={styles.processHeading}>Supervisor Check</h3>
              <p className={styles.processText}>
                Our operations managers conduct safety audits and floor quality inspections on every shift.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA High-Impact Banner */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Ready to Upgrade Your Plant's Safety Standards?</h2>
          <p className={styles.ctaText}>
            Keep your assembly lines clean and compliant. Contact Allstate Building & Office Maintenance today for a free walkthrough.
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
              Find immediate answers regarding our manufacturing facility cleaning practices, scheduling, and safety protocols.
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
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Burbank</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> North Hollywood</div>
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
