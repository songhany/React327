export default function myWait(delay = 1000) {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, delay);
  });
}