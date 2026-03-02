import { ServicePage } from "@/components/sections/service/ServicePage";
import { gartenbau } from "@/content/services";

export default function Page() {
  return <ServicePage config={gartenbau} />;
}