import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { useSelector, useDispatch } from 'react-redux';
import { selectTraits } from './traitsSlice';
import { changeLayer, changeSex, changeAllLayers, selectLayeredImage } from '../layeredImage/layeredImageSlice';
import styles from './Traits.module.css';

export function Traits() {
    const dispatch = useDispatch();

    const allTraits = useSelector(selectTraits);
    const layeredImage = useSelector(selectLayeredImage);
    console.log("Layered Image: ", layeredImage);

    const [sex, setSex] = useState("male");

    const handleChangeTrait = (e) => {
        e.preventDefault();
        const category = e.target.id;
        const name = e.target.value;
        const url = allTraits[sex][category][name].url;
        dispatch(changeLayer({category: category, name: name, url: url}));
        console.log(e.target.value);
        console.log(allTraits[sex][category][name]);
    }

    const handleChangeSex = (newSex) => {
        setSex(newSex);
        dispatch(changeSex({sex: newSex}));
    }

    const handleClickShuffleAll = () => {
        const shuffledLayers = Object.keys(allTraits[sex]).reduce((acc, category) => {
          const randomTraitIndex = Math.floor(Math.random() * Object.values(allTraits[sex][category]).length);
          const randomTrait = Object.values(allTraits[sex][category])[randomTraitIndex];
          return {
            ...acc,
            [category]: {
              name: randomTrait.name,
              url: randomTrait.url
            }
          };
        }, {});
        dispatch(changeAllLayers(shuffledLayers));
    };

    const traitCategories = Object.keys(allTraits[sex]).map(category => {
        return (
            <Form.Group className={styles.selectOption} key={category}>
                <Form.Label style={{color: 'white'}} >{category.toUpperCase()}</Form.Label>
                <Form.Select className={styles.dropdownMenu} aria-label="Default select example" value={layeredImage[category].name} id={category} onChange={handleChangeTrait} >
                    {Object.values(allTraits[sex][category]).map(traitValue => <option key={`${category}-${traitValue.name}`} value={traitValue.name}>{traitValue.name}</option> )}
                </Form.Select>
            </Form.Group>
        );
    });

    return (
        <Form className={styles.formGroup}>
            <ToggleButtonGroup type="radio" name="sex" value={sex} onChange={handleChangeSex}>
                <ToggleButton id="male" value="male" variant="danger">
                    Male
                </ToggleButton>
                <ToggleButton id="female" value="female" variant="danger">
                    Female
                </ToggleButton>
            </ToggleButtonGroup>
            {traitCategories}
            <Button variant="danger" onClick={handleClickShuffleAll}>Shuffle All</Button>
        </Form>
    );
}

