import Button from "../src/components/Button/Button";
import ThemeProvider from "../src/theme/ThemProvider";

export default function HomeScreen() {
  return (
    <ThemeProvider>
      <div>
        <h1>Home Screen</h1>
        <Button>Botão simples</Button>
      </div>
    </ThemeProvider>
  );
}
