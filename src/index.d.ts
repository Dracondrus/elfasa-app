export {};

declare global {
  interface Window {
    Android?: {
      startQrScanner?: () => void;
      openCamera?: () => void;
    };
  }
}
