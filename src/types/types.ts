export type Project = {
    id: number;
    title: string;
    description: string;
    techs: string[];
    links: {
        demo: string;
        repo: string;
    };
    img: string;
}

export type Category = {
    id: number;
    category: string;
    projects: Project[];
}

export type Experience = {
    id: number;
    title: string;
    company: string;
    description: string;
    from: string;
    to: string;
    techStack: string[];
    skills: string[];
    links: {
        demo: string;
        repo: string;
    };
}