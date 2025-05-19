import { LinkPreview } from "@/components/ui/LinkPreview";

export function Header() {
    return (
        <header>
        <div className="w-full max-w-2xl mx-auto  md:pt-40 pt-32 px-4 md:px-8 lg:px-10 z-40">
            <section className="mt-10">
                <h2 className="text-xl tracking-normal font-light mb-2 text-slate-700 dark:text-slate-100 max-w-xl">
                    Zaire Allen
                </h2>
                <div className="flex flex-col gap-2">
                    <h1 className="text-slate-500 dark:text-slate-100 font-light text-2xl pb-4">
                        New York City–based design engineer 

                        <br /> <br />

                        I love product, sales & marketing.
                        
                        <br /> <br />
                        Left the UK to chase ambitious projects in 2024.

                        <br /> <br />
                        Ran <a href="https://www.lovecircular.com" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-rose-600 dark:hover:text-rose-400 underline">Love Circular</a> for six years—a product-design bootcamp that launched tech careers.
                        <br /> <br />

                        Graduates earned $30M in graduate salaries in 2024. Mission accomplished.

                    </h1>
                </div>
            </section>

            <section className="mt-10">
                <h2 className="text-xl tracking-normal font-light mb-2 text-slate-700 dark:text-slate-100 max-w-xl">
                    Current
                </h2>
                <h1 className="text-slate-500 dark:text-slate-100 font-light text-2xl pb-4">
                    Product & Growth Marketing at {" "}
                    <LinkPreview 
                        href="https://www.waypointdaily.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        url="https://www.waypointdaily.com" 
                        imageSrc="/assets/work/Waypoint/Waypoint - Marketing Site - Desktop 1.webp" 
                        isStatic>Waypoint</LinkPreview>
                </h1>
            </section>

            <section className="mt-10">
                <h2 className="text-xl tracking-normal font-light mb-2 text-slate-700 dark:text-slate-100 max-w-xl">
                    Clients
                </h2>
                <h1 className="text-slate-500 dark:text-slate-100 font-light text-2xl pb-4">
                    Google, Domino's, SailGP, Think Money Group, and more.
                </h1>
            </section>

            <section className="mt-10">
                <h2 className="text-xl tracking-normal font-light mb-2 text-slate-700 dark:text-slate-100 max-w-xl">
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
                <h2 className="text-xl tracking-normal font-light mb-2 text-slate-700 dark:text-slate-100 max-w-xl">
                    Speaking
                </h2>
                <h1 className="text-slate-500 dark:text-slate-100 font-light text-2xl pb-4">
                    Service Design Fringe Festival.
                </h1>
            </section>

            <section className="mt-10">
                <h2 className="text-xl tracking-normal font-light mb-2 text-slate-700 dark:text-slate-100 max-w-xl">
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
                <h2 className="text-xl tracking-normal font-light mb-2 text-slate-700 dark:text-slate-100 max-w-xl">
                    Contact
                </h2>
                <h1 className="text-slate-500 dark:text-slate-100 font-light text-2xl pb-4">
                    <a href="mailto:hey@zaireallen.com">hey@zaireallen.com</a>
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