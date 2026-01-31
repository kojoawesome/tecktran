import { Link } from "react-router-dom";
import { Users, PackageCheck, Truck, CheckCircle, Anchor } from "lucide-react";

export default function OffshoreCrewManagement() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent/5 to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">
              Offshore Crew Management
            </h1>
            <p className="text-xl text-secondary">
              Reliable, compliant, and efficient offshore workforce
              coordination—end to end.
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
          <p className="text-lg text-secondary text-center">
            We manage the full crew lifecycle—from planning and mobilization to
            payroll, compliance tracking, and reporting—so your operations run
            smoothly and your teams stay audit-ready.
          </p>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-6 text-foreground text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Crew Planning & Rotation Scheduling",
                description: [
                  "Rotation planning aligned to operational rosters",
                  "Relief planning and backfill coordination",
                  "Crew matrix management for critical roles",
                  "Mobilization and demobilization scheduling",
                ],
              },
              {
                title: "Recruitment & Crew Pool Management",
                description: [
                  "Sourcing and vetting offshore-ready personnel",
                  "Competency screening and certification verification",
                  "Managed talent pools (local and expatriate)",
                  "Succession planning and standby coverage",
                ],
              },
              {
                title: "Statutory & Regulatory Compliance",
                description: [
                  "PAYE, SSNIT, and statutory deductions administration",
                  "Contract documentation and HR compliance support",
                  "Local content support (where applicable)",
                  "Audit readiness for workforce documentation",
                ],
              },
              {
                title: "Training, Certification & Medical Tracking",
                description: [
                  "Certification tracking (e.g., BOSIET/HUET/MIST or client-required equivalents)",
                  "Medical fitness tracking and expiry alerts",
                  "Training matrix setup and maintenance",
                  "Coordination with approved training/medical providers",
                ],
              },
              {
                title: "Payroll & Compensation Administration",
                description: [
                  "Offshore payroll processing for rotation/shift patterns",
                  "Allowance, offshore premium, and overtime calculations",
                  "Payslips and employee self-service support",
                  "Payroll reporting and reconciliations",
                ],
              },
              {
                title: "Mobilization & Logistics Coordination",
                description: [
                  "Travel coordination (in-country and international)",
                  "Immigration support (where required)",
                  "Pre-mobilization document checks",
                  "Vendor coordination for travel and accommodation",
                ],
              },
              {
                title: "Employee Relations & Welfare Support",
                description: [
                  "Onboarding coordination and inductions",
                  "Contract renewals and documentation updates",
                  "First-line HR support for crew",
                  "Welfare coordination during rotations",
                ],
              },
              {
                title: "Reporting & Client Interface",
                description: [
                  "Crew status, compliance, and expiry reports",
                  "Headcount, rotation, and cost reporting",
                  "Audit packs and documentation dashboards",
                  "Dedicated account management",
                ],
              },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {service.title}
                </h3>
                <ul className="list-disc list-inside text-secondary">
                  {service.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-6 text-foreground text-center">
            Who This Is For
          </h2>
          <ul className="list-disc list-inside text-secondary text-center">
            <li>FPSO operations and offshore production assets</li>
            <li>Drilling and marine support contractors</li>
            <li>Offshore construction and maintenance teams</li>
            <li>Energy and industrial offshore projects</li>
          </ul>
        </div>
      </section>

      {/* Why TeckTran */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-6 text-center">
            Why TeckTran
          </h2>
          <ul className="list-disc list-inside text-center">
            <li>Reduced downtime: fewer last-minute staffing gaps</li>
            <li>Stronger compliance: statutory and documentation control</li>
            <li>Predictable costs: clear payroll and crew cost reporting</li>
            <li>Audit-ready: structured documentation and reporting</li>
            <li>Scalable support: project-based or long-term coverage</li>
          </ul>
        </div>
      </section>

      {/* Service Delivery Options */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-6 text-foreground text-center">
            Service Delivery Options
          </h2>
          <ul className="list-disc list-inside text-secondary text-center">
            <li>Fully Outsourced Crew Management</li>
            <li>Hybrid Model (we manage selected functions)</li>
            <li>Project-Based Mobilization Support</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-foreground">
            Ready to Improve Offshore Crew Control?
          </h2>
          <p className="text-xl text-secondary mb-8">
            Contact us to discuss your rotation model, compliance needs, and
            staffing requirements.
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
