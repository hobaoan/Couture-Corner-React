import './Category.css';

function Category() {
    return (
        <div>
            <h2 className='sidebar-title'>Category </h2>
            <div>
                <label className='sidebar-label-container'>
                    <input type="radio" name='test' />
                    <span className='checkmark'></span> All
                </label>
                <label className='sidebar-label-container'>
                    <input type="radio" name='test' />
                    <span className='checkmark'></span> Tops
                </label>
                <label className='sidebar-label-container'>
                    <input type="radio" name='test' />
                    <span className='checkmark'></span> Pants
                </label>
                <label className='sidebar-label-container'>
                    <input type="radio" name='test' />
                    <span className='checkmark'></span> Dresses
                </label>
                <label className='sidebar-label-container'>
                    <input type="radio" name='test' />
                    <span className='checkmark'></span> Swimwear
                </label>
                <label className='sidebar-label-container'>
                    <input type="radio" name='test' />
                    <span className='checkmark'></span> Underwear
                </label>
            </div>
        </div>
    )
}
export default Category;