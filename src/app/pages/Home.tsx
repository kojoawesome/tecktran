import { Link } from 'react-router-dom';
import { Target, Layout, Users, TrendingUp, ArrowRight, CheckCircle, Users as UsersIcon, PackageCheck, Truck, UserCheck } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const heroImage = "https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzY3Mjg3NTA1fDA&ixlib=rb-4.1.0&q=80&w=1080";
  const teamImage = "https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2NzM2NDk0NHww&ixlib=rb-4.1.0&q=80&w=1080";

  const purposeHighlights = [
    { icon: Target, title: 'Clarity', description: 'Clear vision and direction' },
    { icon: Layout, title: 'Structure', description: 'Organized systems' },
    { icon: UserCheck, title: 'Accountability', description: 'Responsible execution' },
    { icon: TrendingUp, title: 'Growth', description: 'Sustainable progress' },
  ];

  const howWeWork = [
    {
      step: '01',
      title: 'Understand Your Business',
      description: 'We start by deeply understanding your unique challenges, goals, and operational context.',
    },
    {
      step: '02',
      title: 'Design Fit-for-Purpose Solutions',
      description: 'We create customized strategies and systems tailored to your specific needs.',
    },
    {
      step: '03',
      title: 'Combine Strategy with Execution',
      description: 'We do not just plan - we implement and ensure practical, real-world results.',
    },
    {
      step: '04',
      title: 'Act as Long-term Partner',
      description: 'We remain committed to your success, adapting and supporting you as you grow.',
    },
  ];

  const services = [
    {
      icon: UsersIcon,
      title: 'Human Resource Solutions',
      description: 'Build strong teams with effective recruitment, talent management, and HR systems.',
      link: '/services/hr-solutions',
    },
    {
      icon: PackageCheck,
      title: 'Payroll Management Services',
      description: 'Accurate, compliant, and stress-free payroll processing for your organization.',
      link: '/services/payroll-management',
    },
    {
      icon: Truck,
      title: 'Logistics & Operational Support',
      description: 'Streamline operations with efficient logistics and supply chain management.',
      link: '/services/logistics-support',
    },
    {
      icon: CheckCircle,
      title: 'General Supply Services',
      description: 'Reliable sourcing and procurement of quality goods for your business needs.',
      link: '/services/general-supply',
    },
  ];

  const whyChoose = [
    'Practical, business-focused solutions',
    'Strong African market understanding',
    'High professionalism and confidentiality',
    'Customized, not one-size-fits-all',
    'Long-term partnership approach',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent/5 to-primary/5 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground">
                We help businesses grow with clarity, confidence, and control.
              </h1>
              <p className="text-xl text-secondary mb-8">
                TeckTran International partners with organizations to simplify operations,
                strengthen people management, and enable sustainable growth across Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-block px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors text-center"
                >
                  Book a Consultation
                </Link>
                <Link
                  to="/services"
                  className="inline-block px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors text-center"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={heroImage}
                alt="Professional business meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary">
            Trusted by growing businesses across multiple industries
          </p>
        </div>
      </section>

      {/* Our Purpose (WHY) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-6 text-foreground">Why We Exist</h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Too many businesses struggle not because they lack vision, but because their
              systems are fragmented or misaligned. We exist to help organizations build strong
              operational foundations that support sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {purposeHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                    <Icon size={32} className="text-accent" />
                  </div>
                  <h3 className="text-xl mb-2 text-foreground">{item.title}</h3>
                  <p className="text-secondary">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-6 text-foreground">How We Work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {howWeWork.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl text-accent/20">{item.step}</span>
                  <div>
                    <h3 className="text-xl mb-3 text-foreground">{item.title}</h3>
                    <p className="text-secondary">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview (WHAT) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-6 text-foreground">What We Do</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow group"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-4">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl mb-3 text-foreground">{service.title}</h3>
                  <p className="text-secondary mb-4">{service.description}</p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors group-hover:gap-3"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose TeckTran */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-8">Why Clients Choose TeckTran</h2>
              <ul className="space-y-4">
                {whyChoose.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={24} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={teamImage}
                alt="Professional team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-foreground">
            Let's Build Better Systems for Your Business
          </h2>
          <p className="text-xl text-secondary mb-8">
            Whether you're stabilizing operations or preparing for growth, we're ready to support you.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}