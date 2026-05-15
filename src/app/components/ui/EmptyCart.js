export default function EmptyCart() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center">
      <h3 className="text-2xl font-semibold mb-3">Shopping bag is empty</h3>

      <p className="text-gray-500 mb-6">
        Looks like you haven’t added anything yet.
      </p>

      <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full transition">
        Explore →
      </button>
    </div>
  );
}
