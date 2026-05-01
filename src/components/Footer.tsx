import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-coal border-t border-smoke/30 py-10 px-6 md:px-14">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image
            src="/hekima-labs-logo.png"
            alt="Hekima Labs"
            width={32}
            height={32}
            className="opacity-80"
          />
          <span className="text-dm-label text-stone text-xs">Billy Mwangi / Hekima Labs</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="/resume/Billy_Mwangi.pdf"
            download
            className="text-dm-label text-stone text-xs hover:text-ember transition-colors duration-200"
          >
            Resume
          </a>
          <span className="text-slate text-xs font-dm-sans">© 2026</span>
        </div>
      </div>
    </footer>
  )
}
