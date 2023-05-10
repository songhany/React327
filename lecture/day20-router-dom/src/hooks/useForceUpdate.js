import { useState } from "react";

export default function useForceUpdate() {
  const [bool, toggle] = useState(true);

  function forceUpdate() {
    toggle((prev) => !prev);
    console.log("force update triggered");
  }

  return forceUpdate;
}