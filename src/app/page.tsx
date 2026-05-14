import { Hero } from "@/components/sections/Hero";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { RecoveryJourney } from "@/components/sections/RecoveryJourney";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/ui/CTASection";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <ServicesPreview />
      <WhyChooseUs />
      <RecoveryJourney />
      <Testimonials />
      <FAQ />
      <SectionWrapper spacing="tight">
        <Container>
          <CTASection
            heading="Start Your Recovery Journey Today"
            description="Book a consultation with our specialist team in Nairobi and take the first step towards full recovery and an active life."
          />
        </Container>
      </SectionWrapper>
    </>
  );
}
