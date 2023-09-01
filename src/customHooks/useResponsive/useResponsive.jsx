import { useEffect, useState } from "react";

// Mobile (Smartphone) max-width: 480px
// Low Resolution Tablets and ipads max-width: 767px
// Tablets Ipads portrait mode max-width:1024px
// Desktops max-width:1280px
// Huge size (Larger screen) max-width: 1281px and greater

const useResponsive = () => {
  const checkScreenSize = (size) => {
    if (size < 480) {
      return "mobile";
    } else if (size >= 480 && size < 767) {
      return "tablet";
    } else if (size >= 767 && size < 1024) {
      return "tabletPortrait";
    } else if (size >= 1024 && size < 1280) {
      return "laptop";
    } else {
      return "desktop";
    }
  };

  const [device, setDevice] = useState(checkScreenSize(window.innerWidth));

  const handleWindowResize = () => {
    if (checkScreenSize(window.innerWidth) != device) {
      setDevice(checkScreenSize(window.innerWidth));
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [device]);

  return device;
};

export default useResponsive;
