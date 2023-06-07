import { createSlice } from "@reduxjs/toolkit";

const layeredImageSlice = createSlice({
    name: 'layeredImage',
    initialState: {
        layeredImage: {
            background: {
                name: 'Eleven',
                url: '/images/Traits/Background/Eleven.png'
            },
            aura: {
                name: 'Crimson',
                url: '/images/Traits/Aura/Crimson.png'
            },
            base: {
                name: 'Grey',
                url: '/images/Traits/Base/Grey.png'
            },
            clothes: {
                name: 'Peaky',
                url: '/images/Traits/Clothes/Peaky.png'
            },
            chain: {
                name: 'Chain',
                url: '/images/Traits/Chain/Sultan.png'
            },
            head: {
                name: 'Crown',
                url: '/images/Traits/Head/Crown.png'
            },
            eyes: {
                name: 'Rinnegan',
                url: '/images/Traits/Eyes/Rinnegan.png'
            },
            mouth: {
                name: 'Beard',
                url: '/images/Traits/Mouth/Beard.png'
            }
        }
    },
    reducers: {}
});

export const selectLayeredImage = (state) => state.layeredImage.layeredImage;
export default layeredImageSlice.reducer;