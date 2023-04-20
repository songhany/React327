// import Counter from "./components/Counter";

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>

        {/* <Counter /> */}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<HelloMessage />);
