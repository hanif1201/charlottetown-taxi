'use client';

import { createContext, useContext, useReducer, Dispatch } from 'react';
import { BookingAction, BookingState, bookingReducer, initialBookingState } from '@/lib/booking-types';

const BookingContext = createContext<{ state: BookingState; dispatch: Dispatch<BookingAction> } | null>(
  null,
);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(bookingReducer, initialBookingState);
  return <BookingContext.Provider value={{ state, dispatch }}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used within a BookingProvider');
  return ctx;
}
