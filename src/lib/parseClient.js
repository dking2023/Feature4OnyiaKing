import Parse from "parse";

// Centralized Parse setup.
// Safe fallback values are used so the UI can still render during development.
let initialized = false;

export function initParse() {
  if (initialized) return Parse;

  const APP_ID = import.meta.env.VITE_PARSE_APP_ID || "dev-app";
  const JS_KEY = import.meta.env.VITE_PARSE_JS_KEY || "dev-js-key";
  const SERVER_URL =
    import.meta.env.VITE_PARSE_SERVER_URL || "https://parseapi.back4app.com";

  Parse.initialize(APP_ID, JS_KEY);
  Parse.serverURL = SERVER_URL;

  initialized = true;
  return Parse;
}

export { Parse };
