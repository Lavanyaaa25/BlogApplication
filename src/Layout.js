import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({ search, setSearch,width }) => {
    return (
        <div className="App">
            <Header title="React JS Blog" width={width} />
            <Nav search={search} setSearch={setSearch} />
            <Outlet />
            {/* used within the parent route element to indicate where a child route element should be rendered. */}
            <Footer />
        </div>
    )
}

export default Layout