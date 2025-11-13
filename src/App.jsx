import './App.css';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Sort from './components/Sort/Sort';

function App() {
  return (
    <>
      <Header />
      <Form />
      <main className="p-8">
        <div className="max-w-7xl mx-auto space-y-10 px-4">
          {/* <!-- Search, Sort, and Filter Buttons --> */}
          <section className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 p-6 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <Search />
              <Sort />
            </div>
          </section>
          {/* password card grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
