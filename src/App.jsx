import React, { useState, useEffect } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  ChevronLeft,
  Star,
  Droplets,
  Flame,
  Wrench,
  Layers,
  Sparkles,
  Home,
  CheckCircle2,
  Menu,
  X,
  FileText,
  Award,
  ShieldCheck,
  Send
} from 'lucide-react'

// Mock Data for Services
const services = [
  {
    id: 'plumbing',
    title: 'General Plumbing',
    icon: Droplets,
    description: 'Precision pipe installations, domestic leak repairs, pressure adjustments, and general sanitary fixture replacements.',
    badge: 'Standard & Emergency'
  },
  {
    id: 'drainage',
    title: 'Drainage & Stormwater',
    icon: Wrench,
    description: 'High-performance drainlaying, storm mains repair, unblocking, and localized ground stormwater solutions.',
    badge: 'Licensed Drainlayers'
  },
  {
    id: 'gasfitting',
    title: 'Gas Fitting',
    icon: Flame,
    description: 'Certified installations, gas safety certificate compliance, continuous-flow gas heaters, and appliance servicing.',
    badge: 'Certified Gasfitters'
  },
  {
    id: 'bathroom',
    title: 'Bathroom Renovations',
    icon: Sparkles,
    description: 'End-to-end bathroom builds, from technical plumbing and layout redesigns to bespoke premium tapware installation.',
    badge: 'Design-Build Quality'
  },
  {
    id: 'roofing',
    title: 'Roofing & Guttering',
    icon: Home,
    description: 'Custom iron roofing repairs, spouting installations, downpipes, flashings, and long-term leak prevention.',
    badge: 'Weatherproof Solutions'
  },
  {
    id: 'cylinders',
    title: 'Hot Water Cylinders',
    icon: Layers,
    description: 'Mains pressure conversions, high-efficiency cylinder installations, elements, and prompt emergency system replacement.',
    badge: 'Fast Install'
  }
]

// Mock Data for Why Choose Us
const whyUsData = [
  {
    title: 'Craftsman Standards',
    description: 'We treat every pipeline alignment, solder joint, and fixture placement with absolute technical precision.',
    icon: Award
  },
  {
    title: 'Auckland Local Response',
    description: 'Based in Morningside, we dispatch our fully equipped service vehicles swiftly across central and greater Auckland.',
    icon: MapPin
  },
  {
    title: 'Transparent Estimates',
    description: 'Comprehensive line-item breakdowns, fixed quoting on plans, and absolute clarity before we start the tools.',
    icon: FileText
  },
  {
    title: 'Comprehensive Licenses',
    description: 'Our team contains fully registered, certified plumbers, drainlayers, and gasfitters matching NZBC requirements.',
    icon: ShieldCheck
  }
]

// Mock Data for Steps
const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'Outline your job details via phone or our enquiry form. We talk through technical needs and timelines.'
  },
  {
    number: '02',
    title: 'Site Check & Estimate',
    description: 'We review the physical piping, drainage, or plans, presenting a structured, fixed quote for authorization.'
  },
  {
    number: '03',
    title: 'Precision Execution',
    description: 'Our certified professionals complete the install, adhering strictly to building standards and site safety.'
  },
  {
    number: '04',
    title: 'Guarantee & Signoff',
    description: 'We test pressures, clean the work zone thoroughly, and provide NZ safety certificates and warranties.'
  }
]

// Mock Data for Renovation Tips
const renovationTips = [
  {
    id: 'tapware',
    category: 'Tapware',
    title: 'Prioritizing Cartridge Reliability',
    excerpt: 'Vibrant finishes capture attention, but ceramic cartridge quality determines tap lifetime. Look for DZR brass housings.',
    content: 'It is easy to get distracted by trendy brushed brass or matte black finishes. However, always verify that the fittings are constructed from DZR (Dezincification Resistant) brass and contain high-grade European ceramic cartridges (like Kerox). Under high Auckland mains pressure, cheap components fatigue quickly, leading to silent, costly cabinet floor leaks.'
  },
  {
    id: 'showers',
    category: 'Showers',
    title: 'Liquid Membrane & Drainage Fall',
    excerpt: 'Walk-in tiled showers look modern, but waterproofing failures ruin structural framing. Specify multi-layer tanking.',
    content: 'A walk-in tiled shower must achieve a continuous minimum 1:80 fall toward the linear waste outlet. Before tiling, ensure a certified liquid-applied waterproofing membrane is laid with reinforcing bandages at all wall-floor junctions. Always demand a pressure-test of the hot/cold lines before the wall lining goes up.'
  },
  {
    id: 'vanities',
    category: 'Vanities',
    title: 'Timber Blocking for Wall-Hung Units',
    excerpt: 'Wall-hung vanities maximize floor visual space. They require structural timber studs pre-installed behind wall boards.',
    content: 'Wall-hung vanities look incredibly sleek and ease floor cleaning. However, a 1200mm double-bowl vanity full of water is extremely heavy. During the framing (pre-line) phase, specify heavy-duty timber blocking (minimum 100x50mm framing timber) bolted securely between studs to take the bracket loads. Skipping this leads to sagging drywall.'
  },
  {
    id: 'toilets',
    category: 'Toilets',
    title: 'Identifying S-Trap vs P-Trap Configurations',
    excerpt: 'Ensure you buy the right toilet waste connection. Floor-exiting (S-trap) and wall-exiting (P-trap) require different offsets.',
    content: 'Before ordering a premium back-to-wall toilet, identify where the waste pipe leaves the room. If it drops directly into the concrete floor, you have an S-trap. If it goes horizontally out through the wall, it is a P-trap. Double-check your "set-out" measurement (distance from the finished wall to the center of the waste pipe) so the pan sits perfectly flush.'
  },
  {
    id: 'kitchens',
    category: 'Kitchens',
    title: 'Scullery Venting & Sink Placements',
    excerpt: 'Sculleries are highly popular, but secondary sinks must remain appropriately vented to prevent slow drainage gurgles.',
    content: 'Adding a secondary sink in a butler’s pantry or scullery is standard in modern redesigns. To prevent the main kitchen sink drainage from siphoning the scullery trap, ensure a dedicated air admittance valve (AAV) or vent pipe is detailed in the plumbing design. This keeps water seals intact and prevents unpleasant drain odors.'
  }
]

