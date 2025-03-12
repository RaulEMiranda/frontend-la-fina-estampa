import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">¡Página no encontrada!</h2>
      <p className="text-lg text-center mb-8">
        Lo sentimos, pero la página que buscas no existe o ha sido movida.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-500 text-white font-medium text-lg rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300"
      >
        Volver a la página principal
      </Link>
    </div>
  );
}
