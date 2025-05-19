import { LinkPreview } from "@/components/ui/LinkPreview";

export function Header() {
    return (
        <header>
        <div className="max-w-5xl pt-20 px-4 md:px-8 lg:px-10 z-40">
            <section className="mt-10">
                <h2 className="text-xl tracking-normal font-light mb-2 text-slate-700 dark:text-slate-100 max-w-xl">
                    Zaire Allen
                </h2>
                <div className="flex flex-col gap-2">
                    <h1 className="text-slate-500 dark:text-slate-100 font-light text-2xl max-w-4xl pb-4">
                        New York City based Design Engineer. 
                        <br />
                        Love being hands on with product, sales & marketing.
                        <br />
                        Left the UK in 2024 to chase ambitious projects.

                    </h1>
                </div>
            </section>

            <section className="mt-10">
                <h2 className="text-xl tracking-normal font-light mb-2 text-slate-700 dark:text-slate-100 max-w-xl">
                    Current
                </h2>
                <h1 className="text-slate-500 dark:text-slate-100 font-light text-2xl max-w-4xl pb-4">
                    Product & Growth Marketing at {" "}

                    <LinkPreview 
                    url="https://www.waypointdaily.com" 
                    imageSrc="src/assets/WaypointMeta.webp" 
                    isStatic>Waypoint</LinkPreview>.

                    <br />

                    Design & Growth Consultant {" "}

                    <LinkPreview 
                    url="https://www.bs-devshop.com/" 
                    imageSrc="src/assets/BSDevshop.webp" 
                    isStatic>BS Devshop</LinkPreview>.
                </h1>
            </section>

            <section className="mt-10">
                <h2 className="text-xl tracking-normal font-light mb-2 text-slate-700 dark:text-slate-100 max-w-xl">
                    Clients
                </h2>
                <h1 className="text-slate-500 dark:text-slate-100 font-light text-2xl max-w-4xl pb-4">
                    Google, Domino's, SailGP, Think Money Group, and more.
                </h1>
            </section>

            <section className="mt-10">
                <h2 className="text-xl tracking-normal font-light mb-2 text-slate-700 dark:text-slate-100 max-w-xl">
                    Featured
                </h2>
                <h1 className="text-slate-500 dark:text-slate-100 font-light text-2xl max-w-4xl pb-4">
                    <LinkPreview 
                        url="https://www.businessinsider.com/ux-designer-love-circular-tips-breaking-into-tech-2021-8" 
                        imageSrc="src/assets/ZaireAllenBusinessInsider.webp" 
                        isStatic>Business Insider
                    </LinkPreview>

                    {", "}

                    <LinkPreview 
                        url="https://www.waypointdaily.com" 
                        imageSrc="src/assets/PipeZaire.webp" 
                        isStatic>Pipe
                    </LinkPreview>

                    {", "}

                    MouthWash.
                </h1>
            </section>

            <section className="mt-10">
                <h2 className="text-xl tracking-normal font-light mb-2 text-slate-700 dark:text-slate-100 max-w-xl">
                    Speaking
                </h2>
                <h1 className="text-slate-500 dark:text-slate-100 font-light text-2xl max-w-4xl pb-4">
                    Service Design Fringe Festival.
                </h1>
            </section>

            <section className="mt-10">
                <h2 className="text-xl tracking-normal font-light mb-2 text-slate-700 dark:text-slate-100 max-w-xl">
                    Podcasts
                </h2>
                <h1 className="text-slate-500 dark:text-slate-100 font-light text-2xl max-w-4xl pb-4">
                    <LinkPreview 
                    url="https://www.thisishcd.com/episode/zaire-allen-changing-the-face-of-design#transcript" 
                    imageSrc="src/assets/ThisIsHCD.webp" 
                    isStatic>This is Human Centered Design</LinkPreview>.
                </h1>
            </section>

            <section className="mt-10">
                <h2 className="text-xl tracking-normal font-light mb-2 text-slate-700 dark:text-slate-100 max-w-xl">
                    Contact
                </h2>
                <h1 className="text-slate-500 dark:text-slate-100 font-light text-2xl max-w-4xl pb-4">
                    <a href="mailto:hey@zaireallen.com">hey@zaireallen.com</a>
                </h1>
            </section>
        </div>
      </header>
    )
}