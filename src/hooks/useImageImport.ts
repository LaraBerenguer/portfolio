import { useState, useEffect } from 'react';

export const useImageImport = (imageName: string): string | null => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    useEffect(() => {
        const importImage = async () => {
            try {
                const imageModule = await import(`../assets/images/${imageName}.webp`);
                setImageSrc(imageModule.default);
            } catch (error) {
                console.warn(`Image not found: ${imageName}`);
                try {
                    //todo default img
                    //const fallbackModule = await import('../assets/images/placeholder.webp');
                    //setImageSrc(fallbackModule.default);
                } catch {
                    setImageSrc(null);
                }
            }
        };

        if (imageName) {
            importImage();
        }
    }, [imageName]);

    return imageSrc;
};