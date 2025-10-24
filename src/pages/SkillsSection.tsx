import Badge from "../components/ui/Badge";
import data from "../data/skills.json"

const SkillsSection = () => {

    return (
        <section>
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2>Skills</h2>
                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-4 lg:grid-rows-3 lg:h-[600px]">
                    <div id="container-frontend" className="relative lg:row-span-2 lg:col-start-1 lg:row-start-1">
                        <div className="absolute inset-px rounded-lg bg-base lg:rounded-l-2xl" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(1rem+1px)]">
                            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                <h3 className="text-lg font-semibold mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {data.skills.frontend.map(
                                        skill => <Badge key={skill} skill={skill} />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-contrast lg:rounded-l-2xl" />
                    </div>

                    <div id="container-fullstack" className="relative lg:col-start-2 lg:row-start-1">
                        <div className="absolute inset-px rounded-lg bg-base" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                <h3 className="text-lg font-semibold mb-4">Fullstack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {data.skills.fullstack.map(
                                        skill => <Badge key={skill} skill={skill} />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-contrast" />
                    </div>

                    <div id="container-ux" className="relative lg:col-start-3 lg:row-start-1">
                        <div className="absolute inset-px rounded-lg bg-base" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                <h3 className="text-lg font-semibold mb-4">UX/UI</h3>
                                <div className="flex flex-wrap gap-2">
                                    {data.skills.ux.map(
                                        skill => <Badge key={skill} skill={skill} />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-contrast" />
                    </div>

                    <div id="container-tools" className="relative lg:row-span-2 lg:col-start-4 lg:row-start-1">
                        <div className="absolute inset-px rounded-lg bg-base lg:rounded-r-2xl" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-r-[calc(1rem+1px)]">
                            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                <h3 className="text-lg font-semibold mb-4">Tools</h3>
                                <div className="flex flex-wrap gap-2">
                                    {data.skills.tools.map(
                                        skill => <Badge key={skill} skill={skill} />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-contrast lg:rounded-r-2xl" />
                    </div>

                    <div id="container-softskills" className="relative lg:col-span-2 lg:col-start-2 lg:row-start-2">
                        <div className="absolute inset-px rounded-lg bg-base lg:rounded-b-2xl" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-b-[calc(1rem+1px)]">
                            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                <h3 className="text-lg font-semibold mb-4">Soft Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {data.skills.softskills.map(
                                        skill => <Badge key={skill} skill={skill} />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-contrast lg:rounded-b-2xl" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default SkillsSection;