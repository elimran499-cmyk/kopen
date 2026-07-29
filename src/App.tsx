import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AppCompat } from './components/AppCompat';
import { Benefits } from './components/Benefits';
import { Pricing } from './components/Pricing';
import { MultiScreen } from './components/MultiScreen';
import { BuySteps } from './components/BuySteps';
import { HowItWorks } from './components/HowItWorks';
import { Comparison } from './components/Comparison';
import { Football } from './components/Football';
import { VodRails } from './components/VodRails';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState('plan-12m');

  const handleOpenOrderModal = (planId?: string) => {
    if (planId) setSelectedPlanId(planId);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen font-sans">
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      <main>
        <Hero onOpenOrderModal={handleOpenOrderModal} />
        <AppCompat />
        <Benefits />
        <Pricing onOpenOrderModal={handleOpenOrderModal} />
        <MultiScreen onOpenOrderModal={handleOpenOrderModal} />
        <BuySteps />
        <HowItWorks />
        <Comparison />
        <Football />
        <VodRails />
        <Reviews />
        <FAQ />
        <FinalCta />
      </main>

      <Footer />
      <FloatingWhatsApp />

      <OrderModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialPlanId={selectedPlanId}
      />
    </div>
  );
}
