import './tally.css'

function TallyCounter() {
    return(

        <div class="tally">
        <h1 class="tally-center">Tally Counter </h1>
        
        <div class="counter-div text-align">
            <div>
                <h2 class="counter-count">0</h2>
            </div>
        </div>

        <sl-button variant="danger" class="minus">-</sl-button>
        <sl-button variant="default" class="reset">Reset</sl-button>
        <sl-button variant="success" class="add">+</sl-button>
        
    </div>
    )
}

export default TallyCounter;