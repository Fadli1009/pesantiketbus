import { useEffect } from "react";

export function useSEO({ title, description, favicon, image, url }) {
  useEffect(() => {
    if (title) document.title = title;

    const setMeta = (attr, value, attrType = "name") => {
      if (!value) return;
      let tag = document.querySelector(`meta[${attrType}="${attr}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attrType, attr);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", value);
    };

    // Basic
    setMeta("description", description);

    // Open Graph (Facebook, WhatsApp, LinkedIn)
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:image", image, "property");
    setMeta("og:url", url || window.location.href, "property");
    setMeta("og:type", "website", "property");

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);

    // // Favicon
    // if (favicon) {
    //   let link =
    //     document.querySelector("link[rel~='icon']") ||
    //     document.createElement("link");
    //   link.rel = "icon";
    //   link.href = favicon;
    //   document.head.appendChild(link);
    // }
  }, [title, description, image, url]);
}
