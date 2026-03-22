"use client";

import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { DashedDivider } from "@/components/ui/dashed-divider";
import BorderGlow from "@/components/BorderGlow";
import Image from "next/image";

import {
  MapPin,
  Mail,
  Globe,
  Briefcase,
  Phone,
  User,
  Clock,
  Volume2,
  CloudDownload,
} from "lucide-react";
import { Press_Start_2P } from "next/font/google";
import { useEffect, useState } from "react";

import { profileData } from "@/lib/data";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

export default function ProfileCard() {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  const handleSpeak = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(profileData.pronunciation);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      const voices = window.speechSynthesis.getVoices();
      const selectedVoice = voices.find(
        (v) => v.name === "Google UK English Female",
      );
      if (selectedVoice) utterance.voice = selectedVoice;
      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kuala_Lumpur",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }) + " MYT",
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const displayInfo = [
    { key: "Role", icon: Briefcase, val: profileData.role },
    { key: "Location", icon: MapPin, val: profileData.location },
    { key: "Local", icon: Clock, val: time || "Loading..." },
    { key: "Sex", icon: User, val: profileData.sex },
    {
      key: "Email",
      icon: Mail,
      val: profileData.email,
      link: `mailto:${profileData.email}`,
    },
    {
      key: "Phone",
      icon: Phone,
      val: profileData.phone,
      link: `tel:${profileData.phone.replace(/\s+/g, "")}`,
    },
    {
      key: "Web",
      icon: Globe,
      val: profileData.web,
      link: `https://${profileData.web}`,
    },
  ];

  return (
    <section id="about" className="relative rounded-[10px]">
      {/* Avatar + name */}
      <div className="relative flex items-end gap-4 px-5 pt-52 pb-5">
        {/* Banner Section */}
        <div className="absolute top-0 left-0 w-full bottom-[76px] overflow-hidden flex items-center justify-center">
          <DottedGlowBackground
            className="pointer-events-none mask-radial-to-90% mask-radial-at-center absolute inset-0 z-0 opacity-50"
            opacity={0.3}
            gap={10}
            radius={1.6}
            colorLightVar="--color-neutral-500"
            glowColorLightVar="--color-neutral-600"
            colorDarkVar="--color-neutral-500"
            glowColorDarkVar="--color-sky-800"
            backgroundOpacity={0}
            speedMin={0.3}
            speedMax={1.6}
            speedScale={1}
          />
          <span
            className={`${pixelFont.variable} relative z-10 text-3xl text-[var(--foreground)] transition-opacity duration-200 ${scrolled ? "opacity-0" : "opacity-100"} select-none pb-4`}
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            AFH
          </span>
        </div>
        {/* Full-width horizontal line */}
        <div className="absolute left-1/2 bottom-[76px] w-screen -translate-x-1/2 h-px bg-[var(--border)]" />
        {/* Avatar */}
        <BorderGlow
          borderRadius={48}
          className="relative z-10 w-24 h-24 flex-shrink-0"
          glowRadius={24}
          glowIntensity={0.8}
          animated={true}
          backgroundColor="var(--background-panel)"
        >
          <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center text-xl font-bold text-[var(--foreground)] select-none">
            <Image
              src={"/image/profile.jpg"}
              alt={"Ahmad Fakhrul Hadi"}
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>
        </BorderGlow>
        {/* Info */}
        <div className="flex flex-col gap-1 min-w-0 relative z-10 mb-2">
          <div className="flex items-center gap-3">
            <h1 className="text-base font-bold text-[var(--foreground)] tracking-tight leading-none">
              {profileData.name}
            </h1>
            <div className="flex items-center gap-2 translate-y-[1px]">
              <button
                onClick={handleSpeak}
                className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                title="Pronounce name"
              >
                <Volume2 size={14} />
              </button>
              <a
                href="/cv"
                className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                title="View/Download CV"
              >
                <CloudDownload size={14} />
              </a>
            </div>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            {profileData.openToWork && (
              <>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <p className="text-xs font-medium text-[var(--muted-foreground)]">
                  Open to work
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Dashed diagonal line section */}
      <DashedDivider />

      {/* Info rows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-[var(--border)]">
        {displayInfo.map(({ key, icon: Icon, val, link }, index) => {
          const isLastRowMobile = index === displayInfo.length - 1;
          const isLastRowDesktop =
            index >= Math.floor((displayInfo.length - 1) / 2) * 2;

          return (
            <div
              key={key}
              className={`grid grid-cols-[80px_1fr] border-[var(--border)] px-4 py-2.5 items-center
                ${index % 2 === 0 ? "sm:border-r" : ""}
                ${!isLastRowMobile ? "border-b" : ""}
                ${isLastRowDesktop ? "sm:border-b-0" : "sm:border-b"}
              `}
            >
              <div className="flex items-center gap-1.5">
                <Icon
                  size={10}
                  className="text-[var(--muted-foreground)]"
                  strokeWidth={2}
                />
                <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-[var(--muted-foreground)]">
                  {key}
                </span>
              </div>

              {link ? (
                <a
                  href={link}
                  className="text-xs font-medium text-[var(--foreground)] hover:text-[var(--muted-foreground)] transition-colors truncate"
                >
                  {val}
                </a>
              ) : (
                <span className="text-xs text-[var(--foreground)] truncate">
                  {val}
                </span>
              )}
            </div>
          );
        })}
        <div className="hidden sm:block relative overflow-hidden h-full min-h-[32px] w-full opacity-30">
          <BackgroundRippleEffect rows={1} cols={16} cellSize={37} />
        </div>
      </div>
    </section>
  );
}
