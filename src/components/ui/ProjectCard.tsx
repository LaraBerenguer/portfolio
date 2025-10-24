import React from 'react';
import Badge from './Badge';
import MainButton from './Button';
import type { Project } from '../../types/types';

interface CardProps {
    data: Project;
};

const ProjectCard: React.FC<CardProps> = ({
    data: {
        img,
        title,
        description,
        techs,
        links }
}) => {

    return (
        <section className='flex gap-x-8'>
            <div id='card-left max-w-sm rounded-lg overflow-hidden'>
                <img src={img} className='rounded-lg w-100 '></img>
            </div>
            <div id='card-right' className='flex flex-col w-full items-start gap-3'>
                <h3>{title}</h3>
                <span className='flex flex-wrap'>
                    {techs.map(tech =>
                        <Badge key={tech} skill={tech} />
                    )}
                </span>
                <section className='text-start text-sm'>
                    {description}
                </section>
                <section className='card-buttons flex gap-4'>
                    <a href={links.demo} target="_blank" rel="noopener noreferrer">
                        <MainButton variant='primary' children={'Visit the site'} />
                    </a>
                    <a href={links.repo} target="_blank" rel="noopener noreferrer">
                        <MainButton variant='secondary' children={'Repository'} />
                    </a>
                </section>
            </div>
        </section>
    );
};

export default ProjectCard;