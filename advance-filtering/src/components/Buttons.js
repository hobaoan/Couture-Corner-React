

const Buttons = ({ onClickHandle, title, value }) => {
    return (
        <button onClick={onClickHandle} value={value} className="btns">
            {title}
        </button>
    );
}
export default Buttons;