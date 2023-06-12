import ColorPalette from "./ColorPalette";

function App() {
  return (
    <div className="App">
            <ColorPalette
        title="Green Palette"
        colors={[
          {
            value: "#99E2B4"
          },
          {
            value: "#88D4AB"
          },
          {
            value: "#78C6A3"
          },
          {
            value: "#67B99A"
          },
          {
            value: "#56AB91",
            lightLabel: true
          },
          {
            value: "#469D89",
            lightLabel: true
          },
          {
            value: "#358F80",
            lightLabel: true
          },
          {
            value: "#248277",
            lightLabel: true
          },
          {
            value: "#14746F",
            lightLabel: true
          },
          {
            value: "#036666",
            lightLabel: true
          }
        ]}
      />
      <ColorPalette
        title="Halloween"
        colors={[
          {
            value: "#222222",
            lightLabel: true
          },
          {
            value: "#5C0601",
            lightLabel: true
          },
          {
            value: "#F9943B",
            lightLabel: true
          },
          {
            value: "#CC5216",
            lightLabel: true
          },
          {
            value: "#D1C2C2"
          }
        ]}
      />
      <ColorPalette
        title="New Palette"
        colors={[
          {
            value: "#1a535c",
            lightLabel: true
          },
          {
            value: "#4ecdc4"
          },
          {
            value: "#ff6b6b",
            lightLabel: true
          },
          {
            value: "#ffe66d"
          }
        ]}
      />

    </div>
  );
}

export default App;
