import Badge from './Badge';
import MainButton from './Button';
import type { Experience } from '../../types/types';

interface ExperienceCardProps {
    data: Experience;
}

const ExperienceCard = ({ data }: ExperienceCardProps) => {
    return (
        <div className="bg-contrast/20 border border-contrast/40 rounded-lg p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 backdrop-blur-sm">
            <div className="mb-4">
                <h3 className="text-xl font-semibold text-light mb-1">{data.title}</h3>
                <h4 className="text-lg text-primary font-medium mb-2">{data.company}</h4>
                <div className="flex items-center gap-2 text-sm text-light-muted">
                    <span>{data.from}</span>
                    <span>→</span>
                    <span>{data.to}</span>
                </div>
            </div>

            <p className="text-light text-sm leading-relaxed mb-4 text-left">
                {data.description}
            </p>

            <div className="mb-4">
                <h5 className="text-sm font-medium text-light mb-2">Tech Stack</h5>
                <div className="flex flex-wrap gap-2">
                    {data.techStack.map(tech => (
                        <Badge key={tech} skill={tech} />
                    ))}
                </div>
            </div>

            <div className="mb-6">
                <h5 className="text-sm font-medium text-light mb-2">Skills</h5>
                <div className="flex flex-wrap gap-2">
                    {data.skills.map(skill => (
                        <span
                            key={skill}
                            className="inline-block bg-primary/10 border border-primary/30 text-primary text-xs font-medium px-2 py-1 rounded-full hover:bg-primary/20 transition-all duration-300"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex gap-3">
                {data.links.demo && (
                    <a href={data.links.demo} target="_blank" rel="noopener noreferrer">
                        <MainButton variant='primary' size='sm'>
                            View Project
                        </MainButton>
                    </a>
                )}
                {data.links.repo && (
                    <a href={data.links.repo} target="_blank" rel="noopener noreferrer">
                        <MainButton variant='secondary' size='sm'>
                            Repository
                        </MainButton>
                    </a>
                )}
            </div>
        </div>
    );
};

export default ExperienceCard;