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
                            {[0, 1].map((imgIdx) => (
                                work.images && work.images[imgIdx] && (
                                    <div key={imgIdx} className="aspect-[4/3] rounded-xl border border-slate-200 dark:border-neutral-700 dark:bg-white overflow-hidden flex justify-center items-center">
                                        {work.url ? (
                                            <a href={work.url} target="_blank" rel="noopener noreferrer" className="w-full h-full">
                                                <img
                                                    src={work.images[imgIdx].src}
                                                    alt={work.title}
                                                    className="object-cover object-center w-full h-full transition-transform duration-300 hover:scale-102 cursor-pointer"
                                                    style={
                                                        work.images[imgIdx].objectPosition
                                                            ? { objectPosition: work.images[imgIdx].objectPosition }
                                                            : undefined
                                                    }
                                                />
                                            </a>
                                        ) : (
                                            <ImageZoom>
                                                <img
                                                    src={work.images[imgIdx].src}
                                                    alt={work.title}
                                                    className="object-cover object-center w-full h-full transition-transform duration-300 hover:scale-102"
                                                    style={
                                                        work.images[imgIdx].objectPosition
                                                            ? { objectPosition: work.images[imgIdx].objectPosition }
                                                            : undefined
                                                    }
                                                />
                                            </ImageZoom>
                                        )}
                                    </div>
                                )
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Work