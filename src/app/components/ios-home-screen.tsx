import { useEffect, useState } from "react";
import bsLogo from "../../imports/image-6.png";
import phoneIcon from "../../imports/image-8.png";
import StockWidget from "./stock-widget";

// Pantalla de inicio de iOS simplificada: las 7 apps más populares en España
// (iconos reales de la App Store, CDN de Apple) más la app de Banc Sabadell,
// que es el lanzador del flujo de arranque (onLaunchSabadell).

const FONT = "'Libre Franklin', sans-serif";

// Iconos reales obtenidos de la App Store (CDN mzstatic de Apple).
const ICON = {
  whatsapp:
    "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/5d/fc/69/5dfc6928-acee-faaa-5c06-9b3b13197ebd/AppIcon-0-0-1x_U007epad-0-0-0-1-0-0-sRGB-0-85-220.png/512x512bb.jpg",
  instagram:
    "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/8d/a5/94/8da594e9-38e1-f757-45c7-f78856992264/Prod-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
  tiktok:
    "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/c8/cf/06/c8cf0625-604f-e6c1-575f-e49014356b5b/TikTok_AppIcon26-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg",
  youtube:
    "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/20/ea/87/20ea8738-6fac-caea-ccc1-72d8375a2310/logo_youtube_2024_q4_color-0-0-1x_U007emarketing-0-0-0-7-0-0-0-85-220.png/512x512bb.jpg",
  telegram:
    "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/1f/69/31/1f693117-6b3a-eacf-6b77-943856b02239/Telegram-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/512x512bb.jpg",
  spotify:
    "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b1/17/9b/b1179b9f-0f93-fc18-1fac-c83db8f757a0/AppIcon-0-0-1x_U007epad-0-1-0-0-sRGB-85-220.png/512x512bb.jpg",
  gmail:
    "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/83/87/42/8387429d-b63c-d5e9-9fb7-1933117f75d2/gmail_2026_ios-0-0-1x_U007epad-0-0-0-1-0-0-sRGB-0-0-85-220.png/512x512bb.jpg",
  maps:
    "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/51/0a/68/510a68b4-e133-3e4e-e139-68353814fb5f/maps_2025-0-0-1x_U007epad-0-0-0-1-0-0-sRGB-0-0-85-220.png/512x512bb.jpg",
  netflix:
    "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/74/29/d7/7429d726-255a-b779-a8a2-c43010194d34/AppIcon-0-0-1x_U007emarketing-0-11-0-sRGB-0-85-220.png/512x512bb.jpg",
  x:
    "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/bc/f8/e8/bcf8e84e-a6c7-1063-d56e-e85dff545b03/ProductionAppIcon-0-0-1x_U007emarketing-0-8-0-0-0-85-220.png/512x512bb.jpg",
  amazon:
    "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c2/97/0a/c2970a72-9f8d-bddd-2863-ba8c889bef87/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-0-85-220.png/512x512bb.jpg",
};

type AppDef = { id: string; label: string; src: string; onClick?: () => void };

function AppIcon({ app }: { app: AppDef }) {
  return (
    <button
      type="button"
      onClick={app.onClick}
      className="flex flex-col items-center gap-[7px] w-[68px] active:scale-90 transition-transform"
      aria-label={app.label}
    >
      <div className="size-[62px] rounded-[14px] overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.4)] bg-white/5">
        <img src={app.src} alt={app.label} className="size-full object-cover" draggable={false} />
      </div>
      <span
        className="text-white text-[12px] leading-[14px] text-center w-full truncate"
        style={{ textShadow: "0 1px 3px rgba(0,0,0,0.6)", fontFamily: FONT }}
      >
        {app.label}
      </span>
    </button>
  );
}

