import './tally.css'
import {useDispatch, useSelector} from '@reduxjs/toolkit'
import { Minus, Add , Reset } from './reduxModules/counterAction'
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './reduxModules/counterReducer';

const store = configureStore({
    reducer: {
        TallyCounter: counterReducer
    }
})

function TallyCounter() {
    const dispatch = useDispatch();
    const tallyCounter = useSelector(state => state.tallyCounter)
    return(
        <div class="tally">
        <h1 class="tally-center">Tally Counter </h1>
        
        <div class="counter-div text-align">
            <div>
                <h2 class="counter-count">${tallyCounter}</h2>
            </div>
        </div>

        <sl-button variant="danger" class="minus" onClick={() => dispatch(Minus())}>-</sl-button>
        <sl-button variant="default" class="reset" onClick={() => dispatch(Reset())}>Reset</sl-button>
        <sl-button variant="success" class="add" onClick={() => dispatch(Add())}>+</sl-button>
        
    </div>
    )
}

export default TallyCounter;