
import CTASection from '../components/CTASection'
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SolutionsSection from '../components/SolutionsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import UseCasesSection from '../components/UseCasesSection';

export default function Home() {
  return (
    (<div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <UseCasesSection />
        <SolutionsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>)
  );
}

