import { useState, useEffect } from 'react';

type ImageCache = { [key: string]: string };

export const useImageImport = (imageName: string): string | null => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    useEffect(() => {
        const importImage = async () => {
            try {
                const imageModule = await import(`../assets/images/projects/${imageName}.webp`);
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

export const useImagesCache = (imageNames: string[]): ImageCache => {
    const [cache, setCache] = useState<ImageCache>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadImages = async () => {
            const imagePromises = imageNames.map(async (name) => {
                try {
                    const imageModule = await import(`../assets/images/projects/${name}.png`);
                    return { name, src: imageModule.default };
                } catch {
                    return { name, src: null };
                }
            });

            const results = await Promise.all(imagePromises);
            const newCache = results.reduce((acc, { name, src }) => {
                if (src) acc[name] = src;
                return acc;
            }, {} as ImageCache);

            setCache(newCache);
            setLoading(false);
        };

        loadImages();
    }, [imageNames.join(',')]);

    return { ...cache, loading } as ImageCache & { loading: boolean };
};