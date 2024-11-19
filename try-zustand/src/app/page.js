import useStore from "./store/state";
import Count from "./components/Count";

export default function Home() {
  // Med Zustand
  // const { count, setCount } = useStore();

  // Normal state
  // const [state, setState] = useState();

  return (
    <div className="max-w-[1200px] mx-auto">
      <header>Header</header>
      <main>
        <section>
          <Count />
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
