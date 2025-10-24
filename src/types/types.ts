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