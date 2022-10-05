import { useEffect } from "react";

const onScroll = useCallback(event => {
    const { pageYOffset, scrollY } = window;
    console.log("yOffset", pageYOffset, "scrollY", scrollY);
    setScrollY(window.pageYOffset);
}, []);

useEffect(() => {
  //add eventlistener to window
  window.addEventListener("scroll", onScroll, { passive: true });
  // remove event on unmount to prevent a memory leak with the cleanup
  return {
    window.removeEventListener("scroll", onScroll, { passive: true });
  }
}, []);

export default useEffect;