import { Link } from 'react-router-dom';
import { Truck, Package, BarChart3, Settings, CheckCircle } from 'lucide-react';

export function LogisticsSupport() {
  const benefits = [
    {
      icon: Package,
      title: 'Supply Chain Optimization',
      description: 'Streamline your supply chain from sourcing to delivery for maximum efficiency.',
    },
    {
      icon: BarChart3,
      title: 'Cost Management',
      description: 'Reduce logistics costs while maintaining quality and reliability.',
    },
    {
      icon: Settings,
      title: 'Process Improvement',
      description: 'Identify and eliminate inefficiencies in your operational workflows.',
    },
  ];

  const whatYouGet = [
    'Supply chain analysis and optimization',
    'Transportation and fleet management',
    'Warehouse and inventory control systems',
    'Vendor and supplier coordination',
    'Order processing and fulfillment support',
    'Route planning and optimization',
    'Quality control and assurance',
    'Performance tracking and reporting',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
              <Truck size={32} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">
              Logistics & Operational Support
            </h1>
            <p className="text-xl text-secondary">
              Streamline Operations, Maximize Efficiency
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-secondary mb-8">
            Inefficient logistics and operational processes can drain resources, delay deliveries,
            and frustrate customers. Our logistics and operational support services help you build
            efficient, reliable systems that keep your business running smoothly.
          </p>
          <p className="text-lg text-secondary">
            From supply chain management to inventory control, we provide end-to-end support to
            optimize your operations and reduce costs.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-12 text-center text-foreground">How We Support You</h2>
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
          <h2 className="text-3xl md:text-4xl mb-12 text-foreground">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatYouGet.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle size={24} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-secondary">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-foreground">
            Ready to Optimize Your Operations?
          </h2>
          <p className="text-xl text-secondary mb-8">
            Let's work together to streamline your logistics and boost efficiency.
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
