import { Link } from 'react-router-dom';
import { PackageCheck, DollarSign, FileCheck, Shield, CheckCircle } from 'lucide-react';

export function PayrollManagement() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Accurate Calculations',
      description: 'Precise salary computations including deductions, bonuses, and overtime.',
    },
    {
      icon: FileCheck,
      title: 'Tax Compliance',
      description: 'Full compliance with tax regulations and statutory deductions.',
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Secure handling of sensitive employee financial information.',
    },
  ];

  const whatYouGet = [
    'Monthly payroll processing and salary calculations',
    'Tax computation and PAYE remittance',
    'Pension and social security contributions',
    'Payslip generation and distribution',
    'Annual tax returns and regulatory filings',
    'Benefits and allowances administration',
    'Leave and attendance integration',
    'Detailed payroll reports and analytics',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
              <PackageCheck size={32} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">
              Payroll Management Services
            </h1>
            <p className="text-xl text-secondary">
              Payroll Without Stress
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-secondary mb-8">
            Payroll errors can damage employee trust, lead to compliance issues, and consume valuable
            time. Our payroll management services ensure your employees are paid accurately, on time,
            every time - while you stay compliant with all tax and labor regulations.
          </p>
          <p className="text-lg text-secondary">
            Whether you're a small business or a growing organization, we handle the complexity of
            payroll processing so you can focus on running your business.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-12 text-center text-foreground">Why Choose Our Payroll Services</h2>
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
            Ready for Stress-Free Payroll?
          </h2>
          <p className="text-xl text-secondary mb-8">
            Let us handle your payroll processing while you focus on growing your business.
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
