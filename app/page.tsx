import CategorySection from "@/components/layout/categories";
import HeroSection from "@/components/layout/hero-section";
import Navbar from "@/components/layout/navbar";


export default function HomePage() {
  return (
   <>
      <div className="bg-gray-300">
        <Navbar />
        <div className="pt-20"> {/* memberi jarak dari atas */}
        <HeroSection />
      </div>
      </div>
      <div id="categories" className="pt-8">
        <CategorySection />
      </div>
    </>
  );
}
