// import { create } from "zustand";

// export const useThemeStore = create((set) => ({
//   theme: localStorage.getItem("streamify-theme") || "coffee",
//   setTheme: (theme) => {
//     localStorage.setItem("streamify-theme", theme);
//     set({ theme });
//   },
// }));
import { create } from "zustand";

export const useThemeStore = create((set) => {
  // Ensure compatibility with SSR (Next.js) or environments without 'window'
  const defaultTheme =
    typeof window !== "undefined"
      ? localStorage.getItem("streamify-theme") || "sunset"
      : "sunset";

  return {
    theme: defaultTheme,
    setTheme: (theme) => {
      if (typeof window !== "undefined") {
        localStorage.setItem("streamify-theme", theme);
      }
      set({ theme });
    },
  };
});
