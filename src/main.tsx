import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

history.scrollRestoration = "manual";

const navigation = performance.getEntriesByType("navigation")[0] as
	| PerformanceNavigationTiming
	| undefined;

if (
	navigation?.type === "reload" &&
	(window.location.pathname !== "/" || window.location.hash)
) {
	window.history.replaceState(null, "", "/");
	window.scrollTo(0, 0);
}

createRoot(document.getElementById("root")!).render(<App />);
