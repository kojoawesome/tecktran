import { Link } from "react-router-dom";
import { CheckCircle, Globe } from "lucide-react";

export default function ImmigrationSupport() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent/5 to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">
              Immigration Support Services
            </h1>
            <p className="text-xl text-secondary">
              Reliable and end-to-end immigration support solutions for
              expatriates, multinational companies, offshore contractors, and
              international workforce operations in Ghana.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-6 text-foreground text-center">
            What We Do
          </h2>
          <p className="text-lg text-secondary text-center max-w-3xl mx-auto">
            Our experienced team works closely with regulatory authorities and
            stakeholders to ensure smooth, compliant, and timely processing of
            immigration requirements—allowing our clients to focus on their core
            business operations while we manage the complexities of workforce
            mobility and immigration administration.
          </p>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-10 text-foreground text-center">
            Our Services Include
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Work Permit Processing",
                description: [
                  "Application preparation and submission",
                  "Liaison with Ghana Immigration Service",
                  "Renewals and extensions",
                  "Compliance tracking and reminders",
                ],
              },
              {
                title: "Residence Permit Applications & Renewals",
                description: [
                  "New residence permit applications",
                  "Timely renewals to avoid lapses",
                  "Documentation preparation and review",
                  "Status follow-up and reporting",
                ],
              },
              {
                title: "Visa on Arrival (VOA) Support",
                description: [
                  "Pre-arrival facilitation and coordination",
                  "Documentation requirements advisory",
                  "Airport liaison support",
                  "Tracking and confirmation",
                ],
              },
              {
                title: "Business & Re-Entry Visa Processing",
                description: [
                  "Business visa applications",
                  "Re-entry visa facilitation",
                  "Visa extensions and regularization",
                  "Embassy and authority liaison",
                ],
              },
              {
                title: "Non-Citizen Ghana Card Processing",
                description: [
                  "Application preparation and submission",
                  "Biometric appointment coordination",
                  "Status tracking and collection support",
                  "Renewal management",
                ],
              },
              {
                title: "Expatriate Quota Support",
                description: [
                  "Quota application and renewal",
                  "Regulatory compliance advisory",
                  "Documentation management",
                  "Liaison with Ghana Investment Promotion Centre (GIPC)",
                ],
              },
              {
                title: "Immigration Compliance Advisory",
                description: [
                  "Policy updates and regulatory briefings",
                  "Compliance audits of expatriate documentation",
                  "Risk assessment and mitigation",
                  "Training for HR and admin teams",
                ],
              },
              {
                title: "Airport Meet & Assist / Protocol Services",
                description: [
                  "VIP and expatriate airport reception",
                  "Immigration facilitation at point of entry",
                  "Baggage and customs assistance",
                  "Ground transport coordination",
                ],
              },
              {
                title: "Dependent & Family Immigration Support",
                description: [
                  "Dependent pass applications",
                  "Family member visa facilitation",
                  "School and residential enrollment advisory",
                  "Relocation orientation support",
                ],
              },
              {
                title: "Expatriate Mobilization & Relocation Support",
                description: [
                  "End-to-end mobilization coordination",
                  "Accommodation and settling-in support",
                  "In-country orientation and onboarding",
                  "Demobilization and exit processing",
                ],
              },
              {
                title: "Police Clearance & Medical Coordination",
                description: [
                  "Police clearance certificate assistance",
                  "Medical report coordination with approved providers",
                  "Document authentication and notarization support",
                  "Submission tracking and follow-up",
                ],
              },
              {
                title: "Corporate Immigration Documentation Management",
                description: [
                  "Centralized document management system",
                  "Expiry alerts and renewal calendars",
                  "Audit-ready document filing",
                  "Custom reporting for HR and management",
                ],
              },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-secondary">
                      <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose TeckTran */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-10 text-center">
            Why Choose TeckTran International?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Strong understanding of Ghana's immigration and labour regulations",
              "Dedicated support for offshore, oil & gas, and multinational workforce operations",
              "Fast, professional, and compliant processing approach",
              "Personalized client support and proactive communication",
              "Seamless coordination with HR, payroll, mobilization, and workforce management services",
            ].map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Support */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-10 text-foreground text-center">
            Industries We Support
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Oil & Gas",
              "Offshore & Marine Operations",
              "Engineering & Construction",
              "Mining & Energy",
              "Logistics & Supply Chain",
              "Manufacturing",
              "Telecommunications",
              "Corporate & Professional Services",
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-white border border-border rounded-lg px-4 py-3 text-center text-secondary font-medium shadow-sm"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-foreground">
            Supporting Your Global Workforce Mobility
          </h2>
          <p className="text-xl text-secondary mb-8">
            Whether you are mobilizing expatriates, setting up a new business
            presence in Ghana, or managing rotational workforce requirements,
            TeckTran International delivers dependable immigration support
            tailored to your operational needs.
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
