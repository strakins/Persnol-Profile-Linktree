import ItemDisplay from "./ItemDisplay"


function LinkItems() {
    return ( 
        <div>
            <ItemDisplay id="twitter">
                <a href="https://twitter.com/straksman" target="_blank" rel="noreferrer" >Twitter Link</a>
            </ItemDisplay>
            <ItemDisplay id="btn__zuri">
                <a href="https://training.zuri.team" target="_blank" rel="noreferrer" id="">Zuri Team</a>
            </ItemDisplay>
            <ItemDisplay id="books">
                <a href="http://books.zuri.team " target="_blank" rel="noreferrer">Zuri Books</a>
            </ItemDisplay>
            <ItemDisplay id="book_python">
                <a href="https://books.zuri.team/python-for-beginners?ref_id=blessingakinola" target="_blank" rel="noreferrer">Python Books</a>
            </ItemDisplay>
            <ItemDisplay id="pitch">
                <a href="https://background.zuri.team" target="_blank" rel="noreferrer">Background Check for Coders</a>
            </ItemDisplay>
            <ItemDisplay id="book_design">
                <a href="https://books.zuri.team/design-rules" target="_blank" rel="noreferrer">Design Books</a>
            </ItemDisplay>
        </div>
    )
}

export default LinkItems;