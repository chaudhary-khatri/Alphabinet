import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    // Create the matchMedia query
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    // Function to handle the change
    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches); // Directly use the result of matches
    };

    // Set the initial state based on the matchMedia query
    setIsMobile(mql.matches);

    // Add event listener for changes in screen size
    mql.addEventListener("change", onChange);

    // Cleanup the listener when the component unmounts
    return () => {
      mql.removeEventListener("change", onChange);
    };
  }, []);

  return isMobile ?? false; // Ensure we return a boolean (false if undefined)
}
