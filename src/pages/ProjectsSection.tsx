import { useState } from "react";
import Tab from "../components/ui/Tab";
import ProjectCard from "../components/ui/ProjectCard";
import data from "../data/projects.json"

const ProjectsSection = () => {
    const [activeTab, setActiveTab] = useState<string>("projects");

    const getActiveProjects = () => {
        const activeCategory = data.categories.find(category => category.category === activeTab);
        return activeCategory ? activeCategory.projects : [];
    };

    return (
        <section>
            <h2>Projects</h2>
            <div id="tabs" className="flex gap-4 mb-8">
                {data.categories.map(category => (
                    <Tab 
                        key={category.id}
                        tab={category} 
                        activeTab={activeTab === category.category}
                        onClick={() => setActiveTab(category.category)}
                    />
                ))}
            </div>
            <div className="projects-container space-y-8">
                {getActiveProjects().map(project => (
                    <ProjectCard key={project.id} data={project} />
                ))}
            </div>
        </section>
    )
};

export default ProjectsSection;