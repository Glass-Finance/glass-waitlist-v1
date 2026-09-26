import { useEffect, useRef } from "react";
import { Crisp } from "crisp-sdk-web";

// Marketing-site support chat. Uses the same Website ID as the app, and
// Crisp's default cookie domain is the shared base domain, so a visitor
// keeps their conversation when moving between glasspay.app and
// app.glasspay.app. With Total Privacy Mode enabled in the Crisp
// dashboard, no chatbox cookies are set until the visitor opens the chat.
//
// Deliberately top-level (not src/components/common/): the app repo keeps
// its auth-aware copy at src/components/common/CrispChat.jsx, and files
// under common/ must stay byte-identical across both repos.
export default function CrispChat() {
  const configured = useRef(false);
  const websiteId = import.meta.env.VITE_CRISP_WEBSITE_ID;

  useEffect(() => {
    if (!websiteId || configured.current) return;
    Crisp.configure(websiteId, { sessionMerge: true });
    configured.current = true;
  }, [websiteId]);

  return null;
}
