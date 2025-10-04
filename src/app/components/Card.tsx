export default function Card({ title, subtitle, description, footer }: any) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mb-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-blue-600">{title}</h3>
      {subtitle && <p className="text-gray-600 mb-2">{subtitle}</p>}
      <p className="text-gray-700 mb-4">{description}</p>
      {footer && <p className="text-sm text-gray-500">{footer}</p>}
    </div>
  );
}
