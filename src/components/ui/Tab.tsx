import React from 'react';
import type { Category } from '../../types/types';

interface TabProps {
    tab: Category;
    activeTab: boolean;
    onClick?: () => void;
}

const Tab: React.FC<TabProps> = ({
    tab,
    activeTab,
    onClick
}) => {
    const count = tab.projects.length;
    return (
        <button
            key={tab.id}
            onClick={onClick}
            className={`
                relative px-6 py-3 rounded-full text-sm font-medium 
                transition-all duration-300 ease-out
                transform hover:scale-105 active:scale-95
                focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-base
                ${activeTab
                    ? `bg-gradient-to-br from-primary to-pink-500 
                        hover:from-primary-dark hover:to-pink-600 
                        text-white shadow-lg hover:shadow-xl hover:shadow-primary/25
                        border border-primary/30`
                    : `bg-gradient-to-br from-contrast/40 to-contrast/20 
                        hover:from-contrast/60 hover:to-contrast/40
                        text-light hover:text-white 
                        shadow-md hover:shadow-lg hover:shadow-contrast/20
                        border border-contrast/20 hover:border-contrast/40
                        backdrop-blur-sm`
                }
            `}
        >
            <span className="relative z-10 capitalize">
                {tab.category}
                {count !== undefined && (
                    <span className={`
                        ml-2 px-2 py-1 rounded-full text-xs 
                        transition-all duration-300 ease-out
                        ${activeTab
                            ? 'bg-white/20 text-white'
                            : 'bg-light/10 text-light-muted'
                        }
                    `}>
                        {count}
                    </span>
                )}
            </span>

            <div className={`
                absolute inset-0 rounded-full opacity-0 
                transition-opacity duration-300 ease-out
                hover:opacity-100
                ${activeTab
                    ? 'bg-gradient-to-br from-white/10 to-white/5'
                    : 'bg-gradient-to-br from-primary/10 to-pink-500/10'
                }
            `} />
        </button>
    );
};

export default Tab;