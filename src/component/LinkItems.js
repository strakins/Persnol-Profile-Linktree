import ItemDisplay from "./ItemDisplay"


function LinkItems() {
    return ( 
        <div>
            <ItemDisplay>
                <a href="https://twitter.com/straksman" target="_blank" rel="noreferrer">Twitter Link</a>
            </ItemDisplay>
            <ItemDisplay>
                <a href="twi" target="_blank" rel="noreferrer" id="">Zuri Team</a>
            </ItemDisplay>
            <ItemDisplay>
                <a href="http://books.zuri.team " target="_blank" rel="noreferrer">Zuri Books</a>
            </ItemDisplay>
            <ItemDisplay>
                <a href="https://books.zuri.team" target="_blank" rel="noreferrer">Python Books</a>
            </ItemDisplay>
            <ItemDisplay>
                <a href="https://background.zuri.team" target="_blank" rel="noreferrer">Background Check for Coders</a>
            </ItemDisplay>
            <ItemDisplay>
                <a href="https://books.zuri.team/design-rules" target="_blank" rel="noreferrer">Design Books</a>
            </ItemDisplay>
        </div>
    )
}

export default LinkItems;