import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would handle authentication
    console.log('Login attempt with:', { email, password, rememberMe });
    // Redirect to dashboard after successful login
    window.location.href = '/dashboard';
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Login | MIDRA</title>
        <meta name="description" content="Login to MIDRA procurement platform" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>

      <div className={styles.loginPage}>
        <div className={styles.loginContainer}>
          <div className={styles.loginBrand}>
            <Link href="/" className={styles.logo}>MIDRA</Link>
            <h1 className={styles.loginTitle}>Welcome Back</h1>
            <p className={styles.loginSubtitle}>Log in to your account to access your procurement dashboard</p>
          </div>

          <form className={styles.loginForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <div className={styles.inputWithIcon}>
                <i className="fas fa-envelope"></i>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="your@email.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.passwordHeader}>
                <label htmlFor="password">Password</label>
                <Link href="/forgot-password" className={styles.forgotPassword}>Forgot Password?</Link>
              </div>
              <div className={styles.inputWithIcon}>
                <i className="fas fa-lock"></i>
                <input 
                  type="password" 
                  id="password" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
            </div>

            <div className={styles.formOptions}>
              <div className={styles.rememberMe}>
                <input 
                  type="checkbox" 
                  id="remember" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember">Remember me</label>
              </div>
            </div>

            <button type="submit" className={styles.loginButton}>Log In</button>

            <div className={styles.divider}>
              <span>Or continue with</span>
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

          <div className={styles.registerPrompt}>
            <p>Don't have an account? <Link href="/register">Sign up</Link></p>
          </div>
        </div>

        <div className={styles.loginImage}>
          <div className={styles.imageOverlay}></div>
          <div className={styles.imageContent}>
            <h2>Streamline Your Procurement Process</h2>
            <p>MIDRA helps SMEs in Saudi Arabia optimize their procurement operations, reduce costs, and improve efficiency.</p>
            <div className={styles.testimonial}>
              <p>"MIDRA has helped us reduce our procurement costs by 25% and streamlined our entire ordering process."</p>
              <div className={styles.testimonialAuthor}>
                <img src="https://via.placeholder.com/50" alt="Testimonial Author" />
                <div>
                  <h4>Mohammed Al-Qahtani</h4>
                  <p>CEO, Al-Qahtani Medical Supplies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
