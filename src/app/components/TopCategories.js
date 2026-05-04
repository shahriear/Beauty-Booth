'use client';

const categories = [
  { name: 'Make up', emoji: '💄' },
  { name: 'Skin Care', emoji: '✨' },
  { name: 'Hair Care', emoji: '💆' },
  { name: 'Bath & Body Care', emoji: '🛁' },
  { name: 'Mom & Baby Care', emoji: '👶' },
  { name: 'Accessories', emoji: '💍' },
];

export default function TopCategories() {
  return (
    <section className="px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-800">TOP CATEGORIES</h2>
        <button className="text-purple-600 hover:text-purple-700 font-semibold text-sm">
          See All →
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition cursor-pointer group"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition">
              {category.emoji}
            </div>
            <p className="text-sm font-semibold text-gray-800 text-center">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
