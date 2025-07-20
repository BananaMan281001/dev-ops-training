import React from "react";

type Service = {
  title: string;
  icon: string;
};

type ServicesProps = {
  onSelect: (service: Service) => void;
};

const services: Service[] = [
  { title: "General Maintenance", icon: "🛠️" },
  { title: "ECU Tuning", icon: "💻" },
  { title: "Suspension Setup", icon: "🚗" },
  { title: "Custom Fabrication", icon: "🔧" },
  { title: "Track Prep", icon: "🏁" },
  { title: "Brake Upgrades", icon: "🛑" },
];

export default function Services({ onSelect }: ServicesProps) {
  return (
    <section className="py-16 bg-white px-6 max-w-6xl mx-auto">
      <h3 className="text-3xl font-semibold text-center mb-10">Our Services</h3>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => onSelect(service)}
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h4 className="text-xl font-semibold">{service.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
