import Badge from './Badge';
import MainButton from './Button';
import type { Project } from '../../types/types';
import { useImageImport } from '../../hooks/useImageImport';

interface ProjectCardProps {
    data: Project;
};

const ProjectCard = ({ data }: ProjectCardProps) => {
    const imgSrc = useImageImport(data.img);

    return (
        <section className='flex gap-x-8'>
            <div id='card-left max-w-sm rounded-lg overflow-hidden'>
                {imgSrc ?
                    (<img src={imgSrc} className='rounded-lg w-5xl'></img>)
                    :
                    (<div className='rounded-lg w-full h-48 bg-contrast/20 flex items-center justify-center'>
                        <span className='text-light-muted'>Loading...</span>
                    </div>)}
            </div>
            <div id='card-right' className='flex flex-col w-full items-start gap-6'>
                <h3>{data.title}</h3>
                <span className='flex flex-wrap'>
                    {data.techs.map(tech =>
                        <Badge key={tech} skill={tech} />
                    )}
                </span>
                <section className='text-start text-sm font-inter'>
                    {data.description}
                </section>
                <section className='card-buttons flex gap-4'>
                    <a href={data.links.demo} target="_blank" rel="noopener noreferrer">
                        <MainButton variant='primary' children={'Visit the site'} />
                    </a>
                    <a href={data.links.repo} target="_blank" rel="noopener noreferrer">
                        <MainButton variant='secondary' children={'Repository'} />
                    </a>
                </section>
            </div>
        </section>
    );
};

export default ProjectCard;