// Mock Data for Testimonials
const testimonials = [
  {
    quote: "The ATP team renovated our entire 1920s bungalow bathroom. Their pipework was incredibly tidy, and they coordinated seamlessly with our builder. A true premium experience.",
    author: "Eleanor & Mark S.",
    suburb: "Remuera",
    rating: 5
  },
  {
    quote: "We had a persistent roof spouting leak that two other roofers failed to fix. ATP inspected it, re-angled the guttering fall, and solved it in one afternoon. Honest trade expertise.",
    author: "Liam K.",
    suburb: "Kingsland",
    rating: 5
  },
  {
    quote: "Professionalism from start to finish. Their advice on back-to-wall toilets saved us from ordering the wrong set-out. Their team is polite, fast, and does not cut corners.",
    author: "Sarah D.",
    suburb: "Ponsonby",
    rating: 5
  }
]

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTipIdx, setActiveTipIdx] = useState(0)
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0)
  
  // Form State
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    jobType: 'Plumbing',
    message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [heroImgError, setHeroImgError] = useState(false)
  const [bathroomImgError, setBathroomImgError] = useState(false)

  // Track scroll position to shrink header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonialIdx((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // Mock submit logic
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormState({
        name: '',
        phone: '',
        email: '',
        jobType: 'Plumbing',
        message: ''
      })
    }, 4000)
  }

  const scrollToSection = (id) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // height of sticky nav
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-warm-white font-sans text-charcoal antialiased selection:bg-copper selection:text-white">
      
      {/* 1. TOP UTILITY BAR */}
      <div className="bg-charcoal text-warm-white/90 text-xs py-2.5 px-4 sm:px-6 lg:px-8 border-b border-copper/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-copper animate-pulse"></span>
              Auckland-Wide Service
            </span>
            <span className="hidden md:inline-block text-warm-white/60">|</span>
            <span className="hidden md:inline-block">634 New North Road, Morningside</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:098150088" className="flex items-center gap-1.5 hover:text-copper transition-colors duration-200">
              <Phone size={12} className="text-copper" />
              <span className="font-semibold font-serif tracking-wider">09 815 0088</span>
            </a>
            <span className="text-warm-white/40">|</span>
            <div className="flex items-center gap-1.5 text-warm-white/70">
              <Clock size={12} className="text-copper" />
              <span>Mon-Fri: 7:30 AM - 5:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. STICKY NAVBAR */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-charcoal/95 backdrop-blur-md shadow-xl py-3 border-b border-copper/20' 
          : 'bg-charcoal py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo / Wordmark */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 group text-left cursor-pointer">
            <div className="w-10 h-10 rounded bg-copper flex items-center justify-center text-charcoal font-serif font-black text-xl transition-all duration-300 group-hover:bg-copper-hover group-hover:scale-105">
              A
            </div>
            <div>
              <span className="block font-serif font-black tracking-wide text-lg text-warm-white leading-tight">
                ALL THINGS
              </span>
              <span className="block text-xs font-mono uppercase tracking-[0.25em] text-copper -mt-0.5">
                PLUMBING
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="text-warm-white/80 hover:text-copper font-medium text-sm tracking-wide transition-colors cursor-pointer">
              Services
            </button>
            <button onClick={() => scrollToSection('bathroom-dive')} className="text-warm-white/80 hover:text-copper font-medium text-sm tracking-wide transition-colors cursor-pointer">
              Bathroom Projects
            </button>
            <button onClick={() => scrollToSection('why-us')} className="text-warm-white/80 hover:text-copper font-medium text-sm tracking-wide transition-colors cursor-pointer">
              Why ATP
            </button>
            <button onClick={() => scrollToSection('process')} className="text-warm-white/80 hover:text-copper font-medium text-sm tracking-wide transition-colors cursor-pointer">
              Our Process
            </button>
            <button onClick={() => scrollToSection('tips')} className="text-warm-white/80 hover:text-copper font-medium text-sm tracking-wide transition-colors cursor-pointer">
              Expert Advice
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-warm-white/80 hover:text-copper font-medium text-sm tracking-wide transition-colors cursor-pointer">
              Reviews
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-copper hover:bg-copper-hover text-warm-white font-medium text-sm px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer group"
            >
              Get a Quote
              <ChevronRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded text-warm-white hover:text-copper transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`lg:hidden fixed inset-x-0 top-[65px] bg-charcoal border-b border-copper/20 transition-all duration-300 ease-in-out origin-top overflow-hidden shadow-2xl ${
          mobileMenuOpen ? 'max-h-screen opacity-100 py-6 px-4' : 'max-h-0 opacity-0 py-0 px-4'
        }`}>
          <div className="flex flex-col gap-4">
            <button onClick={() => scrollToSection('services')} className="text-left text-warm-white/80 hover:text-copper font-medium py-2 border-b border-warm-white/5 cursor-pointer">
              Our Services
            </button>
            <button onClick={() => scrollToSection('bathroom-dive')} className="text-left text-warm-white/80 hover:text-copper font-medium py-2 border-b border-warm-white/5 cursor-pointer">
              Bathroom Renovations
            </button>
            <button onClick={() => scrollToSection('why-us')} className="text-left text-warm-white/80 hover:text-copper font-medium py-2 border-b border-warm-white/5 cursor-pointer">
              Why Choose Us
            </button>
            <button onClick={() => scrollToSection('process')} className="text-left text-warm-white/80 hover:text-copper font-medium py-2 border-b border-warm-white/5 cursor-pointer">
              Our Work Process
            </button>
            <button onClick={() => scrollToSection('tips')} className="text-left text-warm-white/80 hover:text-copper font-medium py-2 border-b border-warm-white/5 cursor-pointer">
              Expert Renovation Tips
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-left text-warm-white/80 hover:text-copper font-medium py-2 border-b border-warm-white/5 cursor-pointer">
              Customer Reviews
            </button>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a 
                href="tel:098150088" 
                className="bg-charcoal border border-copper text-copper font-semibold px-6 py-3 rounded-lg text-center flex items-center justify-center gap-2 hover:bg-copper hover:text-warm-white transition-all duration-200"
              >
                <Phone size={16} />
                Call 09 815 0088
              </a>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="bg-copper hover:bg-copper-hover text-warm-white font-medium px-6 py-3 rounded-lg text-center cursor-pointer shadow-md"
              >
                Request Consultation
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION */}
      <section className="bg-charcoal text-warm-white pt-12 pb-24 lg:pt-20 lg:pb-32 relative overflow-hidden bg-diagonal-lines">
        {/* Decorative elements */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-copper/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute left-1/4 bottom-0 w-80 h-80 bg-copper/5 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 lg:space-y-8">
              <div className="inline-flex items-center gap-2 bg-copper/10 border border-copper/30 text-copper px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-copper"></span>
                Certified Master Plumbers & Gasfitters
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold tracking-tight text-warm-white leading-[1.08] max-w-2xl">
                Auckland’s Trusted Hands for Every Pipe, Fitting & Roofline
              </h1>
              
              <p className="text-lg text-warm-white/70 font-light max-w-xl leading-relaxed">
                From emergency hot water cylinder replacements in Morningside to premium bathroom design-build projects, we bring confident, craftsman-quality trade services to your home.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="bg-copper hover:bg-copper-hover text-warm-white font-semibold px-8 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  Request a Free Quote
                  <ChevronRight size={18} className="transition-transform group-hover:translate-x-0.5" />
                </button>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="bg-warm-white/5 hover:bg-warm-white/10 text-warm-white border border-warm-white/20 font-medium px-8 py-3.5 rounded-lg transition-colors duration-200 flex items-center justify-center cursor-pointer"
                >
                  Explore Services
                </button>
              </div>

              {/* Trust strip */}
              <div className="pt-8 border-t border-warm-white/10 grid grid-cols-3 gap-4 text-left max-w-lg">
                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-copper">15+</div>
                  <div className="text-xs text-warm-white/60 mt-1">Years Serving Auckland</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-copper">100%</div>
                  <div className="text-xs text-warm-white/60 mt-1">Licenced Workmanship</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-copper">24/7</div>
                  <div className="text-xs text-warm-white/60 mt-1">Emergency Support</div>
                </div>
              </div>
            </div>

            {/* Hero Right Image (Duotone) */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-copper to-charcoal opacity-30 blur-lg pointer-events-none"></div>
              <div className="relative border border-copper/20 rounded-2xl overflow-hidden shadow-2xl duotone-copper aspect-[4/5] max-w-md mx-auto flex items-center justify-center">
                {heroImgError ? (
                  <div className="w-full h-full bg-charcoal flex flex-col items-center justify-center p-8 text-center relative select-none">
                    <div className="absolute inset-0 bg-dot-grid opacity-30"></div>
                    <svg className="w-48 h-48 text-copper/60 opacity-80 mb-6" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                      <line x1="10" y1="0" x2="10" y2="100" strokeDasharray="2 2" className="text-copper/20" />
                      <line x1="30" y1="0" x2="30" y2="100" strokeDasharray="2 2" className="text-copper/20" />
                      <line x1="50" y1="0" x2="50" y2="100" strokeDasharray="2 2" className="text-copper/20" />
                      <line x1="70" y1="0" x2="70" y2="100" strokeDasharray="2 2" className="text-copper/20" />
                      <line x1="90" y1="0" x2="90" y2="100" strokeDasharray="2 2" className="text-copper/20" />
                      <line x1="0" y1="20" x2="100" y2="20" strokeDasharray="2 2" className="text-copper/20" />
                      <line x1="0" y1="40" x2="100" y2="40" strokeDasharray="2 2" className="text-copper/20" />
                      <line x1="0" y1="60" x2="100" y2="60" strokeDasharray="2 2" className="text-copper/20" />
                      <line x1="0" y1="80" x2="100" y2="80" strokeDasharray="2 2" className="text-copper/20" />
                      
                      <path d="M 20 20 L 50 20 A 10 10 0 0 1 60 30 L 60 70 A 10 10 0 0 0 70 80 L 90 80" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      <circle cx="50" cy="20" r="3" fill="#C1662B" stroke="currentColor" strokeWidth="1" />
                      <circle cx="70" cy="80" r="3" fill="#C1662B" stroke="currentColor" strokeWidth="1" />
                      <path d="M 15 15 L 25 25 M 25 15 L 15 25" stroke="currentColor" strokeWidth="2" />
                      <path d="M 85 75 L 95 85 M 95 75 L 85 85" stroke="currentColor" strokeWidth="2" />
                      
                      <text x="22" y="13" fill="#C1662B" fontSize="4.5" fontFamily="monospace">DN50 COPPER RUN</text>
                      <text x="64" y="50" fill="#C1662B" fontSize="4.5" fontFamily="monospace" transform="rotate(90,64,50)">90° ELBOW</text>
                      <text x="50" y="93" fill="#C1662B" fontSize="5.5" fontFamily="monospace" textAnchor="middle" letterSpacing="0.1em">ATP SPECIFICATION SHEET</text>
                    </svg>
                    <div className="z-10">
                      <span className="block text-[10px] font-mono uppercase tracking-[0.25em] text-copper">ATP CRAFTSMANSHIP</span>
                      <span className="block text-xs font-serif text-warm-white/70 mt-1 uppercase tracking-wide">Pipework Blueprint Drawing</span>
                    </div>
                  </div>
                ) : (
                  <img 
                    src="/hero-plumbing.png" 
                    alt="Craftsman connecting copper pipes in workshop"
                    className="w-full h-full object-cover"
                    onError={() => setHeroImgError(true)}
                  />
                )}
                
                {/* Decorative architectural grid overlays */}
                <div className="absolute top-4 left-4 border border-warm-white/20 w-8 h-8 pointer-events-none z-10"></div>
                <div className="absolute bottom-4 right-4 border border-warm-white/20 w-8 h-8 pointer-events-none z-10"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SERVICES OVERVIEW (Asymmetric Grid) */}
      <section id="services" className="py-24 bg-warm-white relative bg-dot-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-copper block mb-3 font-semibold">
              OUR SERVICE RANGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight leading-tight">
              Tradecraft Solutions Engineered to Endure
            </h2>
            <p className="text-charcoal/60 mt-4 max-w-xl font-light">
              We cover all scopes from repair emergencies to architectural specifications. Click a service to trigger an enquiry directly.
            </p>
          </div>

          {/* Asymmetric Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              // Stagger heights or widths conceptually by mapping to styles
              const cardSpan = index === 1 || index === 3 ? 'lg:col-span-2' : ''
              
              return (
                <div 
                  key={service.id}
                  onClick={() => {
                    setFormState(prev => ({ ...prev, jobType: service.title }))
                    scrollToSection('contact')
                  }}
                  className={`bg-warm-white border border-cream rounded-xl p-8 hover:border-copper/40 transition-all duration-300 group cursor-pointer flex flex-col justify-between hover:-translate-y-1.5 shadow-sm hover:shadow-xl relative overflow-hidden ${cardSpan}`}
                >
                  <div className="absolute right-0 top-0 w-24 h-24 bg-copper/5 rounded-bl-full translate-x-4 -translate-y-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 pointer-events-none"></div>
                  
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-lg bg-charcoal text-copper flex items-center justify-center group-hover:bg-copper group-hover:text-warm-white transition-colors duration-300">
                        <Icon size={24} />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-copper bg-copper/10 px-2.5 py-1 rounded">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif font-semibold text-charcoal group-hover:text-copper transition-colors duration-200">
                      {service.title}
                    </h3>

                    <p className="text-sm text-charcoal/60 font-light mt-3 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-cream flex items-center gap-1.5 text-xs font-semibold text-copper tracking-wider uppercase group-hover:text-copper-hover">
                    Book Service / Consult
                    <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* 5. FEATURED SERVICE DEEP-DIVE (Bathroom Renovations) */}
      <section id="bathroom-dive" className="py-24 bg-charcoal text-warm-white relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-copper/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image Column */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-copper to-transparent opacity-20 blur-lg pointer-events-none"></div>
              <div className="relative border border-copper/20 rounded-2xl overflow-hidden shadow-2xl duotone-copper aspect-[4/5] max-w-md mx-auto flex items-center justify-center">
                {bathroomImgError ? (
                  <div className="w-full h-full bg-charcoal flex flex-col items-center justify-center p-8 text-center relative select-none">
                    <div className="absolute inset-0 bg-dot-grid opacity-30"></div>
                    <svg className="w-48 h-48 text-copper/60 opacity-80 mb-6" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                      <rect x="15" y="15" width="70" height="70" stroke="currentColor" strokeWidth="2.5" />
                      <line x1="15" y1="50" x2="85" y2="50" strokeDasharray="1 3" className="text-copper/30" />
                      <line x1="50" y1="15" x2="50" y2="85" strokeDasharray="1 3" className="text-copper/30" />
                      
                      <rect x="15" y="15" width="25" height="25" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="15" y1="15" x2="40" y2="40" stroke="currentColor" strokeWidth="1" />
                      <line x1="40" y1="15" x2="15" y2="40" stroke="currentColor" strokeWidth="1" />
                      <circle cx="27.5" cy="27.5" r="2" fill="#C1662B" />
                      
                      <rect x="55" y="15" width="30" height="15" stroke="currentColor" strokeWidth="1.5" />
                      <ellipse cx="70" cy="22.5" rx="6" ry="4" stroke="currentColor" strokeWidth="1" />
                      
                      <rect x="15" y="60" width="12" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                      <rect x="15" y="55" width="12" height="5" stroke="currentColor" strokeWidth="1.5" />
                      
                      <path d="M 85 70 A 15 15 0 0 1 70 85" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                      <line x1="85" y1="70" x2="85" y2="85" stroke="currentColor" strokeWidth="1.5" />
                      
                      <text x="27.5" y="45" fill="#C1662B" fontSize="4.5" fontFamily="monospace" textAnchor="middle">SHOWER</text>
                      <text x="70" y="37" fill="#C1662B" fontSize="4.5" fontFamily="monospace" textAnchor="middle">VANITY</text>
                      <text x="21" y="82" fill="#C1662B" fontSize="4.5" fontFamily="monospace" textAnchor="middle">WC</text>
                      <text x="50" y="93" fill="#C1662B" fontSize="5.5" fontFamily="monospace" textAnchor="middle" letterSpacing="0.05em">1:20 BATHROOM LAYOUT</text>
                    </svg>
                    <div className="z-10">
                      <span className="block text-[10px] font-mono uppercase tracking-[0.25em] text-copper">ATP ARCHITECTURAL</span>
                      <span className="block text-xs font-serif text-warm-white/70 mt-1 uppercase tracking-wide">Premium Layout Drawing</span>
                    </div>
                  </div>
                ) : (
                  <img 
                    src="/bathroom-renovation.png" 
                    alt="Modern minimalist luxury bathroom featuring copper fixtures"
                    className="w-full h-full object-cover"
                    onError={() => setBathroomImgError(true)}
                  />
                )}
                
                <div className="absolute bottom-4 left-4 right-4 bg-charcoal/90 backdrop-blur-sm p-4 rounded-lg border border-copper/20 text-left z-10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-copper block">Featured Project</span>
                  <span className="text-sm font-serif font-bold text-warm-white">Morningside Architectural Bathroom Concept</span>
                </div>
              </div>
            </div>

            {/* Right Details Column */}
            <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-copper block font-semibold">
                DESIGN-BUILD EXPERTISE
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-warm-white tracking-tight leading-tight">
                Bathroom Redesigns Built to Last Decades
              </h2>
              <p className="text-warm-white/70 font-light leading-relaxed">
                Bathrooms demand superior technical plumbing layouts before beautiful fixtures go on wall tiles. We manage the entire pipework, valve layouts, drainage falls, and fixtures with high-end craftsman quality.
              </p>

              {/* Checklist */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4 pb-6">
                {[
                  'Certified pressure analysis & flow planning',
                  'Waterproofing tanking validation checks',
                  'High-spec tapware and vanity alignment',
                  'Framing reinforcement for wall-hung items',
                  'Full council compliance & gas certs',
                  'Coordination with local Auckland builders'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-copper shrink-0 mt-0.5" />
                    <span className="text-sm text-warm-white/80 font-light">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => {
                    setFormState(prev => ({ ...prev, jobType: 'Bathroom Renovation' }))
                    scrollToSection('contact')
                  }}
                  className="bg-copper hover:bg-copper-hover text-warm-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 group cursor-pointer shadow-md"
                >
                  Discuss Your Renovation
                  <ChevronRight size={18} className="transition-transform group-hover:translate-x-0.5" />
                </button>
                <button 
                  onClick={() => scrollToSection('tips')} 
                  className="bg-transparent hover:bg-warm-white/5 text-warm-white border border-warm-white/20 font-medium px-8 py-3.5 rounded-lg transition-colors duration-200 flex items-center justify-center cursor-pointer"
                >
                  Read Renovation Guide
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US (Staggered/Offset Layout) */}
      <section id="why-us" className="py-24 bg-warm-white relative bg-diagonal-lines">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-copper block mb-3 font-semibold">
              THE ATP WAY
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight">
              Why Aucklanders Hire Our Team
            </h2>
            <p className="text-charcoal/60 mt-4 font-light text-sm">
              We step away from generic trade template services, focusing instead on high-end alignment, communication, and lasting warranties.
            </p>
          </div>

          {/* Staggered Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {whyUsData.map((item, idx) => {
              const Icon = item.icon
              // Apply offset styles to create staggered alignment on larger screens
              const staggerClass = idx % 2 === 1 ? 'lg:translate-y-4' : 'lg:-translate-y-4'
              
              return (
                <div 
                  key={idx}
                  className={`bg-warm-white border border-cream rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between ${staggerClass}`}
                >
                  <div>
                    <div className="w-10 h-10 rounded bg-copper/10 text-copper flex items-center justify-center mb-6">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-charcoal mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs text-charcoal/60 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                  <div className="w-8 h-1 bg-cream group-hover:bg-copper transition-colors duration-300 mt-6 rounded"></div>
                </div>
              )
            })}
          </div>

          <div className="h-6 hidden lg:block"></div> {/* Spacer for offset layout bleed */}
        </div>
      </section>

      {/* 7. OUR PROCESS TIMELINE */}
      <section id="process" className="py-24 bg-charcoal text-warm-white relative overflow-hidden bg-dot-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-2xl mb-16 text-left">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-copper block mb-3 font-semibold">
              TRANSPARENT STEPS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-warm-white tracking-tight">
              A Structured Approach to Every Job
            </h2>
            <p className="text-warm-white/60 mt-4 font-light text-sm">
              We take the guesswork out of plumbing. From initial review to our final safety guarantee, you know what to expect.
            </p>
          </div>

          {/* Timeline Cards Container */}
          <div className="relative">
            {/* Timeline connectors (horizontal line for desktop) */}
            <div className="hidden lg:block absolute top-[52px] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-copper/20 via-copper/60 to-copper/20 pointer-events-none"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, idx) => (
                <div key={idx} className="group bg-charcoal border border-warm-white/10 hover:border-copper/40 p-6 rounded-xl transition-all duration-300 relative">
                  
                  {/* Step number badge acting as vertical pin */}
                  <div className="w-12 h-12 rounded-full bg-charcoal border-2 border-copper text-copper font-serif font-bold text-lg flex items-center justify-center mb-6 group-hover:bg-copper group-hover:text-charcoal transition-all duration-300">
                    {step.number}
                  </div>

                  <h3 className="text-lg font-serif font-semibold text-warm-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-warm-white/60 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 8. RENOVATION TIPS (Interactive Filter/Tabs System) */}
      <section id="tips" className="py-24 bg-warm-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div className="max-w-2xl text-left">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-copper block mb-3 font-semibold">
                FROM THE ATP WORKSHOP
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight">
                Renovation Advice From Certified Tradesmen
              </h2>
              <p className="text-charcoal/60 mt-3 font-light text-sm">
                We believe in empowering Auckland homeowners with practical insights that prevent structural water damage.
              </p>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setActiveTipIdx((prev) => (prev - 1 + renovationTips.length) % renovationTips.length)}
                className="w-10 h-10 rounded-lg border border-cream flex items-center justify-center text-charcoal hover:border-copper hover:text-copper transition-colors cursor-pointer"
                aria-label="Previous tip"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => setActiveTipIdx((prev) => (prev + 1) % renovationTips.length)}
                className="w-10 h-10 rounded-lg border border-cream flex items-center justify-center text-charcoal hover:border-copper hover:text-copper transition-colors cursor-pointer"
                aria-label="Next tip"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Active Tip Card Structure */}
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Categories sidebar (Interactive Selector) */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-4 lg:pb-0 scrollbar-none">
              {renovationTips.map((tip, idx) => (
                <button
                  key={tip.id}
                  onClick={() => setActiveTipIdx(idx)}
                  className={`px-5 py-3 rounded-lg text-left text-xs font-semibold tracking-wider uppercase border whitespace-nowrap lg:whitespace-normal transition-all duration-200 cursor-pointer ${
                    activeTipIdx === idx 
                      ? 'bg-charcoal text-warm-white border-charcoal shadow-md scale-[1.02]' 
                      : 'bg-warm-white text-charcoal/60 border-cream hover:border-copper/40'
                  }`}
                >
                  <span className="block text-[9px] text-copper tracking-[0.2em] mb-0.5">Tip Category</span>
                  {tip.category}
                </button>
              ))}
            </div>

            {/* Tip Display Box */}
            <div className="lg:col-span-8 bg-warm-white border border-cream rounded-xl p-8 sm:p-10 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="absolute right-0 bottom-0 w-36 h-36 bg-copper/5 rounded-tl-full pointer-events-none"></div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-copper bg-copper/10 px-3 py-1 rounded">
                    {renovationTips[activeTipIdx].category} advice
                  </span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal leading-tight">
                  {renovationTips[activeTipIdx].title}
                </h3>
                
                <p className="text-sm font-semibold text-charcoal/80 leading-relaxed italic border-l-2 border-copper pl-4">
                  "{renovationTips[activeTipIdx].excerpt}"
                </p>
                
                <p className="text-sm text-charcoal/65 leading-relaxed font-light">
                  {renovationTips[activeTipIdx].content}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-cream flex items-center justify-between text-xs">
                <span className="text-charcoal/40 font-mono">ATP Professional Standard</span>
                <button 
                  onClick={() => {
                    setFormState(prev => ({ 
                      ...prev, 
                      message: `Interested in consulting about ${renovationTips[activeTipIdx].category} plumbing layout. Info: ${renovationTips[activeTipIdx].title}` 
                    }))
                    scrollToSection('contact')
                  }}
                  className="text-copper hover:text-copper-hover font-semibold tracking-wider uppercase flex items-center gap-1 cursor-pointer"
                >
                  Ask ATP About This
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9. TESTIMONIALS / TRUST */}
      <section id="testimonials" className="py-24 bg-charcoal text-warm-white relative overflow-hidden bg-diagonal-lines border-t border-b border-copper/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-copper block mb-4 font-semibold">
            CUSTOMER TRUST
          </span>

          <div className="flex justify-center gap-1 mb-8">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={20} className="fill-copper text-copper" />
            ))}
          </div>

          {/* Testimonial Quote Carousel */}
          <div className="h-64 sm:h-48 md:h-44 flex flex-col justify-center">
            <blockquote className="text-xl sm:text-2xl font-serif font-light leading-relaxed text-warm-white italic">
              "{testimonials[activeTestimonialIdx].quote}"
            </blockquote>
          </div>

          <div className="mt-6">
            <span className="block font-serif font-bold text-copper text-lg">
              {testimonials[activeTestimonialIdx].author}
            </span>
            <span className="block text-xs text-warm-white/50 tracking-wider uppercase mt-1">
              Verified client — {testimonials[activeTestimonialIdx].suburb}, Auckland
            </span>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2.5 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonialIdx(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                  activeTestimonialIdx === idx ? 'bg-copper w-6' : 'bg-warm-white/20 hover:bg-warm-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>

        </div>
      </section>

      {/* 10. FINAL CTA BANNER */}
      <section className="bg-copper text-warm-white py-16 lg:py-20 relative overflow-hidden">
        {/* Abstract circles */}
        <div className="absolute left-0 bottom-0 w-80 h-80 bg-charcoal/10 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-96 h-96 bg-warm-white/10 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-left">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight leading-tight">
              Got a Plumbing Project? Let’s Resolve It.
            </h2>
            <p className="text-sm font-light text-warm-white/90 max-w-xl">
              Talk directly with certified Morningside tradesmen. No call center redirects — just direct, practical project estimates.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a 
              href="tel:098150088" 
              className="bg-charcoal hover:bg-charcoal/90 text-warm-white font-bold px-8 py-4 rounded-lg flex items-center justify-center gap-2.5 shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <Phone size={18} className="text-copper animate-bounce" />
              Call 09 815 0088
            </a>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-warm-white hover:bg-warm-white/95 text-charcoal font-semibold px-8 py-4 rounded-lg shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              Request Quote Online
            </button>
          </div>
        </div>
      </section>

      {/* 11. CONTACT / ENQUIRY SECTION */}
      <section id="contact" className="py-24 bg-warm-white relative bg-dot-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Info Panel Left */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-copper block mb-3 font-semibold">
                  GET IN TOUCH
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight">
                  Start Your Plumbing Quote
                </h2>
                <p className="text-charcoal/60 mt-3 font-light text-sm">
                  Specify your project requirements or maintenance needs below. Our certified team reviews submission sheets daily.
                </p>
              </div>

              {/* Info blocks */}
              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-charcoal text-copper flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-bold text-charcoal">Morningside Workshop</h4>
                    <p className="text-xs text-charcoal/60 font-light mt-1">634 New North Road, Morningside, Auckland 1022</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-charcoal text-copper flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-bold text-charcoal">Office & Urgent Bookings</h4>
                    <p className="text-xs text-charcoal/60 font-light mt-1">09 815 0088</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-charcoal text-copper flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-bold text-charcoal">Email Correspondence</h4>
                    <p className="text-xs text-charcoal/60 font-light mt-1">info@allthingsplumbing.co.nz</p>
                  </div>
                </div>
              </div>

              {/* Custom SVG/CSS styled map mockup */}
              <div className="border border-cream rounded-xl p-4 bg-charcoal text-warm-white overflow-hidden relative shadow-md">
                <div className="absolute inset-0 bg-[radial-gradient(#C1662B15_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
                <div className="h-44 rounded bg-[#1e1e21] border border-warm-white/5 relative flex items-center justify-center">
                  
                  {/* abstract streets representation */}
                  <div className="absolute top-[30%] left-0 right-0 h-0.5 bg-warm-white/5"></div>
                  <div className="absolute top-[60%] left-0 right-0 h-1 bg-warm-white/5"></div>
                  <div className="absolute left-[40%] top-0 bottom-0 w-0.5 bg-warm-white/5"></div>
                  <div className="absolute left-[70%] top-0 bottom-0 w-1 bg-warm-white/5"></div>
                  
                  {/* radius zone */}
                  <div className="absolute w-24 h-24 rounded-full border border-copper/30 bg-copper/5 animate-pulse"></div>
                  
                  {/* Pin locator */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-copper flex items-center justify-center text-charcoal border-2 border-warm-white shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-charcoal"></span>
                    </div>
                    <span className="mt-1 px-2.5 py-1 bg-charcoal text-[9px] font-mono tracking-widest uppercase rounded border border-copper/30 text-copper">
                      ATP MORNINGSIDE
                    </span>
                  </div>
                </div>
                <div className="mt-3 flex justify-between items-center text-[10px] text-warm-white/55">
                  <span>Auckland Central Dispatch Radius</span>
                  <span className="text-copper">Licensed Service Zone</span>
                </div>
              </div>
            </div>

            {/* Form Right */}
            <div className="lg:col-span-7 bg-warm-white border border-cream rounded-xl p-8 sm:p-10 shadow-lg relative">
              
              {formSubmitted ? (
                <div className="h-[400px] flex flex-col justify-center items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-copper/10 text-copper flex items-center justify-center mb-2">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-charcoal">Enquiry Received</h3>
                  <p className="text-sm text-charcoal/60 max-w-sm">
                    Thank you. Your request sheet has been logged. An Auckland certified tradesman will review files and contact you shortly.
                  </p>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-copper animate-pulse pt-4">
                    Processing ticket logs...
                  </span>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6 text-left">
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-charcoal/70 mb-2">
                        Your Name *
                      </label>
                      <input 
                        type="text" 
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full bg-warm-white border border-cream rounded px-4 py-3 text-sm focus:outline-none focus:border-copper transition-colors"
                        placeholder="e.g. David Henderson"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-charcoal/70 mb-2">
                        Phone Number *
                      </label>
                      <input 
                        type="tel" 
                        id="phone"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full bg-warm-white border border-cream rounded px-4 py-3 text-sm focus:outline-none focus:border-copper transition-colors"
                        placeholder="e.g. 021 555 1234"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-charcoal/70 mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-warm-white border border-cream rounded px-4 py-3 text-sm focus:outline-none focus:border-copper transition-colors"
                      placeholder="e.g. david@morningside.co.nz"
                    />
                  </div>

                  <div>
                    <label htmlFor="jobType" className="block text-xs font-mono uppercase tracking-wider text-charcoal/70 mb-2">
                      Select Service Category
                    </label>
                    <select 
                      id="jobType"
                      value={formState.jobType}
                      onChange={(e) => setFormState(prev => ({ ...prev, jobType: e.target.value }))}
                      className="w-full bg-warm-white border border-cream rounded px-4 py-3 text-sm focus:outline-none focus:border-copper transition-colors"
                    >
                      <option value="Plumbing">General Plumbing & Maintenance</option>
                      <option value="Drainage">Drainage & Stormwater Layout</option>
                      <option value="Gas Fitting">Certified Gas Fitting</option>
                      <option value="Bathroom Renovation">Bathroom & Interior Renovation</option>
                      <option value="Roofing">Roofing, Spouting & Downpipes</option>
                      <option value="Hot Water Cylinder">Hot Water Cylinders / Upgrade</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-charcoal/70 mb-2">
                      Job Description & Project Details
                    </label>
                    <textarea 
                      id="message"
                      rows="4"
                      value={formState.message}
                      onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full bg-warm-white border border-cream rounded px-4 py-3 text-sm focus:outline-none focus:border-copper transition-colors resize-none"
                      placeholder="Please detail your plumbing requirements, appliance specs, or renovation scope..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-copper hover:bg-copper-hover text-warm-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer text-sm"
                  >
                    Submit Enquiry Form
                    <Send size={16} />
                  </button>

                  <span className="block text-center text-[10px] text-charcoal/40">
                    * Required validation parameters. ATP respects privacy rules.
                  </span>

                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="bg-charcoal text-warm-white/70 pt-16 pb-12 border-t border-copper/15 relative overflow-hidden bg-diagonal-lines">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-warm-white/10">
            
            {/* Column 1: Info */}
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-copper flex items-center justify-center text-charcoal font-serif font-black text-base">
                  A
                </div>
                <span className="font-serif font-black tracking-wider text-sm text-warm-white">
                  ALL THINGS PLUMBING
                </span>
              </div>
              <p className="text-xs font-light leading-relaxed text-warm-white/60">
                Premium tradesmen redrawing service standards for residential plumbing, gasfitting, and bathroom design-build. Based in Morningside, Auckland.
              </p>
              <div className="text-[10px] font-mono text-copper tracking-wider uppercase font-semibold">
                Est. 2011 — Auckland New Zealand
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-4 text-left">
              <h4 className="text-sm font-serif font-bold text-warm-white tracking-wider">Service Links</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button onClick={() => { setFormState(prev => ({ ...prev, jobType: 'Plumbing' })); scrollToSection('contact') }} className="hover:text-copper transition-colors cursor-pointer">
                    Plumbing & Pipework
                  </button>
                </li>
                <li>
                  <button onClick={() => { setFormState(prev => ({ ...prev, jobType: 'Drainage' })); scrollToSection('contact') }} className="hover:text-copper transition-colors cursor-pointer">
                    Drainlaying & Stormwater
                  </button>
                </li>
                <li>
                  <button onClick={() => { setFormState(prev => ({ ...prev, jobType: 'Gas Fitting' })); scrollToSection('contact') }} className="hover:text-copper transition-colors cursor-pointer">
                    Certified Gas Fitting
                  </button>
                </li>
                <li>
                  <button onClick={() => { setFormState(prev => ({ ...prev, jobType: 'Bathroom Renovation' })); scrollToSection('contact') }} className="hover:text-copper transition-colors cursor-pointer">
                    Bathroom Renovations
                  </button>
                </li>
                <li>
                  <button onClick={() => { setFormState(prev => ({ ...prev, jobType: 'Roofing' })); scrollToSection('contact') }} className="hover:text-copper transition-colors cursor-pointer">
                    Metal Roofing & Guttering
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div className="space-y-4 text-left">
              <h4 className="text-sm font-serif font-bold text-warm-white tracking-wider">Workshop Info</h4>
              <ul className="space-y-2.5 text-xs text-warm-white/60 font-light">
                <li className="flex items-start gap-2">
                  <MapPin size={14} className="text-copper shrink-0 mt-0.5" />
                  <span>634 New North Road, Morningside, Auckland 1022</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={14} className="text-copper shrink-0" />
                  <a href="tel:098150088" className="hover:text-copper font-medium text-warm-white">09 815 0088</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={14} className="text-copper shrink-0" />
                  <a href="mailto:info@allthingsplumbing.co.nz" className="hover:text-copper">info@allthingsplumbing.co.nz</a>
                </li>
              </ul>
            </div>

            {/* Column 4: Certifications */}
            <div className="space-y-4 text-left">
              <h4 className="text-sm font-serif font-bold text-warm-white tracking-wider">Trade Credentials</h4>
              <p className="text-xs font-light text-warm-white/60 leading-relaxed">
                Registered under the PGDB (Plumbers, Gasfitters and Drainlayers Board) of New Zealand. Guaranteed compliance.
              </p>
              <div className="inline-flex gap-2">
                <span className="px-2 py-1 bg-warm-white/5 border border-warm-white/10 rounded text-[9px] font-mono uppercase tracking-wider text-copper">
                  PGDB Licensed
                </span>
                <span className="px-2 py-1 bg-warm-white/5 border border-warm-white/10 rounded text-[9px] font-mono uppercase tracking-wider text-copper">
                  NZ Master Plumbers
                </span>
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-warm-white/40">
            <p>© {new Date().getFullYear()} All Things Plumbing (ATP). Redesign Concept Demo. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-copper transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-copper transition-colors">Terms of Trade</a>
              <a href="#" className="hover:text-copper transition-colors">NZBC Standard Standards</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  )
}

export default App
