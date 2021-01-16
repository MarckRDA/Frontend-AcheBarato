import React from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import {SliderStyled} from './sliderstyles.js';
const AfterChange = () => {

    const [value, setValue] = React.useState(50);
    const [finalValue, setFinalValue] = React.useState(null);

    return (
        <>
            <SliderStyled>
                <RangeSlider
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    onAfterChange={e => setFinalValue(e.target.value)}
                />
                <div>Desconto de {finalValue}% </div>
            </SliderStyled>

        </>
    );

};

export default AfterChange;