import { Target, Award, Globe, Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  const aboutImage = "https://images.unsplash.com/photo-1758599543152-a73184816eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc2NzMyNzM1MXww&ixlib=rb-4.1.0&q=80&w=1080";
  const officeImage = "https://images.unsplash.com/photo-1704423846283-f92ff6badea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjczMDU1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080";

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We deliver high-quality solutions that exceed expectations and drive real results.',
    },
    {
      icon: Heart,
      title: 'Partnership',
      description: 'We work alongside our clients as trusted partners, committed to their long-term success.',
    },
    {
      icon: Award,
      title: 'Professionalism',
      description: 'We maintain the highest standards of integrity, confidentiality, and service delivery.',
    },
    {
      icon: Globe,
      title: 'Local Expertise',
      description: 'We understand the African business landscape and tailor solutions to local realities.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent/5 to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">About TeckTran International</h1>
            <p className="text-xl text-secondary">
              Your trusted partner for business operations, HR solutions, and sustainable growth across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 text-foreground">Our Story</h2>
              <div className="space-y-4 text-secondary">
                <p>
                  TeckTran International was founded with a clear vision: to help African businesses
                  build the operational foundations they need to thrive in an increasingly competitive
                  global market.
                </p>
                <p>
                  We recognized that many organizations struggle not because they lack ambition or
                  talent, but because their internal systems, people management, and operational
                  processes aren't aligned with their growth goals.
                </p>
                <p>
                  Today, we partner with businesses across multiple industries, providing practical,
                  results-driven solutions in human resources, payroll management, logistics, and
                  procurement. Our approach combines international best practices with deep local
                  market knowledge.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={aboutImage}
                alt="Business partnership"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl mb-4 text-foreground">Our Mission</h3>
              <p className="text-secondary">
                To empower businesses with practical, fit-for-purpose solutions that simplify
                operations, strengthen people management, and enable sustainable growth.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl mb-4 text-foreground">Our Vision</h3>
              <p className="text-secondary">
                To be the most trusted partner for African businesses seeking operational excellence
                and long-term growth, recognized for our professionalism, reliability, and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-6 text-foreground">Our Core Values</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                    <Icon size={32} className="text-accent" />
                  </div>
                  <h3 className="text-xl mb-3 text-foreground">{value.title}</h3>
                  <p className="text-secondary">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={officeImage}
                alt="Corporate office"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">What Sets Us Apart</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl mb-2">Business-First Approach</h3>
                  <p className="text-primary-foreground/80">
                    We don't offer generic solutions. Every recommendation is tailored to your
                    specific industry, size, and growth stage.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl mb-2">Hands-On Implementation</h3>
                  <p className="text-primary-foreground/80">
                    We don't just consult - we roll up our sleeves and help you execute, ensuring
                    practical results.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl mb-2">African Market Expertise</h3>
                  <p className="text-primary-foreground/80">
                    We understand the unique challenges and opportunities of operating in African
                    markets, from regulatory compliance to cultural nuances.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl mb-2">Long-Term Partnership</h3>
                  <p className="text-primary-foreground/80">
                    We're not looking for one-time transactions. We build lasting relationships and
                    grow alongside our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}