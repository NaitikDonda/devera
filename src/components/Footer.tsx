export function Footer() {
  return (
    <footer className="bg-white px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-16 lg:grid-cols-[0.55fr_0.45fr]">
          <div>
            <img src="/logo.png" alt="Devera" className="h-12 w-auto mb-6" />
            <h2 className="text-4xl font-semibold leading-tight text-devera-dark sm:text-5xl">Digital experiences, built with intention.</h2>
          </div>
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-devera-dark/50">Navigation</p>
              <div className="mt-6 space-y-4 text-sm text-devera-dark/80">
                <a href="#work" className="block hover:text-devera-teal">Work</a>
                <a href="#services" className="block hover:text-devera-teal">Services</a>
                <a href="#about" className="block hover:text-devera-teal">About</a>
                <a href="#process" className="block hover:text-devera-teal">Process</a>
                <a href="#contact" className="block hover:text-devera-teal">Contact</a>
              </div>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-devera-dark/50">Contact</p>
              <div className="mt-6 space-y-4 text-sm text-devera-dark/80">
                <a href="https://www.instagram.com/_devera_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="block hover:text-devera-teal">Instagram</a>
                <a href="mailto:deveracrew@gmail.com" className="block hover:text-devera-teal">deveracrew@gmail.com</a>
                <a href="tel:+918329355641" className="block hover:text-devera-teal">+91 83293 55641</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-slate-200/70 pt-10 text-sm text-devera-dark/60">
          © 2026 Devera
        </div>
      </div>
    </footer>
  );
}
