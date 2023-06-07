import React from 'react';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { selectTraits } from './traitsSlice';
import { changeLayer, selectLayeredImage } from '../layeredImage/layeredImageSlice';
import styles from './Traits.module.css';

export function Traits() {
    const dispatch = useDispatch();

    const allTraits = useSelector(selectTraits);
    const layeredImage = useSelector(selectLayeredImage);
    console.log("Layered Image: ", layeredImage);

    const handleChange = (e) => {
        e.preventDefault();
        const category = e.target.id;
        const name = e.target.value;
        const url = allTraits.male[category][name].url;
        dispatch(changeLayer({category: category, name: name, url: url}));
        console.log(e.target.value);
        console.log(allTraits.male[category][name]);
    }


    const traitCategories = Object.keys(allTraits.male).map(category => {
        return (
            <Form.Group className={styles.selectOption} key={category}>
                <Form.Label style={{color: 'white'}} >{category.toUpperCase()}</Form.Label>
                <Form.Select className={styles.dropdownMenu} aria-label="Default select example" value={layeredImage[category].name} id={category} onChange={handleChange} >
                    {Object.values(allTraits.male[category]).map(traitValue => <option key={`${category}-${traitValue.name}`} value={traitValue.name}>{traitValue.name}</option> )}
                </Form.Select>
            </Form.Group>
        );
    });

    return (
        <Form className={styles.formGroup}>
            {traitCategories}
        </Form>
    );
}

