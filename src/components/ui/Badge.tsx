interface BadgeProps {
    skill: string;
}

const Badge = ({ skill }: BadgeProps) => (
    <span
        className="inline-block bg-contrast border border-contrast text-light text-xs font-medium px-2 py-1 rounded-full mr-2 mb-1 hover:border-light-muted transition-all duration-300"
        role="listitem"
        aria-label={`Technology: ${skill}`}
    >
        {skill}
    </span>
)

export default Badge;