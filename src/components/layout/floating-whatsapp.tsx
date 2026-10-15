const whatsappNumber = "2348147624946";

function WhatsAppIcon({ className = "size-7" }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 32 32"
			aria-hidden="true"
			className={className}
			fill="currentColor">
			<path d="M16.04 3A12.93 12.93 0 0 0 5.16 22.91L3.04 29l6.34-2.02A12.95 12.95 0 1 0 16.04 3Zm0 23.72a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-3.76 1.2 1.23-3.6-.25-.4a10.74 10.74 0 1 1 8.62 4.52Zm5.89-8.03c-.32-.16-1.91-.94-2.21-1.05-.3-.11-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.26-.19.22-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6a9.7 9.7 0 0 1-1.79-2.23c-.19-.32-.02-.5.14-.66.15-.14.32-.38.49-.56.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.55-.73-.56h-.62c-.22 0-.57.08-.86.4-.3.32-1.13 1.1-1.13 2.69 0 1.59 1.16 3.12 1.32 3.34.16.22 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.25 1.48.21 2.03.13.62-.09 1.91-.78 2.18-1.53.27-.76.27-1.42.19-1.55-.08-.14-.3-.22-.62-.38Z" />
		</svg>
	);
}

export function FloatingWhatsApp() {
	return (
		<a
			href={`https://wa.me/${whatsappNumber}`}
			target="_blank"
			rel="noreferrer"
			aria-label="Chat with Gesiye on WhatsApp"
			title="Chat with Gesiye on WhatsApp"
			className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(7,21,47,0.28)] transition-transform hover:scale-105 focus-visible:scale-105 sm:bottom-7 sm:right-7 sm:size-16">
			<WhatsAppIcon />
			<span className="sr-only">Chat with Gesiye on WhatsApp</span>
		</a>
	);
}
