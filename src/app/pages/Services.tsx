import { Link } from "react-router-dom";
import {
  Users,
  PackageCheck,
  Truck,
  CheckCircle,
  ArrowRight,
  Anchor,
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Users,
      title: "Human Resource Solutions",
      slug: "hr-solutions",
      description:
        "Build strong, high-performing teams with comprehensive HR services including recruitment, talent management, training, and policy development.",
      benefits: [
        "Strategic talent acquisition",
        "Employee performance management",
        "HR policy development",
        "Training and development programs",
      ],
    },
    {
      icon: PackageCheck,
      title: "Payroll Management Services",
      slug: "payroll-management",
      description:
        "Ensure accurate, timely, and compliant payroll processing with our comprehensive payroll management solutions.",
      benefits: [
        "Accurate salary calculation",
        "Tax and statutory compliance",
        "Payslip generation",
        "Benefits administration",
      ],
    },
    {
      icon: Truck,
      title: "Logistics & Operational Support",
      slug: "logistics-support",
      description:
        "Optimize your operations with efficient logistics management, supply chain coordination, and operational process improvement.",
      benefits: [
        "Supply chain optimization",
        "Transportation management",
        "Inventory control",
        "Process improvement",
      ],
    },
    {
      icon: CheckCircle,
      title: "General Supply Services",
      slug: "general-supply",
      description:
        "Reliable sourcing and procurement of quality goods and materials, from office supplies to specialized equipment.",
      benefits: [
        "Quality product sourcing",
        "Vendor management",
        "Cost-effective procurement",
        "Timely delivery",
      ],
    },
    {
      icon: Anchor, // Using a new icon for the new service
      title: "Offshore Crew Management",
      slug: "offshore-crew-management",
      description:
        "Reliable, compliant, and efficient offshore workforce coordination—end to end. TeckTran International provides Offshore Crew Management services that help operators and contractors mobilize the right people, on time, fully compliant, and ready for offshore operations.",
      benefits: [
        "Crew Planning & Rotation Scheduling",
        "Recruitment & Crew Pool Management",
        "Statutory & Regulatory Compliance",
        "Training, Certification & Medical Tracking",
        "Payroll & Compensation Administration",
        "Mobilization & Logistics Coordination",
        "Employee Relations & Welfare Support",
        "Reporting & Client Interface",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent/5 to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">
              Our Services
            </h1>
            <p className="text-xl text-secondary">
              Comprehensive business solutions designed to strengthen
              operations, enhance people management, and drive sustainable
              growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg">
                        <Icon size={32} className="text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl mb-3 text-foreground">
                        {service.title}
                      </h2>
                      <p className="text-secondary">{service.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg mb-3 text-foreground">
                      Key Benefits:
                    </h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-secondary"
                        >
                          <CheckCircle
                            size={20}
                            className="text-accent flex-shrink-0 mt-0.5"
                          />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors group-hover:gap-3"
                  >
                    Learn More <ArrowRight size={20} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-secondary mb-8">
            Let's discuss how our services can help your business thrive.
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
