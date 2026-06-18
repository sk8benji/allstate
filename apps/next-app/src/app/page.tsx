"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Header from "./services/Header";

export default function Home() {
  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    facilitySize: "",
    serviceType: "dealerships",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setFormSubmitted(true);
    } catch (error: any) {
      setSubmitError(error.message || "Failed to connect to the server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Top Hero Form State
  const [topFormData, setTopFormData] = useState({
    name: "",
    phone: "",
    email: "",
    zipCode: "",
  });
  const [topFormSubmitted, setTopFormSubmitted] = useState(false);
  const [isSubmittingTop, setIsSubmittingTop] = useState(false);
  const [topSubmitError, setTopSubmitError] = useState<string | null>(null);

  const handleTopInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTopFormData({ ...topFormData, [name]: value });
  };

  const handleTopSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingTop(true);
    setTopSubmitError(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: topFormData.name,
          phone: topFormData.phone,
          email: topFormData.email,
          zipCode: topFormData.zipCode,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setTopFormSubmitted(true);
    } catch (error: any) {
      setTopSubmitError(error.message || "Failed to connect to the server.");
    } finally {
      setIsSubmittingTop(false);
    }
  };

  // 10-Step process array
  const steps = [
    { number: "01", title: "Site Assessment & Inspection", text: "We conduct an in-depth walkthrough of your commercial facility to note traffic levels, layout configurations, and high-frequency hot zones." },
    { number: "02", title: "Custom Checklist Formulation", text: "We outline an itemized janitorial list tailored specifically to your company, detailing daily, weekly, and monthly tasks." },
    { number: "03", title: "Safety & Security Protocol Alignment", text: "We set up clear protocols regarding lockups, keycard entry, alarm codes, and confidentiality guidelines for our cleaning crews." },
    { number: "04", title: "High-Dusting & Vent Cleansing", text: "We remove cobwebs and dust from high ledges, light fixtures, HVAC registers, and ceiling corners to ensure optimal air quality." },
    { number: "05", title: "Wall & High-Touch Disinfection", text: "Our staff sanitizes walls, light switches, doors, handles, rails, and shared touchpoints using eco-friendly, virucidal solutions." },
    { number: "06", title: "Restroom Deep Sterilization", text: "We wash, scrub, and sanitize toilet fixtures, urinals, mirrors, sinks, and partitions. We restock consumables and polish hardware." },
    { number: "07", title: "Breakroom & Kitchen Degreasing", text: "We deep-clean countertops, tables, appliances, sinks, and cabinets. Trash receptacles are emptied, disinfected, and relined." },
    { number: "08", title: "Floor Care & Carpet Restoration", text: "We vacuum all carpeted areas and run specialized commercial mop systems over hard floors, finishing with high-speed buffing if needed." },
    { number: "09", title: "Manager Quality Inspection", text: "Before leaving, our team lead executes a visual quality control audit against your customized checklist, confirming no detail is missed." },
    { number: "10", title: "Account Review & Check-in", text: "We request feedback via regular account manager communication to guarantee consistent satisfaction with our maintenance performance." }
  ];

  // FAQ array (No pricing references)
  const faqs = [
    { q: "What commercial cleaning services do you offer?", a: "Allstate Building & Office Maintenance provides comprehensive commercial cleaning, daily janitorial services, office building maintenance, carpet deep cleaning, hard floor stripping and waxing, window washing, and minor facility repairs." },
    { q: "Are you fully insured and bonded?", a: "Yes, we are a fully licensed, bonded, and insured building maintenance provider in Woodland Hills, California. Our team members undergo background checks and safety training for your security." },
    { q: "How do you evaluate facility maintenance requirements?", a: "We conduct a thorough facility walkthrough to inspect floor types, high-traffic corridors, and clinic-specific sanitation needs. Based on this, we provide a customized, detailed operations plan and agreement." },
    { q: "Do we need to supply the cleaning equipment and products?", a: "No. We supply all commercial-grade cleaning equipment (HEPA vacuums, floor buffers) and high-quality EPA-approved cleaning products. If your company prefers specific green or scent-free products, we are happy to accommodate." },
    { q: "Can you clean after business hours?", a: "Absolutely. We customize our cleaning schedule to fit your business hours. We can perform quiet cleanings during operations, or deep cleanings overnight and on weekends to avoid disrupting your employees." },
    { q: "How do you handle keys, alarm codes, and facility security?", a: "Security is our top priority. Keys and access cards are logged, coded, and securely stored. Our cleaning crews are trained on standard alarm systems and double-checking locked entries before departure." },
    { q: "Do you offer emergency or one-time deep cleaning?", a: "Yes, we provide emergency cleanups, post-construction cleanings, and one-time deep cleans (e.g., carpet extraction, post-event cleaning, floor restoration) on short notice." },
    { q: "What is your satisfaction guarantee policy?", a: "We guarantee pristine results. If you notice any area that was not cleaned according to our agreed-upon checklist, contact us immediately, and we will send a crew to correct it under our satisfaction guarantee." }
  ];

  return (
    <div className={styles.main}>
      {/* 1. Header Navigation */}
      <Header isHome={true} />

      {/* 2. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>ALLSTATE BUILDING & OFFICE MAINTENANCE INC.</h1>
            <p className={styles.heroSubtitle}>Family owned and operated since 1981</p>
            <div className={styles.heroBtns}>
              <a href="#quote" className={styles.btnQuoteRed}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.mailIcon}
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>GET A FREE QUOTE</span>
              </a>
            </div>
            <a href="#quote" className={styles.scrollDownArrow} aria-label="Scroll Down">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>


      {/* 3. Intro Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>About Our Firm</span>
            <h2 className={styles.sectionTitle}>Woodland Hills Commercial Facility Care Experts</h2>
            <p className={styles.sectionSubtitle}>
              Since 1981, we have provided commercial properties with clean, healthy, and inviting environments. We understand that a clean workspace boosts worker health, employee focus, and corporate image.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Services Section */}
      <section id="services" className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Our Services</span>
            <h2 className={styles.sectionTitle}>Building Upkeep & Janitorial Solutions</h2>
            <p className={styles.sectionSubtitle}>
              From daily auto dealership sweeps to technical school floor waxing, our commercial crews cover every facet of facility care.
            </p>
          </div>

          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <a href="/car-dealerships-janitorial-services" className={styles.serviceImageWrapper}>
                <img src="/dealership.jpg" alt="Car dealerships and rental car agencies showroom cleaning" className={styles.photoImage} />
              </a>
              <h3 className={styles.serviceTitle}>
                <a href="/car-dealerships-janitorial-services" className={styles.serviceTitleLink}>
                  Dealerships and rental car agencies
                </a>
              </h3>
              <p className={styles.serviceText}>
                Pristine showroom floor scrubbing, lobby polishing, glass window detailing, and detailed office sanitization to project a high-end brand image to buyers and renters.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <a href="/dental-office-janitorial-services" className={styles.serviceImageWrapper}>
                <img src="/medical.jpg" alt="Medical and dental clinics cleaning" className={styles.photoImage} />
              </a>
              <h3 className={styles.serviceTitle}>
                <a href="/dental-office-janitorial-services" className={styles.serviceTitleLink}>
                  Medical and dental clinics
                </a>
              </h3>
              <p className={styles.serviceText}>
                Hospital-grade disinfection, sanitizing patient rooms, operating suites, waiting rooms, and restrooms. Fully compliant with OSHA and healthcare safety standards.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <a href="/industrial-manufacturing-janitorial-services" className={styles.serviceImageWrapper}>
                <img src="/manufacturing.jpg" alt="Manufacturing facilities cleaning" className={styles.photoImage} />
              </a>
              <h3 className={styles.serviceTitle}>
                <a href="/industrial-manufacturing-janitorial-services" className={styles.serviceTitleLink}>
                  Manufacturing facilities
                </a>
              </h3>
              <p className={styles.serviceText}>
                Heavy-duty floor degreasing, warehouse sweep downs, machinery area dusting, breakroom sanitizing, and safety pathway clearing for industrial plants.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <a href="/church-cleaning-services" className={styles.serviceImageWrapper}>
                <img src="/religious.jpg" alt="Religious Facilities cleaning" className={styles.photoImage} />
              </a>
              <h3 className={styles.serviceTitle}>
                <a href="/church-cleaning-services" className={styles.serviceTitleLink}>
                  Religious Facilities
                </a>
              </h3>
              <p className={styles.serviceText}>
                Respectful, detailed sanitizing of worship halls, pews, altars, community kitchens, classrooms, and high-ceiling dusting to maintain a welcoming atmosphere.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <a href="/school-cleaning-services" className={styles.serviceImageWrapper}>
                <img src="/school.jpg" alt="School cleaning" className={styles.photoImage} />
              </a>
              <h3 className={styles.serviceTitle}>
                <a href="/school-cleaning-services" className={styles.serviceTitleLink}>
                  School Cleaning
                </a>
              </h3>
              <p className={styles.serviceText}>
                Thorough classroom disinfecting, desk sanitizing, hallway waxing, gym floor buffing, cafeteria deep-clean, and restroom sterilization for safe education centers.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <a href="/shopping-mall-cleaning" className={styles.serviceImageWrapper}>
                <img src="/mall.jpg" alt="Shopping Mall Cleaning" className={styles.photoImage} />
              </a>
              <h3 className={styles.serviceTitle}>
                <a href="/shopping-mall-cleaning" className={styles.serviceTitleLink}>
                  Shopping Mall Cleaning
                </a>
              </h3>
              <p className={styles.serviceText}>
                Large-scale common area sweeping, escalator handrail sanitation, food court cleaning, public restroom servicing, and high-gloss floor polishing.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <a href="/fitness-center-cleaning" className={styles.serviceImageWrapper}>
                <img src="/fitness.jpg" alt="Fitness Center Cleaning" className={styles.photoImage} />
              </a>
              <h3 className={styles.serviceTitle}>
                <a href="/fitness-center-cleaning" className={styles.serviceTitleLink}>
                  Fitness Center Cleaning
                </a>
              </h3>
              <p className={styles.serviceText}>
                Disinfecting exercise machines, sanitizing yoga mats, deep-cleaning locker rooms, and running high-grade air scrubbing systems to ensure a sanitary and odor-free fitness facility.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <a href="/dance-studio-janitorial-services" className={styles.serviceImageWrapper}>
                <img src="/dance.jpg" alt="Dance Studios cleaning" className={styles.photoImage} />
              </a>
              <h3 className={styles.serviceTitle}>
                <a href="/dance-studio-janitorial-services" className={styles.serviceTitleLink}>
                  Dance Studios
                </a>
              </h3>
              <p className={styles.serviceText}>
                Sweeping, dust-mopping, and damp-mopping wood studio floors to keep them dust-free and slip-resistant. Sanitizing ballet barres, audio equipment, and floor-to-ceiling mirror walls.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <a href="/offices-and-buildings-janitorial-services" className={styles.serviceImageWrapper}>
                <img src="/office.jpg" alt="Office Buildings cleaning" className={styles.photoImage} />
              </a>
              <h3 className={styles.serviceTitle}>
                <a href="/offices-and-buildings-janitorial-services" className={styles.serviceTitleLink}>
                  Office Buildings
                </a>
              </h3>
              <p className={styles.serviceText}>
                Daily or weekly janitorial care including desk sanitization, conference room cleaning, trash removal, floor vacuuming, glass entry detailing, and breakroom deep cleaning.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section id="why-choose-us" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.twoColGrid}>
            <div>
              <span className={styles.sectionBadge}>Why Choose Us</span>
              <h2 className={styles.sectionTitle} style={{ textAlign: "left" }}>Woodland Hills' Commercial Standard</h2>
              <p className={styles.sectionSubtitle} style={{ marginBottom: "2rem", textAlign: "left" }}>
                Allstate Building & Office Maintenance has built a reputation on trust, quality workmanship, and seamless communication.
              </p>

              <div className={styles.whyList}>
                <div className={styles.whyItem}>
                  <div className={styles.whyIcon}>✓</div>
                  <div>
                    <h3 className={styles.whyHeading}>Commercial Expertise</h3>
                    <p className={styles.whyText}>Years of professional commercial, medical, and corporate care standard.</p>
                  </div>
                </div>
                <div className={styles.whyItem}>
                  <div className={styles.whyIcon}>✓</div>
                  <div>
                    <h3 className={styles.whyHeading}>Insured & Bonded Crew</h3>
                    <p className={styles.whyText}>Fully insured personnel for your security, safety, and operational comfort.</p>
                  </div>
                </div>
                <div className={styles.whyItem}>
                  <div className={styles.whyIcon}>✓</div>
                  <div>
                    <h3 className={styles.whyHeading}>Transparent Estimates</h3>
                    <p className={styles.whyText}>Know exactly what service specifications you get with a detailed written agreement.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.whyImageCard}>
              <img src="/team.png" alt="Allstate Cleaning Crew" className={styles.whyImage} />
              <div className={styles.badgeHighlight}>1981</div>
              <h3 className={styles.highlightLabel}>Established Operations</h3>
              <p className={styles.whyText}>
                Providing reliable building care to Woodland Hills and surrounding areas with background-checked crews for over 45 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Operations Gallery Section */}
      <section id="gallery" className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Our Operations</span>
            <h2 className={styles.sectionTitle}>Featured Facilities Gallery</h2>
            <p className={styles.sectionSubtitle}>
              Visual frames for Allstate's building maintenance projects, office upkeep, and commercial cleaning operations.
            </p>
          </div>

          <div className={styles.galleryGrid}>
            <div className={styles.galleryCard}>
              <img src="/dealership.jpg" alt="Car Dealership Showroom Floor Polish" className={styles.photoImage} />
              <h3 className={styles.galleryCardTitle}>Car Dealership Showroom</h3>
              <p className={styles.galleryCardText}>High-gloss floor finish and window cleaning for local auto agencies.</p>
            </div>

            <div className={styles.galleryCard}>
              <img src="/medical.jpg" alt="Medical Center Sanitizing" className={styles.photoImage} />
              <h3 className={styles.galleryCardTitle}>Medical Center Sanitizing</h3>
              <p className={styles.galleryCardText}>Restroom and treatment room sanitization for dental clinics.</p>
            </div>

            <div className={styles.galleryCard}>
              <img src="/manufacturing.jpg" alt="Manufacturing Plant deep clean sweep" className={styles.photoImage} />
              <h3 className={styles.galleryCardTitle}>Manufacturing Plant</h3>
              <p className={styles.galleryCardText}>Deep clean sweep and grease removal for industrial facilities.</p>
            </div>

            <div className={styles.galleryCard}>
              <img src="/school.jpg" alt="School Hallways & Classrooms cleaning" className={styles.photoImage} />
              <h3 className={styles.galleryCardTitle}>School Hallways & Classrooms</h3>
              <p className={styles.galleryCardText}>Complete vinyl tile floor stripping and waxing during holiday break.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Client Reviews</span>
            <h2 className={styles.sectionTitle}>What Woodland Hills Businesses Say</h2>
            <p className={styles.sectionSubtitle}>
              Hear from office managers and commercial facility owners who trust us with their facility care.
            </p>
          </div>

          <div className={styles.googleSummaryBadge}>
            <div className={styles.googleSummaryGood}>GOOD</div>
            <div className={styles.googleSummaryStars}>
              <svg width="28" height="28" viewBox="0 0 24 24" className={styles.starIcon}>
                <polygon fill="#fbbf24" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <svg width="28" height="28" viewBox="0 0 24 24" className={styles.starIcon}>
                <polygon fill="#fbbf24" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <svg width="28" height="28" viewBox="0 0 24 24" className={styles.starIcon}>
                <polygon fill="#fbbf24" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <svg width="28" height="28" viewBox="0 0 24 24" className={styles.starIcon}>
                <polygon fill="#fbbf24" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <svg width="28" height="28" viewBox="0 0 24 24" className={styles.starIcon}>
                <defs>
                  <linearGradient id="halfGrad">
                    <stop offset="50%" stopColor="#fbbf24" />
                    <stop offset="50%" stopColor="#e2e8f0" />
                  </linearGradient>
                </defs>
                <polygon fill="url(#halfGrad)" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <div className={styles.googleSummaryCount}>Based on 44 reviews</div>
            <div className={styles.googleSummaryBrand}>
              <span className={styles.googleG}>G</span>
              <span className={styles.googleO1}>o</span>
              <span className={styles.googleO2}>o</span>
              <span className={styles.googleG2}>g</span>
              <span className={styles.googleL}>l</span>
              <span className={styles.googleE}>e</span>
            </div>
          </div>

          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.rating}>★★★★★</div>
              <p className={styles.quote}>
                &ldquo;Allstate has been cleaning my office 3 days a week since 2018. They are always very reliable and consistent. My cleaners even came to clean during the worst day of Hurricane Hillary which I was very grateful for since the roads were so flooded. Our office had minor flooding from the storm so I emailed Pam to request an emergency carpet shampoo. She responded right away and had a technician perform the shampoo the same day. I highly recommend this company. Great cleaners and caring customer service staff!&rdquo;
              </p>
              <div className={styles.clientInfo}>
                <span className={styles.clientName}>t b</span>
                <span className={styles.clientCompany}>Verified Google Review</span>
                <a
                  href="https://share.google/9Pvj7izc64fUGtesW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.reviewLink}
                >
                  View Review &rarr;
                </a>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.rating}>★★★★★</div>
              <p className={styles.quote}>
                &ldquo;We are very pleased with our cleaning co. Allstate, starting with Stephanie and her customer service, Pam gets the job done as listens to any concerns and sends the best person for the job. Jorge is the man when you want the job done right!!! he goes above and beyond his job. Thank you guys for the excellent service you provide for us.&rdquo;
              </p>
              <div className={styles.clientInfo}>
                <span className={styles.clientName}>Duarte Family Dentistry</span>
                <span className={styles.clientCompany}>Verified Google Review</span>
                <a
                  href="https://share.google/qxiu2nLr0NlXZEdv2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.reviewLink}
                >
                  View Review &rarr;
                </a>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.rating}>★★★★★</div>
              <p className={styles.quote}>
                &ldquo;I heard about Allstate from a close friend of mine several years ago. I decided to go with them because I really liked Anthony and his approach to my company. You see Allstate is a family run company. So is my company and I'm the son of parents who each had their own companies. So I place great value in this. Almost 5 years has gone by now and I couldn't think about using another company. They do an excellent job cleaning my 6K square foot gym. If I ever have an issue they go above and beyond to fix it as soon as possible. Anthony is on top of everything I need. I feel like they are more then just &ldquo;my cleaning crew&rdquo; I know all their names. They are my friends. I respect them and they respect me and our relationship has blossomed over the years. That's why I prefer family runned companies. Because you become a part of each other's family. Look no further when finding your crew. In a world run by large corporations family run is always the way to go. Give these guys a shot, be patient, and communicate. You will be extremely grateful that you did.&rdquo;
              </p>
              <div className={styles.clientInfo}>
                <span className={styles.clientName}>Michael Tromello</span>
                <span className={styles.clientCompany}>Verified Google Review</span>
                <a
                  href="https://share.google/xA1lfGFgcRfxKHPmE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.reviewLink}
                >
                  View Review &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. About Us */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.twoColGrid}>
            <div className={styles.whyImageCard} style={{ backgroundColor: "#fff", padding: "1.5rem" }}>
              <img
                src="/organization.jpg"
                alt="Allstate Building & Office Maintenance Organization"
                className={styles.organizationPhoto}
              />
              <div className={styles.aboutCardGrid}>
                <div className={styles.aboutMiniCard}>
                  <div className={styles.aboutMiniVal}>45+</div>
                  <div className={styles.aboutMiniLabel}>Years</div>
                </div>
                <div className={styles.aboutMiniCard}>
                  <div className={styles.aboutMiniVal}>250+</div>
                  <div className={styles.aboutMiniLabel}>Contracts</div>
                </div>
                <div className={styles.aboutMiniCard}>
                  <div className={styles.aboutMiniVal}>100%</div>
                  <div className={styles.aboutMiniLabel}>Insured</div>
                </div>
              </div>
            </div>

            <div>
              <span className={styles.sectionBadge}>Our Organization</span>
              <h2 className={styles.sectionTitle} style={{ textAlign: "left" }}>Woodland Hills Trusted Facility Partner</h2>
              <p className={styles.sectionSubtitle} style={{ textAlign: "left", marginBottom: "1.5rem" }}>
                Allstate Building & Office Maintenance has served commercial facilities, medical centers, and warehouses with custom upkeep services.
              </p>
              <p className={styles.whyText} style={{ marginBottom: "1.5rem" }}>
                Our staff members undergo background screening and rigorous training in OSHA sanitization protocols. We focus on building long-term partnerships with business managers by maintaining high quality control standards.
              </p>
              <a href="#quote" className={styles.btnPrimary}>Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. 10-Step Quality Process */}
      <section id="process" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Our Methods</span>
            <h2 className={styles.sectionTitle}>Our 10-Step Facility Upkeep Process</h2>
            <p className={styles.sectionSubtitle}>
              We maintain high commercial cleaning consistency by applying a systematic, step-by-step quality plan to every property.
            </p>
          </div>

          <div className={styles.timeline}>
            {steps.map((step, idx) => (
              <div key={idx} className={styles.timelineItem}>
                <div className={styles.timelineNumber}>{step.number}</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{step.title}</h3>
                  <p className={styles.timelineText}>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Local Compliance & Business Credentials */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Compliance & Trust</span>
            <h2 className={styles.sectionTitle}>Local Compliance & Business Credentials</h2>
            <p className={styles.sectionSubtitle}>
              We maintain the highest operational standards, comprehensive corporate insurance, and California certifications to protect your physical and commercial assets.
            </p>
          </div>

          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard} style={{ backgroundColor: "#fff" }}>
              <div className={styles.cardHeaderWithBadge}>
                <span className={styles.credentialIcon}>📜</span>
                <span className={styles.credentialBadge}>Registered CA Corp</span>
              </div>
              <h3 className={styles.serviceTitle} style={{ marginTop: "1rem" }}>State Business Licenses</h3>
              <p className={styles.serviceText}>
                We are a fully registered California corporation. Our business registration and operating licenses are completely active, ensuring fully compliant and legal commercial janitorial operations in Woodland Hills and Greater Los Angeles.
              </p>
            </div>

            <div className={styles.serviceCard} style={{ backgroundColor: "#fff" }}>
              <div className={styles.cardHeaderWithBadge}>
                <span className={styles.credentialIcon}>🛡️</span>
                <span className={styles.credentialBadge}>$5,000,000 Coverage</span>
              </div>
              <h3 className={styles.serviceTitle} style={{ marginTop: "1rem" }}>Liability Insurance & Workers' Comp</h3>
              <p className={styles.serviceText}>
                Protected by a comprehensive $5,000,000 general liability policy and complete workers' compensation insurance. We eliminate operational liabilities, providing corporations with absolute financial security and peace of mind.
              </p>
            </div>

            <div className={styles.serviceCard} style={{ backgroundColor: "#fff" }}>
              <div className={styles.cardHeaderWithBadge}>
                <span className={styles.credentialIcon}>🏆</span>
                <span className={styles.credentialBadge}>OSHA Compliant</span>
              </div>
              <h3 className={styles.serviceTitle} style={{ marginTop: "1rem" }}>Industry Certifications</h3>
              <p className={styles.serviceText}>
                Our operations strictly align with OSHA safety compliance, CDC-approved healthcare sanitization standards, and GBAC Star-trained supervisor protocols for clinic-grade disinfection and commercial safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Commercial Green Cleaning Options */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.twoColGrid}>
            <div>
              <span className={styles.sectionBadge}>Eco-Friendly Care</span>
              <h2 className={styles.sectionTitle} style={{ textAlign: "left" }}>Commercial Green Cleaning Options</h2>
              <p className={styles.sectionSubtitle} style={{ textAlign: "left", marginBottom: "2rem" }}>
                Sustainability is core to our corporate mission. We offer green cleaning protocols that minimize environmental impact while maintaining pristine office hygiene.
              </p>

              <div className={styles.whyList}>
                <div className={styles.whyItem}>
                  <div className={styles.whyIcon}>🌱</div>
                  <div>
                    <h3 className={styles.whyHeading}>Certified Eco-Products</h3>
                    <p className={styles.whyText}>
                      We prioritize EPA-approved, Green Seal™ and EcoLogo® certified cleaning detergents. These formulas are biodegradable, non-toxic, and free from volatile organic compounds (VOCs) to protect both your staff and the environment.
                    </p>
                  </div>
                </div>
                <div className={styles.whyItem}>
                  <div className={styles.whyIcon}>💧</div>
                  <div>
                    <h3 className={styles.whyHeading}>Resource & Water Conservation</h3>
                    <p className={styles.whyText}>
                      By deploying microfiber technology and high-efficiency floor scrubbers, we reduce chemical run-off and decrease water usage by up to 50% compared to traditional cleaning methods.
                    </p>
                  </div>
                </div>
                <div className={styles.whyItem}>
                  <div className={styles.whyIcon}>💨</div>
                  <div>
                    <h3 className={styles.whyHeading}>HEPA-Filtered Indoor Air</h3>
                    <p className={styles.whyText}>
                      Our commercial vacuums utilize advanced HEPA filtration systems to trap 99.97% of airborne dust, pollen, and micro-allergens, significantly improving indoor air quality in corporate offices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.greenCommitmentCard}>
              <img
                src="/eco-friendly.jpg"
                alt="Allstate Eco-Friendly Commitment"
                className={styles.greenCommitmentImage}
              />
              <h3 className={styles.greenCommitmentTitle}>Our Eco-Friendly Commitment</h3>
              <p className={styles.greenCommitmentText}>
                We guarantee health-first, environmentally responsible cleaning options for all corporate office packages.
              </p>
              <div className={styles.greenStatsGrid}>
                <div className={styles.greenStatItem}>
                  <div className={styles.greenStatVal}>100%</div>
                  <div className={styles.greenStatLabel}>Biodegradable</div>
                </div>
                <div className={styles.greenStatItem}>
                  <div className={styles.greenStatVal}>0%</div>
                  <div className={styles.greenStatLabel}>VOCs (Toxins)</div>
                </div>
                <div className={styles.greenStatItem}>
                  <div className={styles.greenStatVal}>99.97%</div>
                  <div className={styles.greenStatLabel}>HEPA Air Filtration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Service Areas */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.areaGrid}>
            <div>
              <span className={styles.sectionBadge}>Locations</span>
              <h2 className={styles.sectionTitle} style={{ textAlign: "left" }}>Our Service Coverage Areas</h2>
              <p className={styles.sectionSubtitle} style={{ textAlign: "left", marginBottom: "2rem" }}>
                We proudly provide office cleaning and commercial building maintenance services across the San Fernando Valley and the Greater Los Angeles Area.
              </p>

              <h3 className={styles.areaSubHeader}>San Fernando Valley</h3>
              <div className={styles.areaLinks}>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Woodland Hills (HQ)</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Calabasas</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Tarzana</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Encino</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Sherman Oaks</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> West Hills</div>
              </div>

              <h3 className={styles.areaSubHeader}>Greater Los Angeles</h3>
              <div className={styles.areaLinks}>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Santa Monica</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Beverly Hills</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Pasadena</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Glendale</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> Downtown LA</div>
                <div className={styles.areaLinkItem}><span className={styles.areaLinkDot}></span> West Hollywood</div>
              </div>
            </div>

            <div className={styles.whyImageCard}>
              <h3 className={styles.highlightLabel}>Central Office Location</h3>
              <p className={styles.whyText} style={{ margin: "1rem 0" }}>
                Our central operations warehouse allows our crews to deploy quickly to properties across Ventura Blvd and neighboring valley centers.
              </p>
              <div className={styles.whyText} style={{ fontWeight: "700", color: "var(--color-text-heading)" }}>
                Allstate Building & Office Maintenance<br/>
                19720 Ventura Blvd, Woodland Hills, CA 91364
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FAQ Accordion */}
      <section id="faq" className={styles.sectionAlt}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a,
                },
              })),
            }),
          }}
        />
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>FAQ</span>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p className={styles.sectionSubtitle}>
              Get immediate answers regarding our janitorial services, scheduling, safety practices, and insurance options.
            </p>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}>
                  <button onClick={() => toggleFaq(idx)} className={styles.faqQuestion}>
                    <span className={styles.faqTitle}>{faq.q}</span>
                    <span className={`${styles.faqIcon} ${isOpen ? styles.faqIconRotated : ""}`}>+</span>
                  </button>
                  <div className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ""}`}>
                    {faq.a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. Contact & Quote Form */}
      <section id="quote" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Get An Estimate</span>
            <h2 className={styles.sectionTitle}>Let's Discuss Your Facility Needs</h2>
            <p className={styles.sectionSubtitle}>
              Contact Allstate Building & Office Maintenance today for a free walkthrough assessment and customized quote.
            </p>
          </div>

          <div className={styles.formGrid}>
            <div className={styles.formCard}>
              {formSubmitted ? (
                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                  <div className={styles.badgeHighlight} style={{ fontSize: "2.5rem" }}>Thank You!</div>
                  <h3 className={styles.highlightLabel}>Estimate Requested</h3>
                  <p className={styles.whyText}>
                    Our Woodland Hills commercial representative will call you shortly to coordinate a walkthrough date.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Your Name / Business Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className={styles.input}
                      placeholder="e.g. John Doe / Tech Solutions"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={styles.input}
                      placeholder="(818) 887-1134"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className={styles.input}
                      placeholder="manager@yourbusiness.com"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Approximate Facility Size (Sq. Ft.)</label>
                    <input
                      type="text"
                      name="facilitySize"
                      value={formData.facilitySize}
                      onChange={handleInputChange}
                      className={styles.input}
                      placeholder="e.g. 2,500 sq ft"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Primary Service Required</label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className={styles.input}
                    >
                      <option value="dealerships">Dealerships and rental car agencies</option>
                      <option value="medical">Medical and dental clinics</option>
                      <option value="manufacturing">Manufacturing facilities</option>
                      <option value="religious">Religious Facilities</option>
                      <option value="schools">School Cleaning</option>
                      <option value="shopping-malls">Shopping Mall Cleaning</option>
                      <option value="fitness">Fitness Center Cleaning</option>
                      <option value="dance">Dance Studios</option>
                      <option value="offices">Office Buildings</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Facility Details & Requests</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={styles.textarea}
                      placeholder="Describe your cleaning schedules, frequency, or specific floor repair requests..."
                    ></textarea>
                  </div>
                  <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                    {isSubmitting ? "Sending Request..." : "Send Estimate Request"}
                  </button>
                  {submitError && (
                    <div style={{ color: "#ef4444", marginTop: "1rem", fontSize: "0.9rem", fontWeight: "600", textAlign: "center" }}>
                      ⚠️ {submitError}
                    </div>
                  )}
                </form>
              )}
            </div>

            <div className={styles.contactDetailGrid}>
              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>📞</div>
                <div className={styles.clientInfo}>
                  <h3 className={styles.contactLabel}>Phone Support</h3>
                  <a href="tel:+18188871134" className={styles.contactVal} style={{ fontWeight: "700", color: "var(--color-primary)" }}>
                    (818) 887-1134
                  </a>
                  <p className={styles.contactVal}>Mon - Sat: 8:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>📍</div>
                <div className={styles.clientInfo}>
                  <h3 className={styles.contactLabel}>Headquarters Address</h3>
                  <p className={styles.contactVal} style={{ fontWeight: "600" }}>
                    Allstate Building & Office Maintenance
                  </p>
                  <p className={styles.contactVal}>
                    19720 Ventura Blvd, Woodland Hills, CA 91364, USA
                  </p>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>✉️</div>
                <div className={styles.clientInfo}>
                  <h3 className={styles.contactLabel}>Direct Inquiries</h3>
                  <p className={styles.contactVal}>allstatecustomercare1@gmail.com</p>
                  <p className={styles.contactVal}>Response within 1 business day</p>
                </div>
              </div>

              <div className={styles.mapContainer}>
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
        </div>
      </section>

      {/* 14. Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
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
                <span className={styles.footerLink}>📍 19720 Ventura Blvd, Woodland Hills, CA</span>
                <span className={styles.footerLink}>✉️ allstatecustomercare1@gmail.com</span>
              </div>
            </div>
          </div>
          <div className={styles.footerCopyright}>
            &copy; {new Date().getFullYear()} Allstate Building & Office Maintenance. All Rights Reserved. Licensed, Bonded & Insured.
          </div>
        </div>
      </footer>

      {/* 15. Floating Action Buttons */}
      {/* Left Float: Phone Call */}
      <a href="tel:+18188871134" className={styles.phoneFloat} aria-label="Call Allstate Building & Office Maintenance">
        <div className={styles.pulse}></div>
        📞
      </a>

      {/* Right Float: Message / Contact Form Anchor */}
      <a href="#quote" className={styles.whatsappFloat} aria-label="Request Quote">
        <div className={styles.pulse}></div>
        💬
        <span className={styles.whatsappTooltip}>Request free valuation estimate</span>
      </a>
    </div>
  );
}
