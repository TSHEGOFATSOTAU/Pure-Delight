import { useState, useEffect } from "react";
import {
  Mail,
  MapPin,
  Sparkles,
  Coffee,
  Droplets,
  MessageCircle,
  Calendar,
  Check,
  ChevronDown,
  Phone,
  Menu,
  X,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import imgBeforeAfter from "@/imports/211528ba-f184-4582-a800-fc3446270848.jpeg";
import imgHowItWorks from "@/imports/67fd91ce-1c64-4e3f-9452-6e699a6c7e4f.jpeg";
import imgGuide from "@/imports/993a532a-9f9b-4f61-a8d7-6f30406f7c43.jpeg";
import imgBanner from "@/imports/WhatsApp_Image_2026-05-08_at_11.13.10.jpeg";
import imgRafaa from "@/imports/WhatsApp_Image_2026-05-18_at_12.32.32.jpeg";
import imgBlackCumin from "@/imports/a2765ba1-b8d1-4905-abd5-0399656df24e.jpeg";
import imgLogo from "@/imports/WhatsApp_Image_2026-05-25_at_08.31.57-1.jpeg";

const WHATSAPP_NUMBER = "27733852307";

const treatments = [
  {
    id: "colon",
    Icon: Droplets,
    title: "Colon Hydrotherapy",
    subtitle: "Intestinal Cleanse and Renewal",
    description:
      "A gentle, non-invasive procedure that uses filtered, temperature-controlled water to flush waste and toxin build-up from the colon. Supports complete digestive restoration and a profound sense of lightness and renewed energy.",
    image:
      "https://images.unsplash.com/photo-1536147116438-62679a5e01f2?w=700&h=900&fit=crop&auto=format",
    benefits: [
      "Reduces risk of colon cancer",
      "Relieves chronic constipation",
      "Increases energy levels",
      "Removes accumulated toxins",
      "Improves liver function",
      "Boosts the immune system",
      "Relieves bloating and gas",
      "Improves mood and mental clarity",
    ],
  },
  {
    id: "coffee",
    Icon: Coffee,
    title: "Coffee Colonic",
    subtitle: "Liver Detox and Blood Cleanse",
    description:
      "Utilises organic coffee to stimulate the liver's detoxification pathways and the gallbladder, removing parasites, heavy metals, and deeply cleansing the blood for renewed vitality and immune resilience.",
    image:
      "https://images.unsplash.com/photo-1630960517139-dfe0e8fd537d?w=700&h=900&fit=crop&auto=format",
    benefits: [
      "Boosts immunity",
      "Increases energy",
      "Stops yeast overgrowth",
      "Treats autoimmune conditions",
      "Removes parasites from the digestive tract",
      "Removes heavy metals from the body",
      "Supports management of depression",
      "Helps eliminate toxins from the liver",
      "Cleanses the blood",
    ],
  },
  {
    id: "rafaa",
    Icon: Sparkles,
    title: "Rafaa Probiotic",
    subtitle: "pH Restoration and Vitality",
    description:
      "A powerful natural probiotic that restores your body's acid-alkaline balance, supercharges immunity, combats inflammation, and provides deep anti-aging cellular nourishment from within.",
    image:
      "https://images.unsplash.com/photo-1662695088819-bfefbc41ec6d?w=700&h=900&fit=crop&auto=format",
    benefits: [
      "Immune system booster",
      "Natural energy drink",
      "Reduces acidity in the body",
      "Anti-inflammatory properties",
      "Powerful anti-aging benefits",
      "Gently heals wounds and acne",
      "Helps reduce food cravings",
      "Strong anti-oxidant",
      "Restores and regulates pH balance",
    ],
  },
];

const packages = [
  {
    name: "Single Session",
    price: "R700",
    tag: "per session",
    sessions: 1,
    popular: false,
    note: "Ideal for a first-time experience or occasional cleanse.",
    savings: null,
  },
  {
    name: "Starter Journey",
    price: "R1,800",
    tag: "3 sessions",
    sessions: 3,
    popular: true,
    note: "Our most popular — a complete initial detox protocol.",
    savings: "Save R300",
  },
  {
    name: "Full Transformation",
    price: "R3,000",
    tag: "5 sessions",
    sessions: 5,
    popular: false,
    note: "The complete wellness experience for lasting results.",
    savings: "Save R500",
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const activeTreatment = treatments[activeTab];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-primary shadow-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2.5 group"
          >
            <ImageWithFallback
              src={imgLogo}
              alt="Pure Delight Hydrotherapy Logo"
              className="h-10 w-auto object-contain"
            />
          </button>

          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "About", id: "about" },
              { label: "Treatments", id: "treatments" },
              { label: "Products", id: "products" },
              { label: "Pricing", id: "pricing" },
              { label: "Contact", id: "contact" },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm text-white/80 hover:text-white transition-colors tracking-wide"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white text-sm px-4 py-2 rounded-full font-medium hover:bg-[#1db954] transition-colors"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
            <button
              onClick={() => scrollTo("pricing")}
              className="flex items-center gap-2 bg-accent text-white text-sm px-4 py-2 rounded-full font-medium hover:bg-accent/90 transition-colors"
            >
              <Calendar size={14} />
              Book Now
            </button>
          </div>

          <button
            className="md:hidden text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-primary border-t border-white/10 px-6 py-5 flex flex-col gap-4">
            {[
              { label: "About", id: "about" },
              { label: "Treatments", id: "treatments" },
              { label: "Products", id: "products" },
              { label: "Pricing", id: "pricing" },
              { label: "Contact", id: "contact" },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-left text-sm text-white py-1 border-b border-white/10 pb-3"
              >
                {label}
              </button>
            ))}
            <div className="flex gap-3 pt-1">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white text-sm px-4 py-2.5 rounded-full font-medium"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
              <button
                onClick={() => scrollTo("pricing")}
                className="flex items-center gap-2 bg-accent text-white text-sm px-4 py-2.5 rounded-full font-medium"
              >
                <Calendar size={14} />
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <ImageWithFallback
          src={imgBanner}
          alt="Pure Delight Colon Hydrotherapy"
          className="w-full h-full object-cover"
        />

        <button
          onClick={() => scrollTo("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/60 hover:text-primary transition-colors"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">
            Discover
          </span>
          <ChevronDown size={16} className="animate-bounce" />
        </button>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-accent font-semibold">
                What We Do
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold mt-3 mb-6 leading-[1.1] text-primary"
                style={{ fontFamily: "var(--font-display)" }}
              >
                A cleanse from the inside out
              </h2>
              <p className="text-muted-foreground text-[17px] leading-relaxed mb-5">
                Pure Delight is a gentle colon hydrotherapy practice using filtered,
                 temperature-controlled water to flush waste & build-up, supporting digestive health, 
                 easing bloating and constipation, and restoring a feeling of lightness and natural energy.
    
              </p>
              <p className="text-muted-foreground text-[17px] leading-relaxed mb-8">
                Colon hydrotherapy, also known as a colon cleanse or colonic irrigation, 
                is a soothing procedure that uses filtered, temperature-controlled water to flush away waste and build-up. 
                It supports digestive health, relieves bloating and constipation, and leaves you feeling light, clear and energised.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  "Filtered Water",
                  "Temperature Controlled",
                  "Non Invasive",
                  "Certified Therapists",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs tracking-wide uppercase font-medium bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-secondary">
                <ImageWithFallback
                  src={imgBanner}
                  alt="Pure Delight Hydrotherapy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-card border border-border rounded-2xl p-5 shadow-xl">
                <div
                  className="text-4xl font-bold text-card-foreground leading-none mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  100%
                </div>
                <div className="text-sm text-card-foreground/70">
                  Natural and Non-invasive
                </div>
              </div>
              <div className="absolute -top-5 -right-5 bg-primary text-primary-foreground rounded-2xl p-5 shadow-xl">
                <div
                  className="text-3xl font-bold leading-none mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  3
                </div>
                <div className="text-xs text-primary-foreground/70">
                  Treatment Types
                </div>
              </div>
            </div>
          </div>

          {/* Visual gallery */}
          <div className="mt-20 pt-16 border-t border-border">
            <p className="text-xs tracking-[0.3em] uppercase text-accent font-semibold text-center mb-10">
              See the Difference
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group rounded-2xl overflow-hidden bg-card border border-border flex flex-col">
                <div className="overflow-hidden bg-muted">
                  <ImageWithFallback
                    src={imgBeforeAfter}
                    alt="Side-by-side comparison showing a congested colon before treatment and a clean, clear colon after colon hydrotherapy"
                    className="w-full h-52 object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h4
                    className="font-semibold text-base mb-1 text-card-foreground"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Before and After
                  </h4>
                  <p className="text-sm text-card-foreground/70 leading-relaxed">
                    The visible transformation after a session, waste removed,
                    the colon restored to its natural state.
                  </p>
                </div>
              </div>

              <div className="group rounded-2xl overflow-hidden bg-card border border-border flex flex-col">
                <div className="overflow-hidden bg-muted">
                  <ImageWithFallback
                    src={imgHowItWorks}
                    alt="Diagram illustrating the 3 steps of colon hydrotherapy: Hydrate, Soften, Evacuate"
                    className="w-full h-52 object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h4
                    className="font-semibold text-base mb-1 text-card-foreground"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    How It Works
                  </h4>
                  <p className="text-sm text-card-foreground/70 leading-relaxed">
                    Three simple steps, Hydrate, Soften, Evacuate, gently
                    flushing waste with filtered, temperature-controlled water.
                  </p>
                </div>
              </div>

              <div className="group rounded-2xl overflow-hidden bg-card border border-border flex flex-col">
                <div className="overflow-hidden bg-muted">
                  <ImageWithFallback
                    src={imgGuide}
                    alt="Cover of The Complete Guide to Colonic Irrigation, Colon Hydrotherapy and Colon Cleanses"
                    className="w-full h-52 object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h4
                    className="font-semibold text-base mb-1 text-card-foreground"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Evidence Based Practice
                  </h4>
                  <p className="text-sm text-card-foreground/70 leading-relaxed">
                    Our approach is grounded in well-documented research
                    covering facts, diet, health benefits, and colon care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section id="treatments" className="py-24 md:py-32 bg-secondary/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs tracking-[0.3em] uppercase text-accent font-semibold">
              Our Treatments
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mt-3 text-primary"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Three Paths to Renewal
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 md:gap-3 mb-12 justify-center flex-wrap">
            {treatments.map((t, i) => {
              const { Icon } = t;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeTab === i
                      ? "bg-primary text-primary-foreground shadow-md scale-[1.03]"
                      : "bg-card text-card-foreground border border-border hover:border-primary/40"
                  }`}
                >
                  <Icon size={15} />
                  {t.title}
                </button>
              );
            })}
          </div>

          {/* Active treatment content */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted order-2 md:order-1">
              <img
                src={activeTreatment.image}
                alt={activeTreatment.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>

            <div className="order-1 md:order-2">
              <span className="text-xs tracking-[0.3em] uppercase text-accent font-semibold">
                {activeTreatment.subtitle}
              </span>
              <h3
                className="text-3xl md:text-4xl font-bold mt-2 mb-4 leading-tight text-primary"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {activeTreatment.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 text-[16px]">
                {activeTreatment.description}
              </p>

              <h4 className="text-xs tracking-[0.25em] uppercase font-semibold text-foreground mb-4">
                Benefits
              </h4>
              <ul className="grid grid-cols-1 gap-2.5 mb-8">
                {activeTreatment.benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-[15px] text-muted-foreground"
                  >
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check size={10} className="text-primary" />
                    </div>
                    {b}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in the ${activeTreatment.title} at Pure Delight Hydrotherapy`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#1db954] transition-colors"
              >
                <MessageCircle size={15} />
                Enquire via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs tracking-[0.3em] uppercase text-accent font-semibold">
              Our Products
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mt-3 text-primary"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Premium Wellness Products
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-[15px] leading-relaxed">
              Enhance your wellness journey with our carefully selected natural products,
              designed to support your digestive health and overall vitality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Rafaa Probiotic */}
            <div className="group rounded-2xl overflow-hidden bg-card border border-border flex flex-col transition-all hover:shadow-xl">
              <div className="overflow-hidden bg-muted aspect-[4/3]">
                <ImageWithFallback
                  src={imgRafaa}
                  alt="Rafaa Probiotic bottles in three sizes"
                  className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-2">
                  Probiotic Solution
                </span>
                <h3
                  className="text-2xl font-bold mb-3 text-card-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Rafaa Probiotic
                </h3>
                <p className="text-card-foreground/70 leading-relaxed mb-6 text-[15px]">
                  A powerful natural probiotic that restores pH balance, boosts immunity,
                  and provides anti-inflammatory benefits. Available in multiple sizes for
                  your convenience.
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {[
                    "Restores pH balance",
                    "Immune system booster",
                    "Anti-inflammatory properties",
                    "Natural energy enhancement",
                  ].map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2.5 text-sm text-card-foreground/70"
                    >
                      <Check size={14} className="text-accent flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in the Rafaa Probiotic at Pure Delight Hydrotherapy`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-accent transition-colors"
                >
                  <MessageCircle size={15} />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>

            {/* Black Cumin Oil */}
            <div className="group rounded-2xl overflow-hidden bg-card border border-border flex flex-col transition-all hover:shadow-xl">
              <div className="overflow-hidden bg-muted aspect-[4/3]">
                <ImageWithFallback
                  src={imgBlackCumin}
                  alt="Crede Black Cumin Oil"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-2">
                  Natural Supplement
                </span>
                <h3
                  className="text-2xl font-bold mb-3 text-card-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Black Cumin Oil
                </h3>
                <p className="text-card-foreground/70 leading-relaxed mb-6 text-[15px]">
                  Premium Crede Natural Oils Black Cumin Oil (Nigella Sativa). Known for
                  its powerful antioxidant properties and support for overall wellness and
                  immune health.
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {[
                    "Powerful antioxidant",
                    "Supports immune function",
                    "Natural anti-inflammatory",
                    "Digestive wellness support",
                  ].map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2.5 text-sm text-card-foreground/70"
                    >
                      <Check size={14} className="text-accent flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in the Black Cumin Oil at Pure Delight Hydrotherapy`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-accent transition-colors"
                >
                  <MessageCircle size={15} />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs tracking-[0.3em] uppercase text-accent font-semibold">
              Pricing
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mt-3 text-primary"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Choose Your Journey
            </h2>
            <p className="text-muted-foreground mt-4 max-w-sm mx-auto text-[15px] leading-relaxed">
              All sessions are conducted by trained therapists in a safe,
              comfortable, and private environment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-center">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl p-8 flex flex-col transition-transform ${
                  pkg.popular
                    ? "bg-primary text-primary-foreground shadow-2xl md:scale-[1.04] z-10"
                    : "bg-card text-card-foreground border border-border"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white text-[11px] px-4 py-1 rounded-full font-semibold tracking-wide whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                {pkg.savings && (
                  <div
                    className={`text-xs font-semibold mb-2 ${
                      pkg.popular ? "text-green-300" : "text-accent"
                    }`}
                  >
                    {pkg.savings}
                  </div>
                )}
                <div className="text-xs tracking-[0.2em] uppercase font-semibold mb-3 opacity-70">
                  {pkg.name}
                </div>
                <div
                  className="text-5xl font-bold mb-1 leading-none"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {pkg.price}
                </div>
                <div className={`text-sm mb-6 ${pkg.popular ? "opacity-65" : "text-muted-foreground"}`}>
                  {pkg.tag}
                </div>
                <p className={`text-sm leading-relaxed mb-8 flex-1 ${pkg.popular ? "opacity-75" : "text-muted-foreground"}`}>
                  {pkg.note}
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'd like to book the ${pkg.name} (${pkg.tag}) for ${pkg.price} at Pure Delight Hydrotherapy`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-medium transition-all hover:scale-[1.02] ${
                    pkg.popular
                      ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                      : "bg-primary text-primary-foreground hover:bg-accent"
                  }`}
                >
                  <MessageCircle size={14} />
                  Book on WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-primary-foreground/50 font-semibold">
                Get in Touch
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold mt-3 mb-7 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                We are here to help you thrive
              </h2>
              <p className="text-primary-foreground/70 leading-relaxed mb-10 text-[16px]">
                Ready to begin your wellness journey? Reach out via WhatsApp or
                email, we will guide you through your first session and answer any
                questions you may have.
              </p>

              <div className="flex flex-col gap-6">
                <a
                  href="mailto:puredelight755@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-foreground/20 transition-colors">
                    <Mail size={17} />
                  </div>
                  <div>
                    <div className="text-[10px] text-primary-foreground/45 uppercase tracking-widest mb-0.5">
                      Email
                    </div>
                    <div className="font-medium text-[15px]">
                      puredelight755@gmail.com
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={17} />
                  </div>
                  <div>
                    <div className="text-[10px] text-primary-foreground/45 uppercase tracking-widest mb-0.5">
                      Physical Address
                    </div>
                    <div className="font-medium text-[15px] leading-relaxed">
                      624 Jacqueline Drive
                      <br />
                      Pretoria East, 0181
                    </div>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-full bg-[#25D366]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/30 transition-colors">
                    <Phone size={17} className="text-[#4ade80]" />
                  </div>
                  <div>
                    <div className="text-[10px] text-primary-foreground/45 uppercase tracking-widest mb-0.5">
                      WhatsApp
                    </div>
                    <div className="font-medium text-[15px]">
                      Message us directly
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Booking panel */}
            <div className="bg-primary-foreground/8 border border-primary-foreground/15 rounded-2xl p-8 flex flex-col">
              <h3
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Book Your Session
              </h3>
              <p className="text-primary-foreground/70 mb-7 text-sm leading-relaxed">
                Sessions are by appointment only. Send us a WhatsApp message to
                check availability and secure your booking.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Private and comfortable treatment rooms",
                  "Trained, certified therapists",
                  "Filtered temperature-controlled water system",
                  "Post-session probiotic support available",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-primary-foreground/75"
                  >
                    <Check size={13} className="text-[#4ade80] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'd like to book a session at Pure Delight Hydrotherapy`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 bg-[#25D366] text-white py-3.5 rounded-full font-medium text-[15px] hover:bg-[#1db954] transition-colors text-center"
                >
                  <MessageCircle size={17} />
                  Book via WhatsApp
                </a>
                <a
                  href="mailto:puredelight755@gmail.com?subject=Booking Enquiry Pure Delight Hydrotherapy"
                  className="flex items-center justify-center gap-2.5 bg-primary-foreground/12 text-primary-foreground py-3.5 rounded-full font-medium text-[15px] hover:bg-primary-foreground/20 transition-colors text-center"
                >
                  <Mail size={17} />
                  Send an Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background border-t border-border py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <ImageWithFallback
              src={imgLogo}
              alt="Pure Delight Hydrotherapy Logo"
              className="h-8 w-auto object-contain"
            />
          </div>
          <p className="text-xs text-muted-foreground text-center">
            624 Jacqueline Drive, Pretoria East, 0181 ·{" "}
            <a
              href="mailto:puredelight755@gmail.com"
              className="hover:text-foreground transition-colors"
            >
              puredelight755@gmail.com
            </a>
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Pure Delight Hydrotherapy
          </p>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:bg-[#1db954] transition-all hover:scale-110 z-50"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} className="text-white" />
      </a>
    </div>
  );
}
