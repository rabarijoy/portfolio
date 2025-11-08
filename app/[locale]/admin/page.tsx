export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Tableau de bord</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Projets</h2>
          <p className="text-gray-600 mb-4">Gérer vos projets portfolio</p>
          <a
            href="/admin/projects"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Gérer les projets →
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Tarifs</h2>
          <p className="text-gray-600 mb-4">Gérer vos tarifs de prestations</p>
          <a
            href="/admin/prices"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Gérer les tarifs →
          </a>
        </div>
      </div>
    </div>
  );
}

