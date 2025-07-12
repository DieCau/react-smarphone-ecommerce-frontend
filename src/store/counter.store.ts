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
// Esta es la API de la tienda que define el estado y las acciones del contador.
// Incluye métodos para incrementar y decrementar el conteo.
// El estado incluye el conteo actual.
// La tienda se crea usando Zustand con el middleware devtools para la depuración.
// El conteo comienza en 1.
// El método de incremento incrementa el conteo en 1.
// El método de decremento disminuye el conteo en 1, asegurando que no baje de 1.
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
