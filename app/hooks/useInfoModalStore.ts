import { create } from 'zustand';

export interface ModalStoreInterface {
    movieId: string;
    movieType: string;
    isOpen: boolean;
    openModal: (movieId: string, movieType: string) => void;
    closeModal: () => void;
}

const useInfoModalStore = create<ModalStoreInterface>((set) => ({
    movieId: "",
    movieType: "",
    isOpen: false,
    openModal: (movieId: string, movieType: string) => set({ isOpen: true, movieId, movieType }),
    closeModal: () => set({ isOpen: false, movieId: "", movieType: "" }),
}));

export default useInfoModalStore;
