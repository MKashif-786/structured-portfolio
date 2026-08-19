import { useEffect } from "react";

export default function Chatbots() {
  useEffect(() => {
    // Initialize Chatbase
    if (
      !window.chatbase ||
      window.chatbase("getState") !== "initialized"
    ) {
      window.chatbase = (...args) => {
        if (!window.chatbase.q) {
          window.chatbase.q = [];
        }

        window.chatbase.q.push(args);
      };

      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop) {
          if (prop === "q") {
            return target.q;
          }

          return (...args) => target(prop, ...args);
        },
      });
    }

    // Load Chatbase script
    const loadChatbase = () => {
      if (
        document.getElementById("ymrYg6trdw8iV-jyg2E-z")
      ) {
        return;
      }

      const script = document.createElement("script");

      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "ymrYg6trdw8iV-jyg2E-z";
      script.domain = "www.chatbase.co";
      script.async = true;

      document.body.appendChild(script);
    };

    if (document.readyState === "complete") {
      loadChatbase();
    } else {
      window.addEventListener("load", loadChatbase);
    }

    return () => {
      window.removeEventListener("load", loadChatbase);
    };
  }, []);

  // Chatbase creates the UI itself
  return null;
}