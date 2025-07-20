import { useState } from "react";
import Navbar from './components/Navbar'
import { Modal } from "./components/Modal";

function App() {
  const [selectedService, setSelectedService] = useState<{ title: string; icon: string } | null>(null);

  const services = [
    { title: "General Maintenance", icon: "🛠️" },
    { title: "ECU Tuning", icon: "💻" },
    { title: "Suspension Setup", icon: "🚗" },
    { title: "Custom Fabrication", icon: "🔧" },
    { title: "Track Prep", icon: "🏁" },
    { title: "Brake Upgrades", icon: "🛑" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen text-gray-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-cover bg-center h-[80vh] text-white flex items-center justify-center" style={{ backgroundImage: `url("/images/86.jpg")` }}>
        <div className="bg-black bg-opacity-60 p-10 rounded-xl text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Built for Performance</h2>
          <p className="text-lg md:text-xl">Tuning | Maintenance | Fabrication</p>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-4">About Us</h3>
        <p className="text-lg">At Hachiroku Motorsports, we live and breathe cars. From spirited street builds to full track prep, we bring precision, passion, and performance to every machine.</p>
      </section>

      {/* Services */}
      <section className="py-16 bg-white px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-10">Our Services</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h4 className="text-xl font-semibold">{service.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {selectedService && (
        <Modal isOpen={true} onClose={() => setSelectedService(null)}>
          <div className="relative">
            <h2 className="text-xl font-bold mb-2">{selectedService.title}</h2>
            <p>Details about {selectedService.title} will go here.</p>
          </div>
        </Modal>
      )}

      {/* Featured Cars */}
      <section className="py-16 px-6 bg-gray-200 max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-10">Featured Builds</h3>
        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              name: "RE Amemiya RX7",
              mods: "Full body kit, single turbo conversion",
              image: "/images/rx7.jpg",
            },
            {
              name: "Honda NSX",
              mods: "Custom wide body, carbon fibre hood",
              image: "/images/nsx.jpg",
            },
          ].map((car) => (
            <div key={car.name} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <img src={car.image} alt={car.name} className="w-full h-100 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">{car.name}</h4>
                <p className="text-gray-700">{car.mods}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-12 text-center bg-black text-white">
        <p className="text-lg font-semibold mb-4">Ready to build your dream car?</p>
        <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full text-white text-lg">Book a Service</button>
      </footer>
    </div>
  )
}

export default App

