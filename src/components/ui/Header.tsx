
import { LinkPreview } from "@/components/ui/LinkPreview";

export function Header() {
    return (
        <>
        <div className="max-w-7xl pt-40 px-4 md:px-8 lg:px-10 z-40">
            <h1 className="text-xl tracking-normal font-light mb-2 text-slate-700 dark:text-slate-100 max-w-xl">
                Zaire Allen
            </h1>
            <div className="flex flex-col gap-2">
                <p className="text-slate-500 dark:text-slate-100 font-light text-3xl max-w-4xl pb-4">
                    New York based design engineer. <br />
                    Growth-driven – I build and like sales & marketing.
                </p>

                <p className="text-slate-500 dark:text-slate-100 font-light text-3xl max-w-4xl py-4">
                    Currently working on {" "}

                    <LinkPreview 
                    url="https://www.waypointdaily.com" 
                    imageSrc="src/assets/WaypointMeta.webp" 
                    isStatic>Waypoint</LinkPreview>.
                </p>

            </div>


        </div>
      </>
    )
}