import { createSlice } from "@reduxjs/toolkit";

const maleInitialState = {
    layeredImage: {
        background: {
            name: 'Eleven',
            url: '/images/Traits/Male/Background/Eleven.png'
        },
        aura: {
            name: 'Crimson',
            url: '/images/Traits/Male/Aura/Crimson.png'
        },
        base: {
            name: 'Grey',
            url: '/images/Traits/Male/Base/Grey.png'
        },
        clothes: {
            name: 'Fur Coat',
            url: '/images/Traits/Male/Clothes/Fur Coat.png'
        },
        chain: {
            name: 'Sultan',
            url: '/images/Traits/Male/Chain/Sultan.png'
        },
        head: {
            name: 'Crown',
            url: '/images/Traits/Male/Head/Crown.png'
        },
        eyes: {
            name: 'Rinnegan',
            url: '/images/Traits/Male/Eyes/Rinnegan.png'
        },
        mouth: {
            name: 'Beard',
            url: '/images/Traits/Male/Mouth/Beard.png'
        }
    }
}

const femaleInitialState = {
    layeredImage: {
        background: {
            name: 'Black',
            url: '/images/Traits/Female/Background/Black.png'
        },
        aura: {
            name: 'Crimson',
            url: '/images/Traits/Female/Aura/Crimson.png'
        },
        base: {
            name: 'Pale',
            url: '/images/Traits/Female/Base/Pale.png'
        },
        clothes: {
            name: 'Mink Coat',
            url: '/images/Traits/Female/Clothes/Mink Coat.png'
        },
        chain: {
            name: 'LV Bling Chain',
            url: '/images/Traits/Female/Chain/LV Bling Chain.png'
        },
        head: {
            name: 'Divine Blonde',
            url: '/images/Traits/Female/Head/Divine Blonde.png'
        },
        eyes: {
            name: 'Wide Eye',
            url: '/images/Traits/Female/Eyes/Wide Eye.png'
        },
        mouth: {
            name: 'Bite Knife',
            url: '/images/Traits/Female/Mouth/Bite Knife.png'
        }
    }
}

const layeredImageSlice = createSlice({
    name: 'layeredImage',
    initialState: maleInitialState,
    reducers: {
        // changeLayer payload example: {category: mouth, name: Beard, url: /images/Traits/Mouth/Beard.png}
        changeLayer: (state, action) => {
            state.layeredImage[action.payload.category] = action.payload;
        },
        changeSex: (state, action) => {
            console.log("Payload: ", action.payload);
            state.layeredImage = (action.payload.sex === 'female') ? {...femaleInitialState.layeredImage} : {...maleInitialState.layeredImage};
        },
        changeAllLayers: (state, action) => {
            state.layeredImage = action.payload;
        }
    }
});




export const { changeLayer, changeSex, changeAllLayers } = layeredImageSlice.actions
export const selectLayeredImage = (state) => state.layeredImage.layeredImage;
export default layeredImageSlice.reducer;

