import React, { Suspense } from "react";

// Dynamically import your authentication page
const AuthPage = React.lazy(() => import("./components/Auth"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthPage />
    </Suspense>
  );
}

export default App;