function StatusBar() {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" }),
  );
  useEffect(() => {
    const t = setInterval(
      () => setTime(new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })),
      10000,
    );
    return () => clearInterval(t);
  }, []);
  return (
    <div className="flex items-center justify-between px-[30px] pt-[16px] text-white" style={{ fontFamily: FONT }}>
      <span className="text-[15px] tracking-tight">{time}</span>
      <div className="flex items-center gap-[7px]">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="#fff">
          <rect x="0" y="8" width="3" height="4" rx="1" />
          <rect x="5" y="6" width="3" height="6" rx="1" />
          <rect x="10" y="3" width="3" height="9" rx="1" />
          <rect x="15" y="0" width="3" height="12" rx="1" />
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="#fff">
          <path d="M8 11.5 5.5 8.7a3.6 3.6 0 0 1 5 0L8 11.5ZM2.7 5.6a8 8 0 0 1 10.6 0l-1.6 1.7a5.6 5.6 0 0 0-7.4 0L2.7 5.6ZM.4 3.2a11.4 11.4 0 0 1 15.2 0l-1.6 1.7a9 9 0 0 0-12 0L.4 3.2Z" />
        </svg>
        <span className="text-[13px]">90</span>
        <div className="flex items-center gap-[2px]">
          <div className="w-[24px] h-[12px] rounded-[3px] border border-white/80 p-[1.5px]">
            <div className="h-full w-[90%] bg-white rounded-[1px]" />
          </div>
          <div className="w-[1.5px] h-[5px] bg-white/80 rounded-r" />
        </div>
      </div>
    </div>
  );
}

export default function IOSHomeScreen({ onLaunchSabadell }: { onLaunchSabadell: () => void }) {
  const apps: AppDef[] = [
    { id: "whatsapp", label: "WhatsApp", src: ICON.whatsapp },
    { id: "instagram", label: "Instagram", src: ICON.instagram },
    { id: "tiktok", label: "TikTok", src: ICON.tiktok },
    { id: "youtube", label: "YouTube", src: ICON.youtube },
    { id: "telegram", label: "Telegram", src: ICON.telegram },
    { id: "spotify", label: "Spotify", src: ICON.spotify },
    { id: "gmail", label: "Gmail", src: ICON.gmail },
    { id: "sabadell", label: "Sabadell", src: bsLogo, onClick: onLaunchSabadell },
  ];

  const dockApps: AppDef[] = [
    { id: "phone", label: "Teléfono", src: phoneIcon },
    { id: "netflix", label: "Netflix", src: ICON.netflix },
    { id: "x", label: "X", src: ICON.x },
    { id: "amazon", label: "Amazon", src: ICON.amazon },
  ];

  return (
    <div
      className="relative size-full overflow-hidden flex flex-col"
      style={{ background: "radial-gradient(130% 90% at 50% 0%, #20232b 0%, #14151a 50%, #0a0a0c 100%)" }}
    >
      <StatusBar />

      {/* Rejilla de apps y, debajo, el widget de Bolsa (acción de Banc Sabadell) */}
      <div className="flex-1 px-[18px] pt-[28px] overflow-hidden">
        <div className="grid grid-cols-4 gap-x-[10px] gap-y-[22px] justify-items-center">
          {apps.map((app) => (
            <AppIcon key={app.id} app={app} />
          ))}
        </div>
        <div className="mt-[28px]">
          <StockWidget />
        </div>
      </div>

      {/* Pill de búsqueda */}
      <div className="flex justify-center pb-[18px]">
        <div
          className="flex items-center gap-[6px] px-[16px] py-[7px] rounded-full"
          style={{ background: "rgba(120,120,128,0.32)", backdropFilter: "blur(8px)" }}
        >
          <svg width="13" height="13" viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="1.6">
            <circle cx="5" cy="5" r="3.5" />
            <line x1="7.7" y1="7.7" x2="11" y2="11" strokeLinecap="round" />
          </svg>
          <span className="text-white text-[13px]" style={{ fontFamily: FONT }}>Búsqueda</span>
        </div>
      </div>

      {/* Dock de iOS */}
      <div
        className="mx-[10px] mb-[10px] rounded-[34px] px-[12px] py-[12px]"
        style={{ background: "rgba(120,120,128,0.30)", backdropFilter: "blur(20px)" }}
      >
        <div className="flex items-center justify-around">
          {dockApps.map((app) => (
            <button
              key={app.id}
              type="button"
              onClick={app.onClick}
              aria-label={app.label}
              className="size-[62px] rounded-[14px] overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.4)] bg-white/5 active:scale-90 transition-transform"
            >
              <img src={app.src} alt={app.label} className="size-full object-cover" draggable={false} />
            </button>
          ))}
        </div>
      </div>

      {/* Indicador home */}
      <div className="flex justify-center pb-[10px]">
        <div className="w-[134px] h-[5px] rounded-full bg-white/70" />
      </div>
    </div>
  );
}
