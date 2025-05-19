import { workData } from '@/lib/data/work'

function Work() {
    return (
        <div className=" w-full pt-40 pb-6 px-2 md:px-8 lg:px-6">
            <section className="mt-10">
                {/* Grid of work items */}
                <div className="flex flex-col gap-6">
                    {workData.map((work) => (
                        <div key={work.id} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {work.images && work.images[0] && (
                                <div className="aspect-[16/9] rounded-xl border border-slate-200 dark:border-neutral-700 dark:bg-neutral-900 overflow-hidden">
                                    <img 
                                        src={work.images[0].src}
                                        alt={work.title}
                                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-102"
                                        style={
                                            work.images[0].objectPosition 
                                                ? { objectPosition: work.images[0].objectPosition } 
                                                : undefined
                                        }
                                    />
                                </div>
                            )}
                            {work.images && work.images[1] && (
                                <div className="aspect-[16/9] rounded-xl border border-slate-200 dark:border-neutral-700 dark:bg-neutral-900 overflow-hidden">
                                    <img 
                                        src={work.images[1].src}
                                        alt={work.title}
                                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-102"
                                        style={
                                            work.images[1].objectPosition 
                                                ? { objectPosition: work.images[1].objectPosition } 
                                                : undefined
                                        }
                                    />
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