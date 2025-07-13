import type { StateCreator } from 'zustand';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type SheetContent = 'cart' | 'search' | null;

// Interface
export interface GlobalState {
  isSheetOpen: boolean;
  sheetContent: SheetContent;
  activeNavMobile: boolean;

  openSheet: (content: SheetContent) => void;
  closeSheet: () => void;
  setActiveNavMobile: (active: boolean) => void;
}

// Store API
// Esta es la API de la tienda que define el estado y las acciones para el estado global.
// Incluye métodos para abrir y cerrar una hoja, establecer el estado de navegación activo 
// para dispositivos móviles y administrar el contenido de la hoja.
// El estado incluye si la hoja está abierta, su contenido y el estado de navegación activo para dispositivos móviles.
// La tienda se crea usando Zustand con middleware devtools para la depuración.

const storeApi: StateCreator<GlobalState> = (set) => ({
  isSheetOpen: false,
  sheetContent: null,
  activeNavMobile: false,

  openSheet: (content) => {
    set({ isSheetOpen: true, sheetContent: content });
  },
  closeSheet: () => {
    set({ isSheetOpen: false, sheetContent: null });
  },
  setActiveNavMobile: (active) => {
    set({ activeNavMobile: active });
  },
});

export const useGlobalStore = create<GlobalState>()(devtools(storeApi));
