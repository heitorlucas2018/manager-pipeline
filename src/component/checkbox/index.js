import './style.css'

const Checkbox = ({ label, value, key }) => {
    return <label className="checkbox">
            <input type={"checkbox"} key={key} value={value}/>
            <span className='label'> - {label}</span>
        </label>
}

export default Checkbox;