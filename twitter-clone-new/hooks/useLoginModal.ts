import { create } from 'zustand';

interface LoginModalState {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

const useLoginModal = create<LoginModalState>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));
// This is the hook to control the login model. 
//It uses Zustand to create a store with the isOpen state and two functions to open and close the model. 
//The hook is used in the Layout component to control the visibility of the login model.

export default useLoginModal;