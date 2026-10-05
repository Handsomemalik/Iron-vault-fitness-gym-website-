import { createElement, useEffect, useState, type CSSProperties, type ReactNode } from "react";

const img = (id: string, width = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=88`;

const photos = {
  hero: "/hero-gym.jpg",
  intro: img("photo-1683147778229-e8479ec374ff", 1400),
  strength: img("photo-1526506118085-60ce8714f8c5", 1000),
  personal: img("photo-1578924608828-79a71150f711", 1000),
  functional: img("photo-1434682772747-f16d3ea162c3", 1000),
  weight: img("photo-1605490855119-94921710a47f", 1000),
  muscle: img("photo-1709315957145-a4bad1feef28", 1000),
  athletic: img("photo-1544021601-3e5723f9d333", 1000),
  before: img("photo-1543300722-222718fd8509", 1100),
  after: img("photo-1609377375724-8fadc82cd50e", 1100),
  alex: img("photo-1601579548337-4ceb9ecd65c2", 900),
  daniel: img("photo-1628935291759-bbaf33a66dc6", 900),
  sophia: img("photo-1708011108776-45ad9e625269", 900),
  facility1: img("photo-1623874514711-0f321325f318", 1200),
  facility2: img("photo-1576678927484-cc907957088c", 900),
  facility3: img("photo-1593079831268-3381b0db4a77", 900),
  facility4: img("photo-1716307043003-dbe6a5cc496e", 900),
  facility5: img("photo-1637666062717-1c6bcfa4a4df", 1100),
  facility6: img("photo-1685633224597-294ff1adfd6f", 900),
  final: img("photo-1709315957145-a4bad1feef28", 2200),
  member1: img("photo-1581423880338-b9e4f9718df6", 600),
  member2: img("photo-1567877383455-b2e3cb3cc8e1", 600),
  member3: img("photo-1646072507419-9f836f8d3f67", 600),
};

type LinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  "aria-label"?: string;
  target?: string;
  rel?: string;
};

function Link(props: LinkProps) {
  return <>{createElement("a", props, props.children)}</>;
}

function Action({
  children,
  className = "",
  onClick,
  label,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  label?: string;
}) {
  return (
    <>
      {createElement(
        "button",
        {
          className,
          onClick,
          type: "button",
          "aria-label": label,
        },
        children,
      )}
    </>
  );
}

function Title({
  as = "h2",
  className = "",
  children,
}: {
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  children: ReactNode;
}) {
  return <>{createElement(as, { className }, children)}</>;
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Brand() {
  return (
    <Link href="#home" className="brand" aria-label="IronVault Fitness home">
      <span className="brand-mark">IV</span>
      <span className="brand-type">
        IRONVAULT <b>FITNESS</b>
      </span>
    </Link>
  );
}

const programs = [
  ["Strength Training", "Build foundational power with progressive, coach-led programming.", photos.strength],
  ["Personal Training", "One-to-one coaching engineered around your body and your ambition.", photos.personal],
  ["Functional Fitness", "Move better, react faster and perform at your highest level.", photos.functional],
  ["Weight Loss", "Sustainable body composition coaching grounded in real data.", photos.weight],
  ["Muscle Building", "Science-backed hypertrophy blocks with expert form analysis.", photos.muscle],
  ["Athletic Performance", "Speed, agility and explosive strength for serious competitors.", photos.athletic],
];

const features = [
  ["01", "Premium Equipment", "Competition-grade strength, cardio and functional equipment from the world’s best makers."],
  ["02", "Expert Coaches", "A vetted team of specialists who know how to turn ambition into measurable progress."],
  ["03", "Personalized Training", "Your assessments, lifestyle and goals shape every phase of your training plan."],
  ["04", "24/7 Access", "Train on your schedule with secure round-the-clock member access."],
  ["05", "Recovery Zone", "Dedicated mobility, compression and restoration spaces to keep you performing."],
  ["06", "Strong Community", "An ambitious, inclusive culture where the standard is high and support is real."],
];

const plans = [
  {
    name: "BASIC",
    price: "29",
    note: "Build your foundation",
    features: ["24/7 Gym Access", "Cardio Area", "Locker Access", "2 Group Classes"],
  },
  {
    name: "PRO",
    price: "59",
    note: "Our complete training experience",
    features: ["Everything in Basic", "Unlimited Group Classes", "Fitness Assessment", "Custom Training Plan", "Nutrition Guidance"],
    featured: true,
  },
  {
    name: "ELITE",
    price: "99",
    note: "Maximum guidance. Maximum results.",
    features: ["Everything in Pro", "4 Personal Training Sessions", "Full Nutrition Plan", "Recovery Sessions", "Priority Booking"],
  },
];

const schedule = [
  ["06:00", "HIIT", "Maya Chen", "45 min", "Advanced"],
  ["08:00", "Strength", "Alex Morgan", "60 min", "All levels"],
  ["12:30", "Boxing", "Daniel Carter", "50 min", "Intermediate"],
  ["17:30", "Functional Training", "Maya Chen", "45 min", "All levels"],
  ["18:30", "Yoga Mobility", "Sophia Williams", "60 min", "All levels"],
];

const faqs = [
  ["What membership should I choose?", "Basic is ideal for independent training, Pro adds full programming and classes, while Elite gives you the highest level of personal coaching and recovery support."],
  ["Do you offer personal training?", "Yes. Every coach is specialty-vetted, and we match you with the right expert after a complimentary movement and goal assessment."],
  ["Can beginners join?", "Absolutely. IRONVAULT is built for committed people at every level. Our onboarding process makes your first weeks clear, safe and motivating."],
  ["Do you offer nutrition plans?", "Pro members receive nutrition guidance, while Elite members get a fully personalized nutrition plan with ongoing check-ins."],
  ["Can I cancel my membership?", "Yes. Memberships can be managed with 30 days’ notice. There are no hidden cancellation fees."],
  ["Do you offer trial sessions?", "Yes. Book a consultation to tour the club, complete a short assessment and experience one coached session."],
];

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Programs", id: "programs" },
  { label: "Results", id: "results" },
  { label: "Trainers", id: "trainers" },
  { label: "Membership", id: "membership" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "contact" },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 24);

      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      // If near bottom of the page, highlight contact
      if (winHeight + scrollY >= docHeight - 140) {
        setActiveSection("contact");
        return;
      }

      // Check section positions relative to viewport
      const probeY = scrollY + 240;
      let current = "home";

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (probeY >= top && probeY < top + height) {
            current = item.id;
            break;
          } else if (probeY >= top) {
            current = item.id;
          }
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("revealed")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <main>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <Brand />
        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "is-active" : ""}
              onClick={() => {
                setActiveSection(item.id);
                setMenuOpen(false);
              }}
            >
              {item.label}
            </Link>
          ))}
          <div className="nav-contact-mobile">
            <Link href="tel:+923097227807" className="nav-phone">📞 +92 309 7227807</Link>
            <span className="nav-location">📍 Sector I-8, Islamabad</span>
          </div>
        </nav>
        <Link href="#membership" className="button button-accent header-cta">
          JOIN NOW
        </Link>
        <Action
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          label="Toggle navigation"
        >
          <span />
          <span />
        </Action>
      </header>

      <section id="home" className="hero">
        <img className="hero-image" src={photos.hero} alt="Elite athlete preparing barbell lift with chalk in dramatic gym" fetchPriority="high" />
        <div className="hero-overlay" />
        <div className="hero-content reveal">
          <div className="eyebrow">PREMIUM FITNESS EXPERIENCE</div>
          <Title as="h1" className="display hero-title">
            BUILD YOUR
            <br />
            <span>STRONGEST SELF.</span>
          </Title>
          <p className="hero-copy">Premium training, expert coaching, and a community built to push you beyond your limits.</p>
          <div className="button-row">
            <Link href="#membership" className="button button-accent">JOIN THE GYM <Arrow /></Link>
            <Link href="#programs" className="button button-ghost">EXPLORE PROGRAMS</Link>
          </div>
        </div>
        <div className="hero-stats">
          {[["10+", "YEARS EXPERIENCE"], ["2,500+", "MEMBERS"], ["15", "EXPERT TRAINERS"], ["24/7", "ACCESS"]].map(([value, label]) => (
            <div className="hero-stat" key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </div>
        <div className="scroll-cue"><span>SCROLL TO DISCOVER</span><i /></div>
      </section>

      <section id="about" className="section intro">
        <div className="container intro-grid">
          <div className="intro-visual reveal">
            <img src={photos.intro} alt="Athlete performing a barbell squat" />
            <span className="image-index">01</span>
            <div className="vertical-note">EST. 2016 · I-8 ISLAMABAD</div>
          </div>
          <div className="intro-copy reveal">
            <div className="eyebrow">MORE THAN A GYM</div>
            <Title className="section-title">WHERE DISCIPLINE BECOMES <span>RESULTS.</span></Title>
            <div className="rule" />
            <p>IRONVAULT was built for people who expect more—from their training, their environment and themselves. We combine world-class equipment, data-led coaching and an uncompromising culture of progress.</p>
            <p>Every detail is designed to remove friction and help you show up with intent. No noise. No shortcuts. Just the right work, done consistently.</p>
            <Link href="#contact" className="text-link">DISCOVER OUR STORY <Arrow /></Link>
          </div>
        </div>
      </section>

      <section id="programs" className="section programs">
        <div className="container">
          <div className="section-heading reveal">
            <div><div className="eyebrow">TRAIN WITH PURPOSE</div><Title className="section-title">PROGRAMS BUILT AROUND <span>YOUR GOALS.</span></Title></div>
            <p>Structured pathways, measurable progress and coaching that meets you where you are.</p>
          </div>
          <div className="program-grid">
            {programs.map(([title, description, image], index) => (
              <article className={`program-card reveal program-${index + 1}`} key={title}>
                <div className="program-image"><img src={image} alt={`${title} at IronVault Fitness`} /></div>
                <div className="program-info">
                  <span>0{index + 1}</span>
                  <Title as="h3">{title}</Title>
                  <p>{description}</p>
                  <Link href="#contact" aria-label={`Explore ${title}`}><Arrow /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section features">
        <div className="container">
          <div className="eyebrow reveal">THE IRONVAULT STANDARD</div>
          <Title className="section-title reveal">EVERYTHING YOU NEED <br />TO <span>LEVEL UP.</span></Title>
          <div className="feature-grid">
            {features.map(([number, title, copy]) => (
              <article className="feature reveal" key={title}>
                <div className="feature-icon">{number}</div>
                <Title as="h3">{title}</Title>
                <p>{copy}</p>
                <i />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="section transformation">
        <div className="container">
          <div className="transformation-header reveal">
            <div className="eyebrow">REAL WORK. MEASURABLE CHANGE.</div>
            <Title className="section-title">YOUR GOAL. YOUR GRIND.<br /><span>YOUR TRANSFORMATION.</span></Title>
          </div>
          <div className="transformation-grid">
            <div className="before-after reveal">
              <div className="transformation-image"><img src={photos.before} alt="Member at the start of his training journey" /><span>BEFORE · WEEK 01</span></div>
              <div className="transformation-image after"><img src={photos.after} alt="Member after a dedicated training program" /><span>AFTER · WEEK 16</span></div>
            </div>
            <div className="result-story reveal">
              <span className="quote-mark">“</span>
              <blockquote>It wasn’t about chasing a quick fix. The coaches helped me build a process I could trust—and a level of strength I didn’t know I had.</blockquote>
              <div className="member-line"><strong>JAMES K.</strong><span>PRO MEMBER · 16 WEEKS</span></div>
              <div className="result-stats">
                {[["−12 KG", "BODY WEIGHT"], ["+35%", "STRENGTH"], ["+48%", "ENDURANCE"]].map(([v, l]) => <div key={l}><strong>{v}</strong><span>{l}</span></div>)}
              </div>
              <Link href="#testimonials" className="text-link">VIEW MEMBER STORIES <Arrow /></Link>
            </div>
          </div>
        </div>
      </section>

      <section id="trainers" className="section trainers">
        <div className="container">
          <div className="section-heading reveal">
            <div><div className="eyebrow">COACHING, ELEVATED</div><Title className="section-title">TRAIN WITH <span>THE BEST.</span></Title></div>
            <p>Specialists who combine deep expertise with the rare ability to bring out your best.</p>
          </div>
          <div className="trainer-grid">
            {[
              ["Alex Morgan", "Head Strength Coach", "12 Years Experience", photos.alex],
              ["Daniel Carter", "Performance Coach", "8 Years Experience", photos.daniel],
              ["Sophia Williams", "Fitness & Nutrition Coach", "7 Years Experience", photos.sophia],
            ].map(([name, role, exp, image], index) => (
              <article className={`trainer-card trainer-${index + 1} reveal`} key={name}>
                <img src={image} alt={`${name}, ${role}`} />
                <div className="trainer-meta"><span>{exp}</span><Title as="h3">{name}</Title><p>{role}</p><div className="social-row"><Link href="#contact">IG</Link><Link href="#contact">IN</Link></div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="membership" className="section membership">
        <div className="container">
          <div className="membership-heading reveal"><div className="eyebrow">MEMBERSHIP</div><Title className="section-title">CHOOSE YOUR <span>STANDARD.</span></Title><p>No joining fees. No hidden extras. Just an environment built for progress.</p></div>
          <div className="pricing-grid">
            {plans.map((plan) => (
              <article className={`price-card reveal ${plan.featured ? "featured" : ""}`} key={plan.name}>
                {plan.featured && <div className="popular">MOST POPULAR</div>}
                <div className="plan-name">{plan.name}</div>
                <div className="price"><span>$</span><strong>{plan.price}</strong><small>/ MONTH</small></div>
                <p>{plan.note}</p>
                <div className="plan-rule" />
                <ul>{plan.features.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}</ul>
                <Link href="#contact" className={`button ${plan.featured ? "button-accent" : "button-outline"}`}>CHOOSE {plan.name} <Arrow /></Link>
              </article>
            ))}
          </div>
          <p className="pricing-note">All memberships include a complimentary onboarding session and 7-day cooling-off period.</p>
        </div>
      </section>

      <section id="gallery" className="section facilities">
        <div className="container">
          <div className="section-heading reveal"><div><div className="eyebrow">THE SPACE</div><Title className="section-title">BUILT FOR <span>PERFORMANCE.</span></Title></div><p>Two floors. 38,000 square feet. Every zone purposeful.</p></div>
          <div className="gallery-grid">
            {[
              [photos.facility1, "Weight Area", "gallery-wide"],
              [photos.facility2, "Functional Training", ""],
              [photos.facility3, "Cardio Zone", "gallery-tall"],
              [photos.facility4, "Boxing Area", ""],
              [photos.facility5, "Group Studio", "gallery-wide"],
              [photos.facility6, "Recovery & Locker Rooms", ""],
            ].map(([image, name, cls]) => (
              <figure className={`gallery-item reveal ${cls}`} key={name}><img src={image} alt={name} /><figcaption><span>{name}</span><i /></figcaption></figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section classes">
        <div className="container">
          <div className="section-heading reveal"><div><div className="eyebrow">TODAY AT IRONVAULT</div><Title className="section-title">TRAIN <span>TOGETHER.</span></Title></div><div className="day-switch"><span>MON</span><span className="active">TUE</span><span>WED</span><span>THU</span><span>FRI</span></div></div>
          <div className="schedule reveal">
            {schedule.map(([time, name, trainer, duration, difficulty], index) => (
              <div className="schedule-row" key={name}>
                <span className="schedule-index">0{index + 1}</span><strong>{time}</strong><Title as="h3">{name}</Title><span>{trainer}</span><span>{duration}</span><span className="difficulty">{difficulty}</span><Link href="#contact" aria-label={`Book ${name}`}>+</Link>
              </div>
            ))}
          </div>
          <Link href="#contact" className="text-link schedule-link">VIEW FULL SCHEDULE <Arrow /></Link>
        </div>
      </section>

      <section id="testimonials" className="section testimonials">
        <div className="container">
          <div className="eyebrow reveal">THE PEOPLE OF IRONVAULT</div>
          <Title className="section-title reveal">REAL PEOPLE. REAL WORK.<br /><span>REAL RESULTS.</span></Title>
          <div className="testimonial-grid">
            {[
              [photos.member1, "Elena M.", "Strength & confidence", "The environment completely changed how I approach training. Every session has purpose, and the coaches know exactly when to push."],
              [photos.member2, "Michael R.", "Athletic performance", "It’s the first gym that feels as serious about my goals as I am. The level of coaching is unlike anything I’ve experienced."],
              [photos.member3, "Theo J.", "Body composition", "I came for the equipment. I stayed for the people. There’s a standard here that makes you want to keep showing up."],
            ].map(([image, name, goal, quote], index) => (
              <article className={`testimonial reveal ${index === 1 ? "testimonial-featured" : ""}`} key={name}>
                <div className="testimonial-top"><img src={image} alt={`${name}, IronVault member`} /><div><strong>{name}</strong><span>{goal}</span></div></div>
                <blockquote>“{quote}”</blockquote><span className="testimonial-number">0{index + 1}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section app-section">
        <div className="container app-grid">
          <div className="app-copy reveal"><div className="eyebrow">IRONVAULT APP</div><Title className="section-title">YOUR PROGRESS.<br /><span>IN YOUR POCKET.</span></Title><p>Training plans, live performance data, class booking and your coach—connected in one seamless experience.</p><div className="app-features"><span>WORKOUT TRACKING</span><span>CLASS BOOKING</span><span>NUTRITION</span><span>COACH CHAT</span></div><Link href="#contact" className="button button-accent">GET THE APP <Arrow /></Link></div>
          <div className="phone-stage reveal">
            <div className="phone phone-back"><div className="phone-screen"><span className="phone-label">THIS WEEK</span><strong>4/5</strong><small>WORKOUTS COMPLETE</small><div className="mini-bars">{[40, 78, 56, 90, 68, 82, 46].map((n, i) => <i key={i} style={{ "--bar": `${n}%` } as CSSProperties} />)}</div></div></div>
            <div className="phone phone-front"><div className="phone-screen"><div className="phone-brand">IV</div><span className="phone-label">GOOD MORNING, ALEX</span><Title as="h3">TODAY’S SESSION</Title><div className="workout-card"><span>STRENGTH · 60 MIN</span><strong>LOWER BODY<br />POWER</strong><i>START →</i></div><div className="phone-progress"><span>WEEKLY PROGRESS</span><strong>84%</strong></div><div className="progress-track"><i /></div></div></div>
          </div>
        </div>
      </section>

      <section className="section faq">
        <div className="container faq-grid">
          <div className="faq-heading reveal"><div className="eyebrow">NEED TO KNOW</div><Title className="section-title">FREQUENTLY<br /><span>ASKED.</span></Title><p>Still have questions? Our membership team is ready to help.</p><Link href="#contact" className="text-link">TALK TO OUR TEAM <Arrow /></Link></div>
          <div className="faq-list reveal">
            {faqs.map(([question, answer], index) => (
              <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={question}>
                <Action className="faq-question" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>0{index + 1}</span><strong>{question}</strong><i>{openFaq === index ? "−" : "+"}</i></Action>
                <div className="faq-answer"><p>{answer}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <img src={photos.final} alt="Athlete training in the IronVault gym" />
        <div className="final-overlay" />
        <div className="final-content reveal"><div className="eyebrow">THE NEXT MOVE IS YOURS</div><Title className="display">STOP WAITING.<br /><span>START BUILDING.</span></Title><p>Your strongest version starts with your next decision.</p><Link href="#membership" className="button button-accent">START YOUR JOURNEY <Arrow /></Link></div>
      </section>

      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div><span className="footer-label">EXPLORE</span>{["Programs", "Trainers", "Membership", "Facilities"].map((x) => <Link href={`#${x.toLowerCase()}`} key={x}>{x}</Link>)}</div>
            <div><span className="footer-label">SUPPORT</span>{["FAQ", "Privacy Policy", "Terms", "Contact"].map((x) => <Link href="#contact" key={x}>{x}</Link>)}</div>
            <div><span className="footer-label">VISIT</span><p>Sector I-8 Markaz<br />I-8 Islamabad, Pakistan</p><p>Mon–Fri: 24 hours<br />Sat–Sun: 24 hours</p></div>
            <div><span className="footer-label">CONTACT</span><Link href="tel:+923097227807">+92 309 7227807</Link><Link href="https://wa.me/923097227807" target="_blank" rel="noopener noreferrer">WhatsApp: +92 309 7227807</Link><Link href="mailto:hello@ironvault.fit">hello@ironvault.fit</Link><div className="footer-socials">{["IG", "FB", "TK", "YT"].map((x) => <Link href="#contact" key={x}>{x}</Link>)}</div></div>
          </div>
          <div className="footer-bottom"><span>© 2026 IRONVAULT FITNESS. ALL RIGHTS RESERVED.</span><span>I-8 ISLAMABAD · PAKISTAN</span></div>
        </div>
      </footer>
    </main>
  );
}
