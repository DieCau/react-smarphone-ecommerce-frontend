import type { StateCreator } from 'zustand';
import { create } from 'zustand';

import { devtools } from 'zustand/middleware';

// Interface
export interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// Store API
// This is the store API that defines the state and actions for the counter.
// It includes methods to increment and decrement the count.
// The state includes the current count.
// The store is created using Zustand with devtools middleware for debugging.
// The count starts at 1.
// The increment method increases the count by 1.
// The decrement method decreases the count by 1, ensuring it does not go below 1
const storeApi: StateCreator<CounterState> = (set) => ({
  count: 1,

  increment: () => {
    set((state) => ({ count: state.count + 1 }));
  },

  decrement: () => {
    set((state) => ({ count: Math.max(1, state.count - 1) }));
  },
});

export const useCounterStore = create<CounterState>()(devtools(storeApi));
