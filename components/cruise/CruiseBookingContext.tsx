'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type CruiseMode = 'cruise' | 'ferry';

interface CruiseBookingContextValue {
  pendingMode: CruiseMode | null;
  requestMode: (mode: CruiseMode) => void;
  clearPendingMode: () => void;
}

const CruiseBookingContext = createContext<CruiseBookingContextValue | null>(null);

export function CruiseBookingProvider({ children }: { children: ReactNode }) {
  const [pendingMode, setPendingMode] = useState<CruiseMode | null>(null);

  return (
    <CruiseBookingContext.Provider
      value={{
        pendingMode,
        requestMode: setPendingMode,
        clearPendingMode: () => setPendingMode(null),
      }}
    >
      {children}
    </CruiseBookingContext.Provider>
  );
}

export function useCruiseBooking() {
  const ctx = useContext(CruiseBookingContext);
  if (!ctx) throw new Error('useCruiseBooking must be used within CruiseBookingProvider');
  return ctx;
}
