import { useState } from 'react'
import { motion } from 'framer-motion'
import './App.css'

export default function App() {
  const [formStatus, setFormStatus] = useState('')
  const [activeTab, setActiveTab] = useState(0)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('Sending…')
    await new Promise(r => setTimeout(r, 1200))
    setFormStatus('Thanks! I'll reply within 48 hours.')
    e.target.reset()
    setTimeout(() => setFormStatus(''), 3000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="app">
      {/* Navigation */}
      <motion.header className="navbar" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}>
        <div className="nav-container">
          <motion.div className="logo" whileHover={{ scale: 1.05 }}>
            <span className="logo-letter">A</span>
            <span className="logo-text">Alex</span>
          </motion.div>
          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#about">About</a>
            <motion.a href="#contact" className="nav-cta" whileHover={{ scale: 1.05 }}>Contact</motion.a>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-container">
          <motion.div className="hero-content" variants={containerVariants} initial="hidden" animate="visible">
            <motion.h1 variants={itemVariants} className="hero-title">
              Brand strategy that converts. Marketing that <span className="gradient-text">scales.</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="hero-subtitle">
              I help founders and marketing teams turn brand narrative into measurable growth — with positioning, creative systems, and performance campaigns that drive real results.
            </motion.p>
            <motion.div variants={itemVariants} className="hero-buttons">
              <motion.a href="#contact" className="btn btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Start project
              </motion.a>
              <motion.a href="#portfolio" className="btn btn-secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                View work ↓
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div className="hero-visual" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
            <div className="gradient-orb orb-1"></div>
            <div className="gradient-orb orb-2"></div>
            <div className="gradient-orb orb-3"></div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="section-title">
            Services
          </motion.h2>
          <motion.div className="services-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { icon: '🎯', title: 'Brand Strategy', desc: 'Positioning, messaging frameworks, and architecture that create clarity and preference.' },
              { icon: '📊', title: 'Performance Marketing', desc: 'Paid social, search, and creative testing that drives scalable acquisition.' },
              { icon: '🎨', title: 'Creative Systems', desc: 'Repeatable formats and templates for fast iteration and brand consistency.' }
            ].map((service, idx) => (
              <motion.div key={idx} className="service-card" variants={itemVariants} whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(124,92,255,0.2)' }}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="section-title">
            Selected Work
          </motion.h2>
          <motion.div className="portfolio-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { title: 'Brand Refresh — SaaS', tag: 'Positioning & Identity', color: '#7c5cff' },
              { title: 'Growth Campaign — eCommerce', tag: 'Creative Testing & ROAS', color: '#2ac7d8' },
              { title: 'Brand System — B2B', tag: 'Visual Language & Sales Enablement', color: '#ff6b9d' },
              { title: 'Influencer Campaign — Social', tag: 'Strategy & Execution', color: '#ffa500' }
            ].map((project, idx) => (
              <motion.div key={idx} className="portfolio-item" variants={itemVariants} whileHover={{ scale: 1.02 }}>
                <div className="portfolio-image" style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}06)` }}>
                  <div style={{ fontSize: '4rem', opacity: 0.3 }}>✨</div>
                </div>
                <h3>{project.title}</h3>
                <p>{project.tag}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <motion.div className="stats-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { num: '8+', label: 'Years of Experience' },
              { num: '50+', label: 'Brands Scaled' },
              { num: '$200M+', label: 'Revenue Influenced' },
              { num: '3x', label: 'Avg ROI Lift' }
            ].map((stat, idx) => (
              <motion.div key={idx} className="stat-item" variants={itemVariants}>
                <motion.div className="stat-number" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                  {stat.num}
                </motion.div>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container about-content">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="about-text">
            <h2>About Me</h2>
            <p>I'm Alex, a digital marketer and brand strategist with 8+ years helping ambitious businesses find their voice and scale. My work sits at the intersection of storytelling and growth engineering.</p>
            <p>I specialize in:</p>
            <ul>
              <li>Brand positioning and messaging architecture</li>
              <li>Performance marketing and analytics</li>
              <li>Creative direction and systematic design</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="about-quote">
            <blockquote>"We turned narrative into a scalable acquisition engine."</blockquote>
            <p>— Client testimonial</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="section-title">
            Let's work together
          </motion.h2>
          <motion.form onSubmit={handleSubmit} className="contact-form" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="form-grid">
              <input type="text" placeholder="Your name" required />
              <input type="email" placeholder="Email" required />
            </div>
            <input type="text" placeholder="Company (optional)" />
            <textarea rows="6" placeholder="Brief — what are your goals?" required></textarea>
            <motion.button type="submit" className="btn btn-primary" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              Send message
            </motion.button>
            {formStatus && <motion.p className="form-status" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{formStatus}</motion.p>}
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <motion.footer className="footer" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <div className="container">
          <p>© 2026 Alex — Digital Marketer & Brand Strategist</p>
          <nav className="footer-links">
            <a href="#privacy">Privacy</a>
            <a href="#twitter">Twitter</a>
            <a href="#linkedin">LinkedIn</a>
          </nav>
        </div>
      </motion.footer>
    </div>
  )
}
