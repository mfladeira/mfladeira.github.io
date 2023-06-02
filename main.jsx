const domContainer = document.querySelector("#root");

const Main = () => {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <h1>Contador: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Clique</button>
        </div>
    );
};
ReactDOM.render(<Main />, domContainer);
