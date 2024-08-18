import authStoreFederation from "authUi/AuthStore";
import { useZustand } from "use-zustand";

// import BaseLayout from "baseUi/Layout";
export default function Home() {
  const authStore = useZustand(authStoreFederation, (state) => state);

  return (
    <>
      <h1>This is Home</h1>
      <p>With Token : {authStore.token}</p>
      <button
        onClick={() => {
          authStore.setCustomToken("random");
        }}
      >
        set to custom
      </button>
    </>
  );
}
