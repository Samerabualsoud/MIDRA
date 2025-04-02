import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Register.module.css';

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    industry: '',
    employeeCount: '',
    agreeTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would handle registration
    console.log('Registration data:', formData);
    // Redirect to dashboard after successful registration
    window.location.href = '/dashboard';
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Register | MIDRA</title>
        <meta name="description" content="Register for MIDRA procurement platform" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>

      <div className={styles.registerPage}>
        <div className={styles.registerContainer}>
          <div className={styles.registerBrand}>
            <Link href="/" className={styles.logo}>MIDRA</Link>
            <h1 className={styles.registerTitle}>Create Your Account</h1>
            <p className={styles.registerSubtitle}>Join hundreds of SMEs optimizing their procurement with MIDRA</p>
          </div>

          <form className={styles.registerForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="fullName">Full Name</label>
                <div className={styles.inputWithIcon}>
                  <i className="fas fa-user"></i>
                  <input 
                    type="text" 
                    id="fullName" 
                    name="fullName"
                    placeholder="Your full name" 
                    value={formData.fullName}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Business Email</label>
                <div className={styles.inputWithIcon}>
                  <i className="fas fa-envelope"></i>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder="your@company.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>
                <div className={styles.inputWithIcon}>
                  <i className="fas fa-lock"></i>
                  <input 
                    type="password" 
                    id="password" 
                    name="password"
                    placeholder="••••••••" 
                    value={formData.password}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className={styles.inputWithIcon}>
                  <i className="fas fa-lock"></i>
                  <input 
                    type="password" 
                    id="confirmPassword" 
                    name="confirmPassword"
                    placeholder="••••••••" 
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="companyName">Company Name</label>
                <div className={styles.inputWithIcon}>
                  <i className="fas fa-building"></i>
                  <input 
                    type="text" 
                    id="companyName" 
                    name="companyName"
                    placeholder="Your company name" 
                    value={formData.companyName}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="industry">Industry</label>
                <div className={styles.inputWithIcon}>
                  <i className="fas fa-industry"></i>
                  <select 
                    id="industry" 
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your industry</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="retail">Retail</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="education">Education</option>
                    <option value="technology">Technology</option>
                    <option value="food">Food & Beverage</option>
                    <option value="construction">Construction</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="employeeCount">Number of Employees</label>
              <div className={styles.inputWithIcon}>
                <i className="fas fa-users"></i>
                <select 
                  id="employeeCount" 
                  name="employeeCount"
                  value={formData.employeeCount}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select employee count</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="500+">500+ employees</option>
                </select>
              </div>
            </div>

            <div className={styles.termsAgreement}>
              <input 
                type="checkbox" 
                id="agreeTerms" 
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required 
              />
              <label htmlFor="agreeTerms">
                I agree to MIDRA's <a href="#" className={styles.termsLink}>Terms of Service</a> and <a href="#" className={styles.termsLink}>Privacy Policy</a>
              </label>
            </div>

            <button type="submit" className={styles.registerButton}>Create Account</button>

            <div className={styles.divider}>
              <span>Or sign up with</span>
            </div>

            <div className={styles.socialLogin}>
              <button type="button" className={styles.socialButton}>
                <i className="fab fa-google"></i>
                <span>Google</span>
              </button>
              <button type="button" className={styles.socialButton}>
                <i className="fab fa-microsoft"></i>
                <span>Microsoft</span>
              </button>
            </div>
          </form>

          <div className={styles.loginPrompt}>
            <p>Already have an account? <Link href="/login">Log in</Link></p>
          </div>
        </div>

        <div className={styles.registerImage}>
          <div className={styles.imageOverlay}></div>
          <div className={styles.imageContent}>
            <h2>Transform Your Procurement Process</h2>
            <ul className={styles.benefitsList}>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Reduce procurement costs by up to 30%</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Streamline ordering with AI-powered recommendations</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Gain better visibility into your spending</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Improve supplier management and performance</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Join a network of SMEs for better purchasing power</span>
              </li>
            </ul>
            <div className={styles.freeTrial}>
              <div className={styles.freeTrialBadge}>
                <i className="fas fa-gift"></i>
                <span>FREE 30-DAY TRIAL</span>
              </div>
              <p>No credit card required. Cancel anytime.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
