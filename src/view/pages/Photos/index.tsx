// Core
import React, { useState, useEffect } from 'react';

// Components
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

type TPhoto = {
    id: string,
    author: string,
    width: number,
    height: number,
    url: string,
    download_url: string,
}

export default function MasonryImageList() {
    const [ photos, setPhotos ] = useState<TPhoto[] | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('https://picsum.photos/v2/list?limit=30');
                const data = await response.json();
                console.log(data);
                setPhotos(data);
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
                            alt = { item.id }
                            loading = 'eager'
                            src = { item.download_url }
                            width = { 300 }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}
