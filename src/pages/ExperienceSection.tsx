import ExperienceCard from "../components/ui/ExperienceCard";
import data from "../data/experience.json"

const ExperienceSection = () => {
    return (
        <section>
            <h2>Experience</h2>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
                {data.experiences.map(experience => (
                    <ExperienceCard key={experience.id} data={experience} />
                ))}
            </div>
        </section>
    )
};

export default ExperienceSection;