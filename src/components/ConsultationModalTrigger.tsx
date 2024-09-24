'use client'

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import ConsultationModal from '@/components/ConsultationModal';

export function ConsultationModalTrigger() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        variant="default"
        size="lg"
        className="bg-white/10 backdrop-blur-md border border-white/30 text-white/80 hover:bg-white/20 text-base font-semibold shadow-lg"
        onClick={() => setIsModalOpen(true)}
      >
        GET A FREE CONSULTATION
      </Button>
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
