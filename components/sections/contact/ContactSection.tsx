import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="px-6 md:px-10 py-20 md:py-28">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-px bg-border">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}