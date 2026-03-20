export default function Footer() {
  return (
    <footer className="bg-navy-deep py-12">
      <div className="mx-auto max-w-content px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
          <a
            href="/terms-and-conditions.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-gray hover:text-white transition-colors duration-200"
          >
            Terms &amp; Conditions
          </a>
          <a
            href="mailto:contact@darsal.net"
            className="text-light-gray hover:text-white transition-colors duration-200"
          >
            contact@darsal.net
          </a>
          <a
            href="/disclaimer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-gray hover:text-white transition-colors duration-200"
          >
            Disclaimer
          </a>
        </div>
        <p className="mt-6 text-center text-cool-gray text-sm">
          © 2003–2026 DARSAL. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
