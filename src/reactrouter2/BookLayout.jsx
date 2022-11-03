import { Link } from "react-router-dom";
import './SecondRouter.css';

function BookLayout(){
    return (
        <div>
            <ol>
                <li><Link to="/books/1">Book1</Link></li>
                <li><Link to="/books/2">Book2</Link></li>
                <li><Link to="/books/3">Book3</Link></li>
                <li><Link to="/books/new">new Book</Link></li>
            </ol>
        </div>
    )
}

export default BookLayout;