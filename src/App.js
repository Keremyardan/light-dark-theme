import "./App.css";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Switch from "./Switch";

const Title = ({ children }) => {
  const { theme } = useTheme();
  return (
    <h2
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </h2>
  );
};

const Paragraph = ({ children }) => {
  const { theme } = useTheme();
  return (
    <p
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </p>
  );
};

const Content = () => {
  return (
    <div>
      <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Maecenas sodales molestie erat non facilisis. 
      Fusce est urna, accumsan at sagittis eu, blandit sed lorem. Cras sollicitudin, augue id malesuada dictum, 
      nisl felis tincidunt lectus, eu venenatis sem nisl vel felis. Quisque sed imperdiet enim. 
      Integer vestibulum efficitur libero, nec ullamcorper nunc fermentum vitae. 
      Cras eget justo non nunc sodales scelerisque sit amet mollis ipsum. 
      Nullam eu arcu in magna luctus pretium id eget nulla. Sed eget dapibus libero. 
      Nullam a mi nisi. Curabitur bibendum laoreet pretium. Aliquam malesuada lectus massa, non pellentesque metus porttitor ac. 
      Quisque non rutrum ex, eget sagittis enim. Suspendisse ac dui laoreet, fringilla felis ut, tristique purus. 
      Sed ex magna, iaculis a mollis vitae, auctor eu odio. Etiam eu dignissim ante, ut consectetur urna. Pellentesque euismod mi vel diam consequat euismod.
      </Paragraph>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <Title>Little Cam! 🎥</Title>
      <Switch />
    </header>
  );
};

const Page = () => {
  return (
    <div className="Page">
      <Title>When it comes to dough</Title>
      <Content />
    </div>
  );
};

function App() {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <Header />
      <Page />
    </div>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;
