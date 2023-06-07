import { createSlice } from "@reduxjs/toolkit";

export const traitsSlice = createSlice({
    name: 'traits',
    initialState: {
        traits: {
            male: {
                background: {
                    "Eight": {
                        name: "Eight",
                        url: '/images/Traits/Background/Eight.png'
                    },
                    "Eleven": {
                        name: "Eleven",
                        url: '/images/Traits/Background/Eleven.png'
                    },
                    "Fifteen": {
                        name: "Fifteen",
                        url: '/images/Traits/Background/Fifteen.png'
                    }
                },
                aura: {
                    "Azurite": {
                        name: "Azurite",
                        url: '/images/Traits/Aura/Azurite.png'
                    },
                    "Crimson": {
                        name: "Crimson",
                        url: '/images/Traits/Aura/Crimson.png'
                    },
                    "Lava": {
                        name: "Lava",
                        url: '/images/Traits/Aura/Lava.png'
                    }
                },
                base: {
                    "Demon": {
                        name: "Demon",
                        url: '/images/Traits/Base/Demon.png'
                    },
                    "Glass": {
                        name: "Glass",
                        url: '/images/Traits/Base/Glass.png'
                    },
                    "Pale": {
                        name: "Pale",
                        url: '/images/Traits/Base/Pale.png'
                    }
                },
                clothes: {
                    "Fur Coat": {
                        name: "Fur Coat",
                        url: '/images/Traits/Clothes/Fur Coat.png'
                    },
                    "Peaky": {
                        name: "Peaky",
                        url: '/images/Traits/Clothes/Peaky.png'
                    },
                    "None": {
                        name: "None",
                        url: '/images/Traits/clothes/None.png'
                    }
                },
                base: {
                    "Demon": {
                        name: "Demon",
                        url: '/images/Traits/Base/Demon.png'
                    },
                    "Glass": {
                        name: "Glass",
                        url: '/images/Traits/Base/Glass.png'
                    },
                    "Pale": {
                        name: "Pale",
                        url: '/images/Traits/Base/Pale.png'
                    }
                },
                chain: {
                    "None": {
                        name: "None",
                        url: '/images/Traits/Chain/None.png'
                    },
                    "Sultan": {
                        name: "Sultan",
                        url: '/images/Traits/Chain/Sultan.png'
                    },
                    "Dog Tags": {
                        name: "Dog Tags",
                        url: '/images/Traits/Chain/Dog Tags.png'
                    }
                },
                head: {
                    "Dracula": {
                        name: "Dracula",
                        url: '/images/Traits/Head/Dracula.png'
                    },
                    "Crown": {
                        name: "Crown",
                        url: '/images/Traits/Head/Crown.png'
                    },
                    "XXX": {
                        name: "XXX",
                        url: '/images/Traits/Head/XXX.png'
                    }
                },
                eyes: {
                    "Rinnegan": {
                        name: "Rinnegan",
                        url: '/images/Traits/Eyes/Rinnegan.png'
                    },
                    "Wide Eye": {
                        name: "Wide Eye",
                        url: '/images/Traits/Eyes/Wide Eye.png'
                    },
                    "Bored Gaze": {
                        name: "Bored Gaze",
                        url: '/images/Traits/Eyes/Bored Gaze.png'
                    }
                },
                mouth: {
                    "Beard": {
                        name: "Beard",
                        url: '/images/Traits/Mouth/Beard.png'
                    },
                    "Grin": {
                        name: "Grin",
                        url: '/images/Traits/Mouth/Grin.png'
                    },
                    "Golden Blind": {
                        name: "Golden Blind",
                        url: '/images/Traits/Mouth/Golden Blind.png'
                    }
                }     
            },
            female: {}
        }
    }
});

export const selectTraits = (state) => state.traits.traits;
export default traitsSlice.reducer;