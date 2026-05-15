export default function CartItem({ item }) {
  return (
    <div className="flex gap-4 border-b pb-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg"
      />

      <div className="flex-1">
        <h4 className="font-semibold">{item.name}</h4>

        <p className="text-pink-600 font-bold mt-2">৳ {item.price}</p>
      </div>
    </div>
  );
}
