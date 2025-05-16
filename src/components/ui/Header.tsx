
import { LinkPreview } from "@/components/ui/LinkPreview";

export function Header() {
    return (
        <>
        <div className="max-w-7xl pt-40 px-4 md:px-8 lg:px-10 z-40">
            <section className="mt-10">
                <h2 className="text-xl tracking-normal font-light mb-2 text-slate-700 dark:text-slate-100 max-w-xl">
                    Zaire Allen
                </h2>
                <div className="flex flex-col gap-2">
                    <h1 className="text-slate-500 dark:text-slate-100 font-light text-3xl max-w-4xl pb-4">
                        New York based Design Engineer. <br />
                        Growth-driven. I build and like sales & marketing.
                    </h1>
                </div>
            </section>

            <section className="mt-10">
                <h2 className="text-xl tracking-normal font-light mb-2 text-slate-700 dark:text-slate-100 max-w-xl">
                    Current
                </h2>
                <h1 className="text-slate-500 dark:text-slate-100 font-light text-3xl max-w-4xl pb-4">
                    Sales & Marketing on {" "}

                    <LinkPreview 
                    url="https://www.waypointdaily.com" 
                    imageSrc="src/assets/WaypointMeta.webp" 
                    isStatic>Waypoint</LinkPreview>.
                </h1>
                <h1 className="text-slate-500 dark:text-slate-100 font-light text-3xl max-w-4xl pb-4">
                    Designer & Growth Consultant {" "}

                    <LinkPreview 
                    url="https://www.bs-devshop.com/" 
                    imageSrc="src/assets/BS Devshop.webp" 
                    isStatic>BS Devshop</LinkPreview>.
                </h1>
            </section>

            <section className="mt-10">
                <h2 className="text-xl tracking-normal font-light mb-2 text-slate-700 dark:text-slate-100 max-w-xl">
                    Worked with
                </h2>
                <h1 className="text-slate-500 dark:text-slate-100 font-light text-3xl max-w-4xl pb-4">
                    Google, Domino's, SailGP, Think Money Group, and more.
                </h1>
            </section>

            <section className="mt-10">
                <h2 className="text-xl tracking-normal font-light mb-2 text-slate-700 dark:text-slate-100 max-w-xl">
                    Featured
                </h2>
                <h1 className="text-slate-500 dark:text-slate-100 font-light text-3xl max-w-4xl pb-4">
                    <LinkPreview 
                        url="https://www.businessinsider.com/ux-designer-love-circular-tips-breaking-into-tech-2021-8" 
                        imageSrc="src/assets/Zaire Allen Business Insider.webp" 
                        isStatic>Business Insider
                    </LinkPreview>

                    {", "}

                    <LinkPreview 
                        url="https://www.waypointdaily.com" 
                        imageSrc="src/assets/Pipe Zaire.webp" 
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
                <h1 className="text-slate-500 dark:text-slate-100 font-light text-3xl max-w-4xl pb-4">
                    <LinkPreview 
                    url="https://www.sd-ldf.com/programme-2020" 
                    imageSrc="src/assets/SDFF.webp" 
                    isStatic>Service Design Fringe Festival</LinkPreview>.
                </h1>
            </section>

            <section className="mt-10">
                <h2 className="text-xl tracking-normal font-light mb-2 text-slate-700 dark:text-slate-100 max-w-xl">
                    Podcasts
                </h2>
                <h1 className="text-slate-500 dark:text-slate-100 font-light text-3xl max-w-4xl pb-4">
                    <LinkPreview 
                    url="https://www.thisishcd.com/episode/zaire-allen-changing-the-face-of-design#transcript" 
                    imageSrc="src/assets/ThisIsHCD.webp" 
                    isStatic>This is Human Centered Design</LinkPreview>.
                </h1>
            </section>
        </div>
      </>
    )
}