import './style.css'

const Checkbox = ({ label, value, key, action }) => {
    const onClick = (checked, callback) => {
        callback(checked, value);
    }

    return <label className="checkbox">
        <input type={"checkbox"} name={key} key={key} value={value} onClick={(e) => onClick(e.target.checked, action)} />
            <span className='label'> - {label}</span>
        </label>
}

export default Checkbox;