export default function ProductInfoTable({ product }) {
  const rows = [
    { label: 'Product Category', value: product.subcategory },
    { label: 'Brand', value: product.brand },
    { label: 'Size', value: product.size },
    { label: 'Ideal For', value: product.idealFor },
    { label: 'Tag', value: product.tags?.join(', ') },
    { label: 'Key Ingredients', value: product.keyIngredients?.join(', ') },
    { label: 'SKU Code', value: product.sku },
  ];

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-primary-pink text-white text-center py-3 font-semibold">
        Product Info
      </div>
      <table className="w-full text-sm">
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="px-4 py-3 font-semibold text-gray-800 w-1/3 border-r border-gray-200">
                {row.label}
              </td>
              <td className="px-4 py-3 text-gray-600">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
