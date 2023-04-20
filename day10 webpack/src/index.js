import Counter from "./components/Counter";

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <div>
          <h2>Hello Songhan Yu</h2>
          <p>Start editing to see some magic happen :)</p>
        </div>
        <Counter />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<HelloMessage />);


import { sum } from "./util/math";
console.log(sum(1, 2));
