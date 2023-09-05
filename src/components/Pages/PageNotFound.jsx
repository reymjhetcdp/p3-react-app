import Navbar from '../Navbar';

function PageNotFound() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>An error has occured.</h1>
        <p>This page cannot be found...</p>
      </main>
    </div>
  );
}

export default PageNotFound;
