function App(){
  return(
    <BrowserRouter>
       <Navbar/>

       <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/about" element = {<About />} />
            <Route path = "/contact" element = {<Contact />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;