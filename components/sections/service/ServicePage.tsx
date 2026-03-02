"use client";

import type { ServiceConfig } from "@/content/services";
import { ServiceHero } from "./ServiceHero";
import { ServiceLeistungen } from "./ServiceLeistungen";
import { ServiceVorteile } from "./ServiceVorteile";
import { ServiceCta } from "./ServiceCta";

export function ServicePage({ config }: { config: ServiceConfig }) {
  return (
    <main className="bg-surface min-h-screen">
      <ServiceHero config={config} />
      <div className="border-t border-border mx-6 md:mx-10" />
      <ServiceLeistungen leistungen={config.leistungen} />
      <ServiceVorteile headline={config.warumHeadline} text={config.warumText} vorteile={config.vorteile} />
      <ServiceCta />
    </main>
  );
}