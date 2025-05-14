
import { LinkPreview } from "@/components/ui/LinkPreview";

export function Header() {
    return (
        <>
        <div className="max-w-7xl pt-40 px-4 md:px-8 lg:px-10 z-40">
            <h1 className="font-medium text-xl md:text-4xl mb-2 text-black dark:text-white max-w-xl">
                Zaire Allen
            </h1>
            <div className="flex flex-col gap-2">
                <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-4xl">
                    Hey, I'm Zaire. A growth-minded design engineer.
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-4xl">
                    Currently working on <LinkPreview url="https://www.figma.com">Figma</LinkPreview>.
                </p>
                
                <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-4xl">
                    Currently working on <LinkPreview url="https://www.figma.com">Figma</LinkPreview>.
                </p>

            </div>


        </div>
      </>
    )
}