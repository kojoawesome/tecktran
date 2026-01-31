import { Link } from 'react-router-dom';
import { Users, Target, Award, TrendingUp, CheckCircle } from 'lucide-react';

export function HRSolutions() {
  const benefits = [
    {
      icon: Target,
      title: 'Strategic Recruitment',
      description: 'Find and attract the right talent aligned with your business goals and culture.',
    },
    {
      icon: Award,
      title: 'Performance Management',
      description: 'Implement effective systems to monitor, evaluate, and improve employee performance.',
    },
    {
      icon: TrendingUp,
      title: 'Talent Development',
      description: 'Build capabilities through targeted training and career development programs.',
    },
  ];

  const whatYouGet = [
    'Comprehensive job analysis and role definition',
    'Candidate sourcing, screening, and selection support',
    'Employee onboarding and orientation programs',
    'Performance appraisal system design and implementation',
    'Training needs assessment and program delivery',
    'HR policy and procedure documentation',
    'Employee engagement and retention strategies',
    'Compliance with labor laws and regulations',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent/5 to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
              <Users size={32} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">
              Human Resource Solutions
            </h1>
            <p className="text-xl text-secondary">
              Build Strong Teams Without the HR Headaches
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-secondary mb-8">
            Your people are your most valuable asset. Yet managing human resources effectively -
            from recruitment to retention - can be one of the most challenging aspects of running
            a business. Our HR solutions help you build capable, engaged teams that drive your
            business forward.
          </p>
          <p className="text-lg text-secondary">
            Whether you need support with hiring, performance management, training, or compliance,
            we provide practical, customized HR services that fit your organization's size and stage.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-12 text-center text-foreground">How We Help</h2>
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
            Ready to Build a Stronger Team?
          </h2>
          <p className="text-xl text-secondary mb-8">
            Let's discuss how our HR solutions can help you attract, develop, and retain top talent.
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