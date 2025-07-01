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
// This is the store API that defines the state and actions for the global state.
// It includes methods to open and close a sheet, set the active navigation state for mobile,
// and manage the content of the sheet.
// The state includes whether the sheet is open, the content of the sheet, and the active
// navigation state for mobile.
// The store is created using Zustand with devtools middleware for debugging.

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
