import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center bg-white-200 min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold text-red-600">Oops!</h1>
      <p>An unexpected error has occured</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
