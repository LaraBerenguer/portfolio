import React from 'react';
import Badge from './Badge';
import MainButton from './Button';

interface CardProps {
    data: {
        img: string;
        title: string;
        description: string;
        techs: string[];
    }
};

const ProjectCard: React.FC<CardProps> = ({
    data: {
        img,
        title,
        description,
        techs }

}) => {

    return (
        <section className='flex gap-x-8'>
            <div id='card-left w-full max-w-sm'>
                <img src={img}></img>
            </div>
            <div id='card-right' className='flex flex-col w-full items-start gap-3'>
                <h3>{title}</h3>
                <span className='flex flex-wrap'>
                    {techs.map(tech =>
                        <Badge key={tech} skill={tech} />
                    )}
                </span>
                <section className='text-start'>
                    {description}
                </section>
                <section className='card-buttons flex gap-4'>
                    <MainButton variant='secondary' children={'Visit the site'} />
                    <MainButton variant='outline' children={'Repository'} />
                </section>
            </div>
        </section>
    );
};

export default ProjectCard;