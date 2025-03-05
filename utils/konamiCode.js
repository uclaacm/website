import { useEffect, useCallback, useState } from 'react';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

export function useKonamiCode(callback) {
  // State to track the sequence of keys pressed
  const [keys, setKeys] = useState([]);
  
  // Use useCallback to memoize the handler
  const handleKeyDown = useCallback((event) => {
    // Get the key from the event
    const key = event.key;
    
    // Update the keys array
    setKeys(prevKeys => {
      const nextKeys = [...prevKeys, key];
      
      // If the sequence is longer than the Konami code, remove the first key
      while (nextKeys.length > KONAMI_CODE.length) {
        nextKeys.shift();
      }
      
      // Check if the sequence matches the Konami code
      const isKonamiCode = nextKeys.every((k, index) => {
        return k.toLowerCase() === KONAMI_CODE[index].toLowerCase();
      });
      
      // If the Konami code is detected, trigger the callback
      if (isKonamiCode && callback) {
        callback();
      }
      
      return nextKeys;
    });
  }, [callback]);
  
  // Setup and cleanup the event listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    
    // Cleanup function
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
  
  // We don't need to return anything for this hook
  // The effect is triggered by the key sequence
}
