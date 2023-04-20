import Counter from "./components/Counter";

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        <h1>hello</h1>
        <div>
          <h1>Hello StackBlitz!</h1>
          <p>Start editing to see some magic happen :)</p>
        </div>
        <Counter />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<HelloMessage />);
