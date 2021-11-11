
function NumbersTable(props){
    let numArr = []

    for(let i = 1; i <= props.limit; i++) {
        numArr.push(i)
    }
       
    return (
        numArr.map((num) => {
        let color = num % 2 === 0 ? "red" : "white"
        return <div key={num} style={{backgroundColor: `${color}`}} className="square">
            <p>{num}</p>
        </div>
        })
    )
}

export default NumbersTable;