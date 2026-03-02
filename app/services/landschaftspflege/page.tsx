import { ServicePage } from "@/components/sections/service/ServicePage";
import { landschaftspflege } from "@/content/services";

export default function Page() {
  return <ServicePage config={landschaftspflege} />;
}