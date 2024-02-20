import {Link} from 'react-router-dom';

export const Page1 = () => {
    return(
        <div>
            <h1>This is a Page1</h1>
            <br />
            <Link to="/page1/detailA">DetailA</Link>
            <br />
            <Link to="/page1/detailB">DetailB</Link>
        </div>
    );
};