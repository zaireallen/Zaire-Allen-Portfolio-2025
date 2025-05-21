import { LinkPreview } from "@/components/ui/LinkPreview";
import { useState } from "react";
import { toast } from "sonner";

export function Header() {
    const [emailCopied, setEmailCopied] = useState(false);
    const [emailHover, setEmailHover] = useState(false);
    const email = "hey@zaireallen.com";

    return (
        <header>
        <div className="w-full max-w-2xl mx-auto md:pt-40 pt-32 md:pb-20 pb-16 px-4 md:px-8 lg:px-10 z-40">
            <section className="mt-10">
                <h2 className="text-xl tracking-normal font-medium mb-2 text-slate-700 dark:text-slate-100 max-w-xl">
                    Experience and Achievements
                </h2>
                <div className="flex flex-col gap-2">
                    <h1 className="text-slate-500 dark:text-slate-100 font-light text-2xl pb-4">
                        New York City–based design engineer.

                        <br /> <br />

                        I build products, and love selling & marketing them.
                        
                        <br /> <br />
                        Left the UK to chase ambitious projects in 2024.

                        <br /> <br />
                        Ran <LinkPreview 
                            href="https://www.linkedin.com/company/lovecircular"
                            target="_blank"
                            rel="noopener noreferrer"
                            url="https://www.linkedin.com/company/lovecircular"
                            imageSrc="/assets/work/LC/lc-logo.png"
                            isStatic>Love Circular</LinkPreview> for six years—a product-design bootcamp that launched tech careers.
                        <br /> <br />

                        Graduates earned $30M in salaries in 2024. Mission accomplished.

                    </h1>
                </div>
            </section>

            <section className="mt-10">
                <h2 className="text-xl tracking-normal font-medium mb-2 text-slate-700 dark:text-slate-100 max-w-xl">
                    Current
                </h2>
                <h1 className="text-slate-500 dark:text-slate-100 font-light text-2xl pb-4">
                    Design Engineer & Marketer at {" "}
                    <LinkPreview 
                        href="https://www.waypointdaily.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        url="https://www.waypointdaily.com" 
                        imageSrc="/assets/work/Waypoint/Waypoint - App - Desktop 1.webp" 
                        isStatic>Waypoint</LinkPreview>
                </h1>
            </section>

            <section className="mt-10">
                <h2 className="text-xl tracking-normal font-medium mb-2 text-slate-700 dark:text-slate-100 max-w-xl">
                    Clients
                </h2>
                <h1 className="text-slate-500 dark:text-slate-100 font-light text-2xl pb-4">
                    Google, Domino's, SailGP, Think Money Group, and more.
                </h1>
            </section>

            <section className="mt-10">
                <h2 className="text-xl tracking-normal font-medium mb-2 text-slate-700 dark:text-slate-100 max-w-xl">
                    Featured
                </h2>
                <h1 className="text-slate-500 dark:text-slate-100 font-light text-2xl pb-4">
                    <LinkPreview 
                        href="https://www.businessinsider.com/ux-designer-love-circular-tips-breaking-into-tech-2021-8"
                        target="_blank"
                        rel="noopener noreferrer"
                        url="https://www.businessinsider.com/ux-designer-love-circular-tips-breaking-into-tech-2021-8" 
                        imageSrc="/assets/ZaireAllenBusinessInsider.webp" 
                        isStatic>Business Insider</LinkPreview>
                    {", "}
                    MouthWash
                    {", "}
                    <LinkPreview 
                        href="https://pipe.com/resources/articles/love-circular-service-case-study"
                        target="_blank"
                        rel="noopener noreferrer"
                        url="https://pipe.com/resources/articles/love-circular-service-case-study" 
                        imageSrc="/assets/timeline/PipeZaire.webp" 
                        isStatic>Pipe</LinkPreview>.
                    
                </h1>
            </section>

            <section className="mt-10">
                <h2 className="text-xl tracking-normal font-medium mb-2 text-slate-700 dark:text-slate-100 max-w-xl">
                    Speaking
                </h2>
                <h1 className="text-slate-500 dark:text-slate-100 font-light text-2xl pb-4">
                    Service Design Fringe Festival.
                </h1>
            </section>

            <section className="mt-10">
                <h2 className="text-xl tracking-normal font-medium mb-2 text-slate-700 dark:text-slate-100 max-w-xl">
                    Podcasts
                </h2>
                <h1 className="text-slate-500 dark:text-slate-100 font-light text-2xl pb-4">
                    <LinkPreview 
                        href="https://www.thisishcd.com/episode/zaire-allen-changing-the-face-of-design#transcript"
                        target="_blank"
                        rel="noopener noreferrer"
                        url="https://www.thisishcd.com/episode/zaire-allen-changing-the-face-of-design#transcript" 
                        imageSrc="/assets/ThisIsHCD.webp" 
                        isStatic>This is Human Centered Design</LinkPreview>
                </h1>
            </section>

            <section className="mt-10">
                <h2 className="text-xl tracking-normal font-medium mb-2 text-slate-700 dark:text-slate-100 max-w-xl">
                    Contact
                </h2>
                <h1 className="text-slate-500 dark:text-slate-100 font-light text-2xl pb-4">
                    <span
                        role="button"
                        tabIndex={0}
                        onMouseEnter={() => setEmailHover(true)}
                        onMouseLeave={() => setEmailHover(false)}
                        onClick={async () => {
                            await navigator.clipboard.writeText(email);
                            setEmailCopied(true);
                            toast.success('Email copied to clipboard!');
                            setTimeout(() => setEmailCopied(false), 2000);
                        }}
                        onKeyDown={async (e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                await navigator.clipboard.writeText(email);
                                setEmailCopied(true);
                                toast.success('Email copied to clipboard!');
                                setTimeout(() => setEmailCopied(false), 2000);
                            }
                        }}
                        className={`transition-colors duration-200 hover:text-rose-600 dark:hover:text-rose-400 hover:underline underline cursor-pointer outline-none ${emailHover ? 'text-rose-600 dark:text-rose-400' : ''}`}
                        aria-label="Copy email to clipboard"
                    >
                        {emailCopied ? 'copied!' : 'Get in touch via email'}
                    </span>
                </h1>
                <h1 className="text-slate-500 dark:text-slate-100 font-light text-2xl pb-4">
                    <a href="https://twitter.com/___zca" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-rose-600 dark:hover:text-rose-400 hover:underline underline">
                        Twitter
                    </a>
                </h1>
            </section>
        </div>
      </header>
    )
}