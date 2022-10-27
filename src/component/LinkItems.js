import ItemDisplay from "./ItemDisplay"


function LinkItems() {
    return ( 
        <div>
            <ItemDisplay id="twitter">
                <a href="https://twitter.com/straksman" target="_blank" rel="noreferrer" >Twitter Link </a>
            </ItemDisplay>
            <p id="slack" className='hidden'>
                <a href="https://twitter.com/straksman" target="_blank" rel="noreferrer" >blessing_akinola</a>
            </p>
            <ItemDisplay id="btn__zuri">
                <a href="https://training.zuri.team" target="_blank" rel="noreferrer" id="">Zuri Team</a>
            </ItemDisplay>
            <ItemDisplay id="books">
                <a href="http://books.zuri.team " target="_blank" rel="noreferrer">See a  host of Exciting Books you will love!</a>
            </ItemDisplay>
            <ItemDisplay id="book_python">
                <a href="https://books.zuri.team/python-for-beginners" target="_blank" rel="noreferrer">Read Beginner Friendly Python Books</a>
            </ItemDisplay>
            <ItemDisplay id="pitch">
                <a href="https://background.zuri.team" target="_blank" rel="noreferrer">Need Tech Talents? Check Here..</a>
            </ItemDisplay>
            <ItemDisplay id="book_design">
                <a href="https://books.zuri.team/design-rules" target="_blank" rel="noreferrer">Checkout a Host of Design Guide by Zuri Team</a>
            </ItemDisplay>
        </div>
    )
}

export default LinkItems;