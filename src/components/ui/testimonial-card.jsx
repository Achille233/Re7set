import { cn } from "../../utils/cn"
import { Avatar, AvatarImage } from "./avatar"

export function TestimonialCard({
    author,
    text,
    href,
    className
}) {
    const Card = href ? 'a' : 'div'

    return (
        <Card
            {...(href ? { href } : {})}
            className={cn(
                "flex flex-col rounded-[2rem] border border-black/5 bg-white",
                "p-6 sm:p-8 text-start",
                "shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]",
                "hover:border-primary/10 hover:-translate-y-2",
                "max-w-[340px] sm:max-w-[340px] shrink-0",
                "transition-all duration-500 cursor-pointer",
                className
            )}
        >
            <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 border border-black/5">
                    <AvatarImage src={author.avatar} alt={author.name} />
                </Avatar>
                <div className="flex flex-col items-start">
                    <h3 className="text-base font-sans font-medium text-foreground leading-none mb-1.5">
                        {author.name}
                    </h3>
                    <p className="text-[10px] font-mono tracking-widest uppercase text-primary">
                        {author.handle}
                    </p>
                </div>
            </div>
            <p className="mt-6 text-sm font-sans text-muted leading-relaxed">
                "{text}"
            </p>
        </Card>
    )
}
