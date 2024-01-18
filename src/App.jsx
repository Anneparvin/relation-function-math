

function App() {
  

  return (
    <div className="max-w-screen-2xl md:w-full lg:p-1 p-6 mx-auto mt-16">
      {/* header here */}
      <header className="lg:flex justify-between ">
        <img src="/src/assets/Component 40.png" alt="logo"/>
        <img src="/src/assets/Frame 3.png" alt="function"/>
      </header>
      {/* sign here */}
      <div>
        <img className="mt-8" src="/src/assets/Frame 47.png" alt="sign"/>
      </div>
      {/* subject here */}
      <div>
        <img className="mt-8" src="/src/assets/Relations and Functions ( Mathematics ).png" alt="subject"/>
      </div>
      {/* slider here */}
      <div className="grid justify-items-center">
        <img className="mt-16" src="/src/assets/title 01.png" alt="title"/>
        <img className="mt-4" src="/src/assets/Frame 44.png" alt="slider"/>
      </div>
      {/* playlist */}
       <div className="mt-8 lg:flex justify-between items-center">
       <img className="mt-16" src="/src/assets/Frame 41.png" alt="logo"/>
        <img className="mt-4 md:w-50 h-16" src="/src/assets/Frame 48.png" alt="playlist"/>
       </div>
      <div className="mb-8">
       {/* FAQ */}
       <img className="mt-16" src="/src/assets/FAQ.png" alt="faq"/>
        <img className="mt-8 lg:w-2/3" src="/src/assets/Frame 49.png" alt="question"/>

      </div>
    </div>
  )
}

export default App
