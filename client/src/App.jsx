export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans text-slate-900">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
          Mahdere Selam
        </h1>
        <p className="text-xl text-slate-600 font-medium">
          Ethiopian Orthodox Tewahedo Church
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-200">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            Liturgy
          </span>
          <h2 className="text-2xl font-bold mt-2">Divine Service</h2>
          <p className="mt-4 text-slate-500">5:00 AM — 11:00 AM</p>
        </div>

        <div className="p-8 bg-slate-900 text-white rounded-3xl shadow-xl scale-105">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Youth
          </span>
          <h2 className="text-2xl font-bold mt-2">Kids & Teens</h2>
          <p className="mt-4 text-slate-300">8:00 AM — 9:00 AM</p>
        </div>

        <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-200">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            School
          </span>
          <h2 className="text-2xl font-bold mt-2">Sunday School</h2>
          <p className="mt-4 text-slate-500">11:00 AM — 12:00 PM</p>
        </div>
      </div>
    </div>
  );
}
