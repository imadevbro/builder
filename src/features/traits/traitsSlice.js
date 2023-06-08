import { createSlice } from "@reduxjs/toolkit";

export const traitsSlice = createSlice({
    name: 'traits',
    initialState: {
        traits: {
            male: {
                background: {
                    "Eight": {
                        name: "Eight",
                        url: '/images/Traits/Male/Background/Eight.png'
                    },
                    "Eleven": {
                        name: "Eleven",
                        url: '/images/Traits/Male/Background/Eleven.png'
                    },
                    "Fifteen": {
                        name: "Fifteen",
                        url: '/images/Traits/Male/Background/Fifteen.png'
                    }
                },
                aura: {
                    "Azurite": {
                        name: "Azurite",
                        url: '/images/Traits/Male/Aura/Azurite.png'
                    },
                    "Crimson": {
                        name: "Crimson",
                        url: '/images/Traits/Male/Aura/Crimson.png'
                    },
                    "Lava": {
                        name: "Lava",
                        url: '/images/Traits/Male/Aura/Lava.png'
                    }
                },
                base: {
                    "Demon": {
                        name: "Demon",
                        url: '/images/Traits/Male/Base/Demon.png'
                    },
                    "Glass": {
                        name: "Glass",
                        url: '/images/Traits/Male/Base/Glass.png'
                    },
                    "Pale": {
                        name: "Pale",
                        url: '/images/Traits/Male/Base/Pale.png'
                    }
                },
                clothes: {
                    "Fur Coat": {
                        name: "Fur Coat",
                        url: '/images/Traits/Male/Clothes/Fur Coat.png'
                    },
                    "Peaky": {
                        name: "Peaky",
                        url: '/images/Traits/Male/Clothes/Peaky.png'
                    },
                    "None": {
                        name: "None",
                        url: '/images/Traits/Male/Clothes/None.png'
                    }
                },
                chain: {
                    "None": {
                        name: "None",
                        url: '/images/Traits/Male/Chain/None.png'
                    },
                    "Sultan": {
                        name: "Sultan",
                        url: '/images/Traits/Male/Chain/Sultan.png'
                    },
                    "Dog Tags": {
                        name: "Dog Tags",
                        url: '/images/Traits/Male/Chain/Dog Tags.png'
                    }
                },
                head: {
                    "Dracula": {
                        name: "Dracula",
                        url: '/images/Traits/Male/Head/Dracula.png'
                    },
                    "Crown": {
                        name: "Crown",
                        url: '/images/Traits/Male/Head/Crown.png'
                    },
                    "XXX": {
                        name: "XXX",
                        url: '/images/Traits/Male/Head/XXX.png'
                    }
                },
                eyes: {
                    "Rinnegan": {
                        name: "Rinnegan",
                        url: '/images/Traits/Male/Eyes/Rinnegan.png'
                    },
                    "Wide Eye": {
                        name: "Wide Eye",
                        url: '/images/Traits/Male/Eyes/Wide Eye.png'
                    },
                    "Bored Gaze": {
                        name: "Bored Gaze",
                        url: '/images/Traits/Male/Eyes/Bored Gaze.png'
                    }
                },
                mouth: {
                    "Beard": {
                        name: "Beard",
                        url: '/images/Traits/Male/Mouth/Beard.png'
                    },
                    "Grin": {
                        name: "Grin",
                        url: '/images/Traits/Male/Mouth/Grin.png'
                    },
                    "Golden Blind": {
                        name: "Golden Blind",
                        url: '/images/Traits/Male/Mouth/Golden Blind.png'
                    }
                }     
            },
            female: {
                background: {
                    "Black": {
                        name: "Black",
                        url: '/images/Traits/Female/Background/Black.png'
                    },
                    "Red": {
                        name: "Red",
                        url: '/images/Traits/Female/Background/Red.png'
                    },
                    "Deep Purple": {
                        name: "Deep Purple",
                        url: '/images/Traits/Female/Background/Deep Purple.png'
                    }
                },
                aura: {
                    "Azurite": {
                        name: "Azurite",
                        url: '/images/Traits/Female/Aura/Azurite.png'
                    },
                    "Crimson": {
                        name: "Crimson",
                        url: '/images/Traits/Female/Aura/Crimson.png'
                    },
                    "Lava": {
                        name: "Lava",
                        url: '/images/Traits/Female/Aura/Lava.png'
                    }
                },
                base: {
                    "Demon": {
                        name: "Demon",
                        url: '/images/Traits/Female/Base/Demon.png'
                    },
                    "Glass": {
                        name: "Glass",
                        url: '/images/Traits/Female/Base/Glass.png'
                    },
                    "Pale": {
                        name: "Pale",
                        url: '/images/Traits/Female/Base/Pale.png'
                    }
                },
                clothes: {
                    "Mink Coat": {
                        name: "Mink Coat",
                        url: '/images/Traits/Female/Clothes/Mink Coat.png'
                    },
                    "Nurse": {
                        name: "Nurse",
                        url: '/images/Traits/Female/Clothes/Nurse.png'
                    },
                    "Quinn Jacket": {
                        name: "Quinn Jacket",
                        url: '/images/Traits/Female/Clothes/Quinn Jacket.png'
                    }
                },
                chain: {
                    "None": {
                        name: "None",
                        url: '/images/Traits/Female/Chain/None.png'
                    },
                    "LV Bling Chain": {
                        name: "LV Bling Chain",
                        url: '/images/Traits/Female/Chain/LV Bling Chain.png'
                    },
                    "Pearl Necklace": {
                        name: "Pearl Necklace",
                        url: '/images/Traits/Female/Chain/Pearl Necklace.png'
                    }
                },
                head: {
                    "Divine Blone": {
                        name: "Divine Blonde",
                        url: '/images/Traits/Female/Head/Divine Blonde.png'
                    },
                    "Harley Ponytail": {
                        name: "Harley Ponytail",
                        url: '/images/Traits/Female/Head/Harley Ponytail.png'
                    },
                    "Long Jet Black": {
                        name: "Long Jet Black",
                        url: '/images/Traits/Female/Head/Long Jet Black.png'
                    }
                },
                eyes: {
                    "Fiery Crimson": {
                        name: "Fiery Crimson",
                        url: '/images/Traits/Female/Eyes/Fiery Crimson.png'
                    },
                    "Wide Eye": {
                        name: "Wide Eye",
                        url: '/images/Traits/Female/Eyes/Wide Eye.png'
                    },
                    "Wink": {
                        name: "Wink",
                        url: '/images/Traits/Female/Eyes/Wink.png'
                    }
                },
                mouth: {
                    "Bite Knife": {
                        name: "Bite Knife",
                        url: '/images/Traits/Female/Mouth/Bite Knife.png'
                    },
                    "Black Lips": {
                        name: "Black Lips",
                        url: '/images/Traits/Female/Mouth/Black Lips.png'
                    },
                    "Tongue Out": {
                        name: "Tongue Out",
                        url: '/images/Traits/Female/Mouth/Tongue Out.png'
                    }
                } 
            }
        }
    }
});

export const selectTraits = (state) => state.traits.traits;
export default traitsSlice.reducer;