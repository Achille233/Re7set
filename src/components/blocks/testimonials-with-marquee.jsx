import { cn } from "../../utils/cn"
import { TestimonialCard } from "../ui/testimonial-card"
import "./marquee.css"

export function TestimonialsSection({
    title,
    description,
    testimonials,
    className
}) {
    return (
        <section className={cn(
            "w-full bg-transparent text-foreground",
            "py-32 px-0 overflow-hidden relative",
            className
        )}>
            <div className="mx-auto flex w-full flex-col items-center gap-4 text-center sm:gap-16 relative z-10">
                <div className="flex flex-col items-center gap-4 px-4 sm:gap-8 mb-8 max-w-container">
                    <h2 className="max-w-[720px] text-3xl md:text-4xl font-sans font-medium leading-tight tracking-tight text-foreground">
                        {title}
                    </h2>
                    <p className="max-w-[600px] text-base font-sans text-muted leading-relaxed mt-2">
                        {description}
                    </p>
                </div>

                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden h-full py-4">
                    <div className="group flex overflow-hidden p-4 [--gap:1.5rem] gap-[var(--gap)] [--duration:80s] w-full items-center">
                        {/* First animated row for seamless loop */}
                        <div className="flex shrink-0 justify-around shrink-0 gap-[var(--gap)] min-w-full animate-marquee flex-row group-hover:[animation-play-state:paused]">
                            {[...Array(4)].map((_, setIndex) => (
                                testimonials.map((testimonial, i) => (
                                    <TestimonialCard
                                        key={`set1-${setIndex}-${i}`}
                                        {...testimonial}
                                    />
                                ))
                            ))}
                        </div>
                        {/* Second identical animated row (follows the first to fill the gap) */}
                        <div className="flex shrink-0 justify-around shrink-0 gap-[var(--gap)] min-w-full animate-marquee flex-row group-hover:[animation-play-state:paused]" aria-hidden="true">
                            {[...Array(4)].map((_, setIndex) => (
                                testimonials.map((testimonial, i) => (
                                    <TestimonialCard
                                        key={`set2-${setIndex}-${i}`}
                                        {...testimonial}
                                    />
                                ))
                            ))}
                        </div>
                    </div>

                    <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-background sm:block z-10" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 bg-gradient-to-l from-background sm:block z-10" />
                </div>
            </div>
        </section>
    )
}
