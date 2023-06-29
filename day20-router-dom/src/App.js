import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { MyBrowserRouter, MyLink, MyRoute } from "./my-react-router-dom";
import useForceUpdate from "./hooks/useForceUpdate";

export default function App() {
  const forceUpdate = useForceUpdate();

  // return (
  //   <MyBrowserRouter >
  //     <nav>
  //       <ul>
  //         <li>
  //           <MyLink to="/">Home</MyLink>
  //         </li>
  //         <li>
  //           <MyLink to="/about">About</MyLink>
  //         </li>
  //         <li>
  //           <MyLink to="/users">Users</MyLink>
  //         </li>
  //       </ul>
  //     </nav>
  //     <div>
  //       <MyRoute path="/about">
  //         <About />
  //       </MyRoute>
  //       <MyRoute path="/users">
  //         <Users />
  //       </MyRoute>
  //       <MyRoute path="/">
  //         <Home />
  //       </MyRoute>
  //     </div>
  //   </MyBrowserRouter>
  // );
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users/:id">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  useEffect(() => {
    console.log("renders");
    return () => {
      console.log("component umounts");
    }
  }, [])
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  const params = useParams();
  // console.log(params);  // {id: '1'}
  return <h2>Users</h2>;
}



function A() {
  // if B rerenders, C won't
  // because C is only a children prop of B
  // but not a read child

  // reality is 
  // only if A rerenders C will rerender

  return (
    <B>
      <C />
    </B>
  )
}

function B({ children }) {
  return <div>
    {children}
  </div>
}

function C() {
  return <div>c</div>;
}
