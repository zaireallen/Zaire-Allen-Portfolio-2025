import { workData } from '@/lib/data/work'
import { ImageZoom } from './kibo-ui/ImageZoom'

function Work() {
    return (
        <div className="w-full md:pt-16 lg:pt-32 pb-6 px-2 md:px-8 lg:px-6">
            <section className="mt-10">
                {/* Grid of work items */}
                <div className="flex flex-col gap-6">
                    {[...workData].sort((a, b) => b.id - a.id).map((work) => (
                        <div key={work.id} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {work.images && work.images[0] && (
                                <div className="aspect-[4/3] rounded-xl border border-slate-200 dark:border-neutral-700 dark:bg-white overflow-hidden flex justify-center items-center">
                                    <ImageZoom>
                                        <img 
                                            src={work.images[0].src}
                                            alt={work.title}
                                            className="object-cover object-center w-full h-full transition-transform duration-300 hover:scale-102"
                                        style={
                                            work.images[0].objectPosition 
                                                ? { objectPosition: work.images[0].objectPosition } 
                                                : undefined
                                        }
                                        />
                                    </ImageZoom>
                                </div>
                            )}
                            {work.images && work.images[1] && (
                                <div className="aspect-[4/3] rounded-xl border border-slate-200 dark:border-neutral-700 dark:bg-white overflow-hidden flex justify-center items-center">
                                    <ImageZoom>
                                        <img 
                                            src={work.images[1].src}
                                            alt={work.title}
                                            className="object-cover object-center w-full h-full transition-transform duration-300 hover:scale-102"
                                        style={
                                            work.images[1].objectPosition 
                                                ? { objectPosition: work.images[1].objectPosition } 
                                                : undefined
                                        }
                                        />
                                    </ImageZoom>    
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Work