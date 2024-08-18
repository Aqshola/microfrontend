import { useRouteError } from "react-router-dom";

export default function Error() {
  const error: any = useRouteError();
  return (
    <>
      <h1>Oops Something Happen FEATURE-A</h1>
      <p>
        {error.statusText} - {error.message}
      </p>
    </>
  );
}
