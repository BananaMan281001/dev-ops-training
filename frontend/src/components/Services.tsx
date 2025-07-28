import { useState, useEffect } from "react";
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
  const [services, setServices] = useState<Service[]>([]); // State to store fetched services

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    fetch('/api/services') // <-- Directly request '/api/services'
      .then(response => { // Check HTTP response first, vital for error handling 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: Service[]) => { // Map services data to const services
        setServices(data);
      })
      .catch(error => {
        console.error("Error fetching services:", error);
      });
  }, []); // Empty dependency array means this runs once on mount and wont update even if the backend updates

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