import { lazy, Suspense } from "react";
import { Button, Title } from "federation_provider/components";
import "./App.css";

function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

const SampleComponent = lazy(() =>
  import("federation_provider/components").then((mod) => {
    return { default: mod.Button };
  })
);

const App = () => {
  return (
    <div className="content">
      <h1>ConsumerProd</h1>
      <h2>Rsbuild with React</h2>
      <p>Start building amazing things with Rsbuild.</p>

      <Button
        variant="rounded"
        title="my-title"
        onClick={() => console.log("Hello!")}
      >
        Pablo
      </Button>
      <Title text="Title text" />

      <Suspense fallback="loading">
        <SampleComponent onClick={() => alert("Loading...")}>
          SampleComponent
        </SampleComponent>
      </Suspense>
    </div>
  );
};

export default App;
