import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define the type for a single service
type Service = {
  title: string;
  icon: string;
  description: string;
};

// Update ModalProps to include the selectedService
type ModalProps = {
  onClose: () => void;
  service: Service; 
};

const services: Service[] = [ // Explicitly type the services array
  { title: "General Maintenance", icon: "🛠️", description: "We provide general maintenance to all vehicles. This includes both major and minor services." },
  { title: "ECU Tuning", icon: "💻", description: "We provide ECUTEK services which include flatfoot shifting, auto rev match, and launch control. We can also do dyno" },
  { title: "Suspension Setup", icon: "🚗", description: "As previous V8 mechanics, we know the ins and outs of vehicle mechanic. We can help you fine tune your suspension to your liking whether you use it for the street or the track" },
  { title: "Custom Fabrication", icon: "🔧", description: "We can custom fabricate anything for you whether its exhaust parts or general body work." },
  { title: "Track Prep", icon: "🏁", description: "For those who are pushing to gain every millisecond, we also offer track focused modifications such as brake cooling and roll bars." },
  { title: "Brake Upgrades", icon: "🛑", description: "For those who need more stopping power. We are proud to be sponsored by ENDLESS and offer installation of their great brakes" },
];

function Modal({ onClose, service }: ModalProps) { // Receive the 'service' prop
  return (
    <motion.div
      className="fixed inset-0 bg-[#000000e1] bg-opacity-50 z-40"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 25, mass: 1.5 }}
      >
        <div
          className="relative bg-white rounded-lg shadow-xl p-6 w-full max-w-md"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <span className="mr-2">{service.icon}</span> {service.title}
          </h2>
          <p className="text-gray-700 mb-6">
            {service.description}
          </p>

          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Services() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null); // Use Service type here

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setIsOpen(true);
  };

  return (
    <div>
      <section className="py-16 bg-white px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-10">Our Services</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.title} // Unique key for list items
              className="bg-gray-100 p-6 rounded-xl shadow cursor-pointer flex flex-col items-center text-center"
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)" }} // Scale up on hover + shadow
              whileTap={{ scale: 0.95 }}   // Scale down on click
              onClick={() => handleServiceClick(service)} 
              transition={{ type: "spring", stiffness: 400, damping: 20 }} // Smooth transition for individual boxes
            >
              <div className="text-6xl mb-4">{service.icon}</div> {/* Larger icon */}
              <h4 className="text-xl font-semibold">{service.title}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Render the Modal only if isOpen is true AND a service is selected */}
      <AnimatePresence>
        {isOpen && selectedService && ( // Both conditions must be true
          <Modal onClose={() => setIsOpen(false)} service={selectedService} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Services;