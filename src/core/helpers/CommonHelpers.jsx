import i18n from "../../locales/i18n";

export const getLocalizedValue = (obj, key) => {
  const language = i18n.language;

  if (!obj) return language === "ar" ? `${key}_l1` : key;
  const localizedKey = language === "ar" ? `${key}_l1` : key;
  return obj[localizedKey] || obj[key] || "";
};

 export const getIconEmoji = (slug) => {
    const emojiMap = {
      vehicles: "🚗",
      properties: "🏢",
      "mobile-phones-accessories": "📱",
      "electronics-home-appliances": "🔌",
      "home-furniture-decor": "🪑",
      "business-industrial": "🏭",
      pets: "🐕",
      "kids-babies": "👶",
      "sports-equipment": "⚽",
      "hobbies-music-art-books": "🎸",
      jobs: "💼",
      "fashion-beauty": "👗",
      services: "🔧",
    };
    return emojiMap[slug] || "📦";
  };