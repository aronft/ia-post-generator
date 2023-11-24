export const Footer = () => {
    return (
        <footer className="text-center pb-3 text-brand-gray">
            <span>Project by</span> {''}
            <a
                className="font-semibold"
                href="https://bigdevsoon.me"
                target="_blank"
                rel="noopener noreferrer"
            >
                BigDevSoon
            </a>
            <span className="px-3">|</span>
            <span>
                Built with ❤️ by {''}
                <a
                    href="https://github.com/aronft"
                    target="_blank"
                    className="font-semibold"
                >
                    @aronft
                </a>
            </span>
        </footer>
    )
}
