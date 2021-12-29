const BoardItem = ({num}) => {
    return (
        <div style={{backgroundColor: "rgb(225, 239, 216)", height: "100%", display: "grid"}}>
            <span className="boardItem">{num}</span>
        </div>
    )
}

export default BoardItem;