function App() {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  const [count, setCount] = React.useState(0);
  React.useEffect(function () {
    setInterval(function () {
      setTime(new Date().toLocaleTimeString());
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return React.createElement(
    "div",
    { className: "container" },
    React.createElement("h1", null, "Live Counter"),
    React.createElement("p", null, `It's: ${time}`),
    React.createElement("p", null, `The value of the increment: ${count}`)
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
