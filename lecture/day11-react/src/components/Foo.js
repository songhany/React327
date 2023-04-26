export default function foo(props) {
  const {name, age, canDrink, friends} = props;
  // console.log(name, age);

  return (
    <div>
      <div>Foo 1</div>
      <div>Person: {name}</div>
      <div>Age: {age}</div>
      <div>canDrink: {canDrink}</div>
      <div>friends: {friends.name}</div>
    </div>
  );
}

export const a = "a";