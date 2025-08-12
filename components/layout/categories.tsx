import { Smartphone, Gamepad2, Headphones, Package, Lightbulb, Watch, Monitor, Award } from "lucide-react";

const categories = [
  { name: "Phones", count: 4583, icon: Smartphone },
  { name: "Games", count: 4583, icon: Gamepad2 },
  { name: "Headsets", count: 4583, icon: Headphones, highlight: true },
  { name: "Essentials", count: 4583, icon: Package },
  { name: "Lights", count: 4683, icon: Lightbulb },
  { name: "Watches", count: 4583, icon: Watch },
  { name: "Desktops", count: 4583, icon: Monitor },
  { name: "Awards", count: 4583, icon: Award },
];

export default function CategorySection() {
  return (
    <section className="py-12 px-4 md:px-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-xl md:text-2xl font-semibold leading-tight">
          Browse Products <br className="sm:hidden" /> by Categories
        </h2>
        <button className="border px-4 py-2 rounded-full text-xs md:text-sm font-medium hover:bg-gray-100 transition">
          Explore All
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div
              key={idx}
              className={`flex items-center gap-3 p-3 md:p-4 rounded-xl border ${
                cat.highlight ? "border-yellow-400" : "border-gray-200"
              } hover:shadow transition bg-white`}
            >
              <div className="bg-blue-500 text-white p-2 md:p-3 rounded-full flex items-center justify-center">
                <Icon size={18} className="md:size-5" />
              </div>
              <div>
                <p className="font-medium text-sm md:text-base">{cat.name}</p>
                <p className="text-gray-500 text-xs md:text-sm">
                  {cat.count.toLocaleString()} products
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
