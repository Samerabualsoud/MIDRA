import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MIDRA - Procurement as a Service</title>
        <meta name="description" content="MIDRA helps SMEs in Saudi Arabia optimize their procurement operations" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link href="/" className={styles.logo}>MIDRA</Link>
          <nav className={styles.nav}>
            <Link href="#features" className={styles.navLink}>Features</Link>
            <Link href="#benefits" className={styles.navLink}>Benefits</Link>
            <Link href="#how-it-works" className={styles.navLink}>How It Works</Link>
            <Link href="#testimonials" className={styles.navLink}>Testimonials</Link>
            <Link href="#pricing" className={styles.navLink}>Pricing</Link>
          </nav>
          <div className={styles.headerActions}>
            <Link href="/login" className={styles.btnText}>Login</Link>
            <Link href="/register" className={styles.btnPrimary}>Get Started</Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Streamline Your Procurement Process</h1>
              <p className={styles.heroSubtitle}>MIDRA helps SMEs in Saudi Arabia optimize their procurement operations, reduce costs, and improve efficiency through AI-powered solutions.</p>
              <div className={styles.heroActions}>
                <Link href="/register" className={styles.btnPrimary}>Start Free Trial</Link>
                <Link href="#demo" className={styles.btnSecondary}>Request Demo</Link>
              </div>
            </div>
            <div className={styles.heroImage}>
              <img src="https://via.placeholder.com/600x400" alt="MIDRA Platform Dashboard" />
            </div>
          </div>
        </section>

        <section id="features" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Powerful Features for Modern Procurement</h2>
              <p className={styles.sectionSubtitle}>Everything you need to streamline your procurement process in one platform</p>
            </div>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <h3 className={styles.featureTitle}>Centralized Ordering</h3>
                <p className={styles.featureDescription}>Manage all your orders from multiple suppliers in one place with a streamlined approval process.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <i className="fas fa-users"></i>
                </div>
                <h3 className={styles.featureTitle}>Order Consolidation</h3>
                <p className={styles.featureDescription}>Combine orders with other SMEs to increase purchasing power and negotiate better prices.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <i className="fas fa-brain"></i>
                </div>
                <h3 className={styles.featureTitle}>AI-Powered Insights</h3>
                <p className={styles.featureDescription}>Get intelligent recommendations for inventory management and cost optimization.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3 className={styles.featureTitle}>Advanced Analytics</h3>
                <p className={styles.featureDescription}>Track spending, monitor supplier performance, and identify cost-saving opportunities.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <i className="fas fa-truck"></i>
                </div>
                <h3 className={styles.featureTitle}>Supplier Management</h3>
                <p className={styles.featureDescription}>Evaluate and manage suppliers with performance metrics and ratings.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <i className="fas fa-boxes"></i>
                </div>
                <h3 className={styles.featureTitle}>Inventory Tracking</h3>
                <p className={styles.featureDescription}>Monitor stock levels and get automatic reorder alerts to prevent stockouts.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Benefits for Your Business</h2>
              <p className={styles.sectionSubtitle}>How MIDRA transforms procurement for SMEs in Saudi Arabia</p>
            </div>
            <div className={styles.benefitsContainer}>
              <div className={styles.benefitsImage}>
                <img src="https://via.placeholder.com/500x400" alt="MIDRA Benefits" />
              </div>
              <div className={styles.benefitsContent}>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>
                    <i className="fas fa-piggy-bank"></i>
                  </div>
                  <div className={styles.benefitText}>
                    <h3 className={styles.benefitTitle}>Reduce Costs</h3>
                    <p className={styles.benefitDescription}>Save 15-30% on procurement costs through order consolidation and optimized supplier selection.</p>
                  </div>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className={styles.benefitText}>
                    <h3 className={styles.benefitTitle}>Save Time</h3>
                    <p className={styles.benefitDescription}>Automate repetitive tasks and reduce procurement cycle time by up to 70%.</p>
                  </div>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>
                    <i className="fas fa-chart-pie"></i>
                  </div>
                  <div className={styles.benefitText}>
                    <h3 className={styles.benefitTitle}>Data-Driven Decisions</h3>
                    <p className={styles.benefitDescription}>Make informed procurement decisions based on real-time analytics and insights.</p>
                  </div>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <div className={styles.benefitText}>
                    <h3 className={styles.benefitTitle}>Compliance & Control</h3>
                    <p className={styles.benefitDescription}>Ensure SFDA compliance and maintain control over your procurement process.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="demo" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to Transform Your Procurement Process?</h2>
              <p className={styles.ctaDescription}>Join hundreds of SMEs in Saudi Arabia who are saving time and money with MIDRA.</p>
              <div className={styles.ctaForm}>
                <div className={styles.formGroup}>
                  <input type="text" className={styles.formInput} placeholder="Full Name" required />
                </div>
                <div className={styles.formGroup}>
                  <input type="email" className={styles.formInput} placeholder="Business Email" required />
                </div>
                <div className={styles.formGroup}>
                  <input type="text" className={styles.formInput} placeholder="Company Name" required />
                </div>
                <div className={styles.formGroup}>
                  <input type="tel" className={styles.formInput} placeholder="Phone Number" required />
                </div>
                <button type="submit" className={styles.btnPrimary}>Request Demo</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerBrand}>
              <Link href="/" className={styles.logo}>MIDRA</Link>
              <p className={styles.footerDescription}>Procurement-as-a-Service platform for SMEs in Saudi Arabia.</p>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink}><i className="fab fa-twitter"></i></a>
                <a href="#" className={styles.socialLink}><i className="fab fa-linkedin"></i></a>
                <a href="#" className={styles.socialLink}><i className="fab fa-facebook"></i></a>
                <a href="#" className={styles.socialLink}><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.footerLinksColumn}>
                <h4 className={styles.footerLinksTitle}>Product</h4>
                <ul className={styles.footerLinksList}>
                  <li><Link href="#features">Features</Link></li>
                  <li><Link href="#pricing">Pricing</Link></li>
                  <li><Link href="#demo">Request Demo</Link></li>
                  <li><Link href="#">API Documentation</Link></li>
                </ul>
              </div>
              <div className={styles.footerLinksColumn}>
                <h4 className={styles.footerLinksTitle}>Company</h4>
                <ul className={styles.footerLinksList}>
                  <li><Link href="#">About Us</Link></li>
                  <li><Link href="#">Careers</Link></li>
                  <li><Link href="#">Blog</Link></li>
                  <li><Link href="#">Press</Link></li>
                </ul>
              </div>
              <div className={styles.footerLinksColumn}>
                <h4 className={styles.footerLinksTitle}>Support</h4>
                <ul className={styles.footerLinksList}>
                  <li><Link href="#">Help Center</Link></li>
                  <li><Link href="#">Contact Us</Link></li>
                  <li><Link href="#">Privacy Policy</Link></li>
                  <li><Link href="#">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p className={styles.copyright}>&copy; 2025 MIDRA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
