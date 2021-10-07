// Core
import React, { useState, useEffect } from 'react';

// Components
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

type TPhoto = {
    id: number,
    tags: string,
    webformatURL: string,
}

export default function MasonryImageList() {
    const [ photos, setPhotos ] = useState<TPhoto[] | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('https://pixabay.com/api/?key=23735375-7fe9fcfcb7f7def7d3b0c5c4b&safesearch=true&image_type=photo&pretty=true&orientation=vertical&per_page=50');
                const data = await response.json();
                console.log(data.hits);
                setPhotos(data.hits);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    if (photos === null) {
        return null;
    }

    return (
        <Box sx = {{ width: 1000, height: '100vh', overflowY: 'scroll', margin: '0 auto' }}>
            <ImageList
                cols = { 3 }
                gap = { 8 }
                variant = 'masonry'>
                {photos.map((item) => (
                    <ImageListItem key = { item.id }>
                        <img
                            alt = { item.tags }
                            loading = 'eager'
                            src = { item.webformatURL }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}
