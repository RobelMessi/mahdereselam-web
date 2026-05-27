import { useState } from 'react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'sunday-school', label: 'Sunday School' },
  { id: 'otyc', label: 'OTYC' },
  { id: 'about', label: 'About' },
];

const homeSections = [
  {
    title: 'About the Church',
    note: 'History, mission, parish story, and the role Mahdere Selam plays in the community.',
  },
  {
    title: 'Location',
    note: 'Address, map embed, parking notes, and first-time visitor directions.',
  },
  {
    title: 'Priests',
    note: 'Priest profiles, photos, contact windows, and spiritual guidance information.',
  },
  {
    title: 'Service Times and Holidays',
    note: 'Weekly liturgy schedule, feast days, fasting seasons, and holiday announcements.',
  },
  {
    title: 'Personal and Family Services',
    note: 'Baptisms, weddings, memorials, counseling, house blessings, and family support.',
  },
  {
    title: 'High School Help',
    note: 'Reserved for your future backend features, tutoring resources, forms, and mentorship.',
  },
];

const sundaySchoolSections = [
  'Calendar Space',
  'Songs and Translations',
  'Orthodox Hymns',
  'Traditions',
  'Sacraments',
  'Youth Resources',
];

const otycSections = [
  'Weekly Topic',
  'Discussion Notes',
  'Slides Library',
  'Events',
  'Leadership Space',
  'Real World Questions',
];

