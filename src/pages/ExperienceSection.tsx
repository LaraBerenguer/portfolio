import data from "../data/experience.json"

const ExperienceSection = () => {
    return (
        <section>
            <h2>Experience</h2>
            {data.experiences.map(experience =>
                <div key={experience.id}>
                    {experience.title}
                    {experience.company}
                    {experience.description}
                </div>
            )}
        </section>
    )
};

export default ExperienceSection;