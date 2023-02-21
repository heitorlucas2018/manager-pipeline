import './style.css'

const List = ({ data, style }) => {
    
    if ((typeof data) === 'object' && data.length > 0) {
        return <div className="list" style={style}>
            {data}
        </div>    
    }

    return <div />
}

export default List;