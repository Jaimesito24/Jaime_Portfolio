import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

const App = ({ Component, pageProps }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensure the app has mounted before rendering
  }, []);

  if (!mounted) {
    return null; // Prevent rendering until the DOM is ready
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
