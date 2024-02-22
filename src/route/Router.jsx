
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../Home';
import { Page1 } from '../Page1';
import { Page1DetailA } from '../Page1DetailA';
import { Page1DetailB } from '../Page1DetailB';
import { Page2 } from '../Page2';
import { NoMatch } from '../NoMatch';
import { page1Routes } from './Page1Routes';

export const Router = () =>{
    return(
    // <BrowserRouter>

        <Routes>
            <Route path="/" element={<Home />}/>
            {page1Routes.map((route)=>{
                return(
                    <Route
                    key={route.path}
                    path={route.path}
                    element={route.children}
                    >
                </Route>
            )})}


            {/* <Route exact path="/page1" element={<Page1 />}></Route> */}
            {/* <Route exact path = "/page1/detailA" element={<Page1DetailA/>}></Route>
            <Route exact path = "/page1/detailB" element={<Page1DetailB/>}></Route> */}
            <Route path="/page2" element={<Page2 />} />
            <Route path='*' element={<NoMatch/>} />
        </Routes>
    // </BrowserRouter>
    )
}