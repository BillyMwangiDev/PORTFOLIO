export function Footer() {
  return (
    <footer className="bg-coal/85 border-t border-smoke/30 py-8 px-6 md:px-14">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src="/bm-logo.png"
            alt="Billy Mwangi"
            width={40}
            height={40}
            className="opacity-90"
          />
          <span className="text-dm-label text-stone text-xs tracking-widest uppercase">Billy Mwangi / Hekima Labs</span>
        </div>
        <div className="flex items-center gap-8">
          <a
            href="/resume/Billy_Mwangi.pdf"
            download
            className="text-dm-label text-stone text-xs tracking-widest uppercase hover:text-ember transition-colors duration-200"
          >
            Resume
          </a>
          <span className="text-slate text-xs font-dm-sans tracking-widest">© 2026</span>
        </div>
      </div>
    </footer>
  )
}
