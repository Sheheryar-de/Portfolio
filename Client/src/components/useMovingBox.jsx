import { useEffect, useState } from "react";

const useMovingBox = (ref) => {
  const [isDesktop, setIsDesktop] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleMediaChange = () => {
      setIsDesktop(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    handleMediaChange();

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      return;
    }

    const box = ref.current;

    if (!box) {
      console.error("The ref does not have a current value.");
      return;
    }

    const handleMouseMove = (e) => {
      const rect = box.getBoundingClientRect();
      const BoxWidth = box.clientWidth;
      const BoxHeight = box.clientHeight;

      // Calculate center of the box
      const boxCenterX = rect.left + BoxWidth / 2;
      const boxCenterY = rect.top + BoxHeight / 2;

      // Calculate distance from the center with damping effect
      const moveX = (e.clientX - boxCenterX) * 1; // Adjust damping factor as needed
      const moveY = (e.clientY - boxCenterY) * 1;

      box.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
    };

    const handleMouseOut = () => {
      box.style.transform = ``;
    };

    box.addEventListener("mousemove", handleMouseMove);
    box.addEventListener("mouseout", handleMouseOut);

    return () => {
      box.removeEventListener("mousemove", handleMouseMove);
      box.removeEventListener("mouseout", handleMouseOut);
    };
  }, [ref, isDesktop]);
};

export default useMovingBox;
