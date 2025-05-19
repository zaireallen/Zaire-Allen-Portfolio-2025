import { DisplayWork } from '@/lib/data/work'

function Work() {
    return (
        <div className="w-full pt-20 px-2 md:px-8 lg:px-6">
            <section className="mt-10">
                
                {/* Grid of work items */}
                <div className="flex flex-col gap-6">
                    {DisplayWork.map((work, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg grid grid-cols-2 gap-4 ">
                            {/* Display only the first image */}
                            {work.images && work.images[0] && (
                                <div className="aspect-[16/9]  overflow-hidden">
                                    <img 
                                        src={work.images[0].src}
                                        alt={work.title}
                                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-102"
                                        style={
                                            work.images[0].objectPosition 
                                                ? { objectPosition: work.images[0].objectPosition } 
                                                : undefined
                                        }
                                    />
                                </div>
                            )}

                            {work.images && work.images[1] && (
                                <div className="aspect-[16/9]  overflow-hidden">
                                    <img 
                                        src={work.images[1].src}
                                        alt={work.title}
                                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-102"
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