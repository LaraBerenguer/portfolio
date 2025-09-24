import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: "#242424",      //dark bg
                primary: "#8B5CF6", //purple
                primaryDark: "#5B21B6", //dark purple
                gold: "#FACC15",    //gold accent
                emerald: "#10B981", //green accent
                red: "#EF4444",     //red accent
                text: "#E5E5E5",    //text
                textMuted: "#9CA3AF", //dark text
                constrast: "#374151",  //borders and contrast        
            },
        },
    },
    plugins: [],
}

export default config
