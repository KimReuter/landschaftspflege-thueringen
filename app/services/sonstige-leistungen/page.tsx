import { ServicePage } from "@/components/sections/service/ServicePage";
import { sonstigeleistungen } from "@/content/services";

export default function Page() {
  return <ServicePage config={sonstigeleistungen} />;
}
