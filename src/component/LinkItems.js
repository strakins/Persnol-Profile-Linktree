import ItemDisplay from "./ItemDisplay"


function LinkItems() {
    return ( 
        <div>
            <ItemDisplay id="twitter">
                <a href="https://twitter.com/straksman" target="_blank" rel="noreferrer" >Twitter Link <span className="span-text">Click Here to Find Books about Design and Coding Here </span> </a>
            </ItemDisplay>
            <ItemDisplay id="btn__zuri">
                <a href="https://training.zuri.team" target="_blank" rel="noreferrer" id="">Zuri Team</a>
            </ItemDisplay>
            <ItemDisplay id="books">
                <a href="http://books.zuri.team " target="_blank" rel="noreferrer">Zuri Books</a>
            </ItemDisplay>
            <ItemDisplay id="book_python">
                <a href="https://books.zuri.team/python-for-beginners" target="_blank" rel="noreferrer">Python Books</a>
            </ItemDisplay>
            <ItemDisplay id="pitch">
                <a href="https://background.zuri.team" target="_blank" rel="noreferrer">Background Check for Coders <span className="span-text">Hire Best Developers Here </span></a>
            </ItemDisplay>
            <ItemDisplay id="book_design">
                <a href="https://books.zuri.team/design-rules" target="_blank" rel="noreferrer">Design Books <span className="span-text">Best Design Guides by Zuri</span></a>
            </ItemDisplay>
        </div>
    )
}

export default LinkItems;