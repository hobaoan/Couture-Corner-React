import "./sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Color/Colors";
function Sidebar() {
    return <>
        <section className="sidebar">
            <div className="logo-container">
                <h1>🛒</h1>
            </div>
            <Category />
            <Price />
            <Colors />
        </section>
    </>
}
export default Sidebar;