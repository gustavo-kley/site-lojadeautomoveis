import { useState, useCallback } from 'react';
import type { Vehicle } from '@/data/vehicles';
import { vehicles } from '@/data/vehicles';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedSection from '@/components/FeaturedSection';
import VehicleCatalog from '@/components/VehicleCatalog';
import AboutSection from '@/components/AboutSection';
import TrustSection from '@/components/TrustSection';
import FinanceSection from '@/components/FinanceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import VehicleModal from '@/components/VehicleModal';

function App() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const openVehicle = useCallback((vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
  }, []);

  const closeVehicle = useCallback(() => {
    setSelectedVehicle(null);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeaturedSection vehicles={vehicles} onViewDetails={openVehicle} />
        <VehicleCatalog onViewDetails={openVehicle} />
        <AboutSection />
        <TrustSection />
        <FinanceSection />
        <ContactSection />
      </main>
      <Footer />
      <VehicleModal vehicle={selectedVehicle} onClose={closeVehicle} />
    </div>
  );
}

export default App;
