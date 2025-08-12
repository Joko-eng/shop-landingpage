import CategorySection from "@/components/layout/categories";
import HeroSection from "@/components/layout/hero-section";
import Navbar from "@/components/layout/navbar";


export default function HomePage() {
  return (
   <>
      <div className="bg-gray-300">
        <Navbar />
        <HeroSection />
      </div>
      <CategorySection />
    </>
  );
}
