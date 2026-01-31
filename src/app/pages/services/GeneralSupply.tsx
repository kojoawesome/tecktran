import { Link } from 'react-router-dom';
import { CheckCircle, ShoppingCart, Award, Clock } from 'lucide-react';

export function GeneralSupply() {
  const benefits = [
    {
      icon: ShoppingCart,
      title: 'Quality Sourcing',
      description: 'Access to verified suppliers and quality products at competitive prices.',
    },
    {
      icon: Award,
      title: 'Vendor Management',
      description: 'Professional supplier relationships ensuring reliability and value.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Dependable supply chains that deliver when you need it.',
    },
  ];

  const whatYouGet = [
    'Office equipment and supplies',
    'IT hardware and software',
    'Furniture and fixtures',
    'Industrial equipment and machinery',
    'Safety and security equipment',
    'Cleaning and maintenance supplies',
    'Promotional and marketing materials',
    'Specialized industry-specific products',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
              <CheckCircle size={32} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">
              General Supply Services
            </h1>
            <p className="text-xl text-secondary">
              Reliable Sourcing, Quality Products
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-secondary mb-8">
            Finding reliable suppliers, negotiating fair prices, and ensuring quality can consume
            significant time and resources. Our general supply services connect you with verified
            vendors and quality products, streamlining your procurement process.
          </p>
          <p className="text-lg text-secondary">
            From office supplies to specialized equipment, we leverage our supplier network to
            deliver the products you need, when you need them, at competitive prices.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-12 text-center text-foreground">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-lg mb-4">
                    <Icon size={28} className="text-accent" />
                  </div>
                  <h3 className="text-xl mb-3 text-foreground">{benefit.title}</h3>
                  <p className="text-secondary">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-12 text-foreground">What We Supply</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatYouGet.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle size={24} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-secondary">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-muted/50 rounded-xl">
            <p className="text-secondary">
              <strong className="text-foreground">Need something specific?</strong> We can source
              specialized products and materials for your industry. Just let us know your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-foreground">
            Ready to Simplify Your Procurement?
          </h2>
          <p className="text-xl text-secondary mb-8">
            Let's discuss your supply needs and how we can support your business.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
          >
            Talk to a Consultant
          </Link>
        </div>
      </section>
    </div>
  );
}