function Header({ activePage, setActivePage }) {
  return (
    <header className="sticky top-0 z-20 border-b border-[#d9c27a]/50 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-4 md:flex-row md:items-center md:justify-between lg:px-8">
        <button
          className="flex items-center gap-3 text-left"
          onClick={() => setActivePage('home')}
          type="button"
        >
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded border border-[#c9a227] bg-[#f7f1da] text-lg font-black text-[#8d111b]">
            MS
          </span>
          <span>
            <span className="block text-xl font-black leading-tight text-[#172a5e]">
              ማህደረ ሰላም
            </span>
            <span className="block text-sm font-semibold uppercase tracking-[0.08em] text-[#6f243f]">
              Mahdere Selam EOTC
            </span>
          </span>
        </button>

        <nav className="flex flex-wrap gap-2">
          {navItems.slice(1).map((item) => (
            <button
              className={`rounded border px-4 py-2 text-sm font-bold transition ${
                activePage === item.id
                  ? 'border-[#172a5e] bg-[#172a5e] text-white'
                  : 'border-[#d8d2c3] bg-white text-[#172a5e] hover:border-[#c9a227] hover:bg-[#f9f5e6]'
              }`}
              key={item.id}
              onClick={() => setActivePage(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

function VerseSlot({ label = 'Verse / Icon Space' }) {
  return (
    <div className="rounded border border-dashed border-[#b88a2a] bg-white/60 p-4 text-sm font-semibold text-[#6f243f]">
      {label}
    </div>
  );
}

function SectionCard({ title, note }) {
  return (
    <article className="rounded border border-[#e0d5bb] bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-black uppercase tracking-[0.14em] text-[#0f7a4f]">
            Home Section
          </p>
          <h3 className="text-2xl font-black text-[#172a5e]">{title}</h3>
        </div>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded border border-[#c9a227] bg-[#fff8df] text-xs font-black text-[#8d111b]">
          Icon
        </span>
      </div>
      <p className="min-h-16 text-base leading-7 text-[#38415f]">{note}</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <VerseSlot />
        <VerseSlot label="Image / Content Space" />
      </div>
    </article>
  );
}

function HomePage() {
  return (
    <main>
      <section className="border-b border-[#e5d7ad] bg-[#fdf9ee]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-[1.1fr_0.9fr] md:items-center lg:px-8">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[#8d111b]">
              Ethiopian Orthodox Tewahedo Church
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] text-[#172a5e] md:text-6xl">
              Mahdere Selam
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#35415f]">
              A stronger digital home for the church community, built around worship,
              learning, service, youth, and family life.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <VerseSlot label="Verse Space" />
              <VerseSlot label="Icon Space" />
              <VerseSlot label="Announcement Space" />
            </div>
          </div>

          <div className="rounded border border-[#d7c17e] bg-white p-5 shadow-sm">
            <div className="grid aspect-[4/3] place-items-center rounded bg-[#172a5e] p-6 text-center text-white">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#f0cb4f]">
                  Hero Image Space
                </p>
                <p className="mt-3 text-sm leading-6 text-[#e8edf9]">
                  Add church photography, a liturgical image, or a rotating event
                  feature here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#0f7a4f]">
              Main Outline
            </p>
            <h2 className="mt-2 text-3xl font-black text-[#172a5e]">
              Build these sections out over time
            </h2>
          </div>
          <VerseSlot label="Global Verse / Icon Row Space" />
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {homeSections.map((section) => (
            <SectionCard key={section.title} {...section} />
          ))}
        </div>
      </section>
    </main>
  );
}

function TopicGrid({ items, eyebrow }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article
          className="rounded border border-[#e0d5bb] bg-white p-5 shadow-sm"
          key={item}
        >
          <p className="mb-2 text-xs font-black uppercase tracking-[0.14em] text-[#8d111b]">
            {eyebrow}
          </p>
          <h3 className="text-2xl font-black text-[#172a5e]">{item}</h3>
          <div className="mt-6 grid min-h-40 place-items-center rounded border border-dashed border-[#b88a2a] bg-[#fdf9ee] p-5 text-center text-sm font-semibold text-[#6f243f]">
            Reserved content area
          </div>
        </article>
      ))}
    </div>
  );
}

function SundaySchoolPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
      <div className="mb-8 grid gap-5 md:grid-cols-[1fr_320px] md:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#0f7a4f]">
            Learning and Worship
          </p>
          <h1 className="mt-2 text-4xl font-black text-[#172a5e]">
            Sunday School
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#38415f]">
            A home for calendar updates, Amharic and English translations,
            hymns, traditions, sacraments, and student resources.
          </p>
        </div>
        <VerseSlot label="Calendar Embed Space" />
      </div>
      <TopicGrid eyebrow="Sunday School" items={sundaySchoolSections} />
    </main>
  );
}

function OtycPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
      <div className="mb-8 grid gap-5 md:grid-cols-[1fr_320px] md:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#8d111b]">
            Young Adult Orthodox Club
          </p>
          <h1 className="mt-2 text-4xl font-black text-[#172a5e]">OTYC</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#38415f]">
            A flexible page for weekly discussions about Biblical values,
            real-world questions, slides, events, and leadership updates.
          </p>
        </div>
        <VerseSlot label="Slides / File Feature Space" />
      </div>
      <TopicGrid eyebrow="OTYC" items={otycSections} />
    </main>
  );
}

function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
      <section className="grid gap-8 rounded border border-[#e0d5bb] bg-white p-6 shadow-sm md:grid-cols-[320px_1fr] md:p-8">
        <div className="grid aspect-[4/5] place-items-center rounded bg-[#fdf9ee] p-6 text-center text-sm font-bold text-[#6f243f]">
          Your Photo Space
        </div>
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#0f7a4f]">
            About the Creator
          </p>
          <h1 className="mt-2 text-4xl font-black text-[#172a5e]">
            Robel's Website Story
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#38415f]">
            Use this page for your school, goals, why you built this site, and
            how people can contact you.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {['School', 'Goals', 'Contact Info', 'Project Notes'].map((item) => (
              <div
                className="rounded border border-dashed border-[#b88a2a] bg-[#fdf9ee] p-5"
                key={item}
              >
                <h3 className="text-xl font-black text-[#172a5e]">{item}</h3>
                <p className="mt-3 min-h-20 text-sm leading-6 text-[#38415f]">
                  Reserved space for your content.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function App() {
  const [activePage, setActivePage] = useState('home');

  const pages = {
    home: <HomePage />,
    'sunday-school': <SundaySchoolPage />,
    otyc: <OtycPage />,
    about: <AboutPage />,
  };

  return (
    <div className="min-h-screen bg-[#fbfaf7] font-sans text-[#172a5e]">
      <Header activePage={activePage} setActivePage={setActivePage} />
      {pages[activePage]}
      <footer className="border-t border-[#e5d7ad] bg-[#172a5e] px-5 py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-bold">Mahdere Selam Ethiopian Orthodox Tewahedo Church</p>
          <p className="text-sm text-[#f0cb4f]">Footer links and contact space</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
