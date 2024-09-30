'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ConsultationModal from '@/components/common/ConsultationModal';

export function ConsultationModalTrigger() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        variant='default'
        size='lg'
        className='border border-white/30 bg-white/10 text-base font-semibold text-white/80 shadow-lg backdrop-blur-md hover:bg-white/20'
        onClick={() => setIsModalOpen(true)}
      >
        GET A FREE CONSULTATION
      </Button>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
