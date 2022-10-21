import './ItemDisplay.css'

const ItemDisplay = (props) => {
    return (
        <p id='list-item'>
            {props.children}
        </p>
    )
}

export default ItemDisplay;