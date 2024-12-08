

const LandingPage = () => {
  return (
    <div>
      <div className="overflow-hidden w-full flex flex-col items-center justify-center">
        <div className="w-3/4 flex flex-col items-center justify-center relative ">
          <img src="../designs/w.png" alt="" className="w-full "/>
          <span className="font-Ribeye absolute text-slate-800 text-9xl mr-64 mb-96 pb-48">Welcome to<br/><h2 className="text-8xl">Aura Cuts</h2></span>
          <p className="font-display absolute mt-24 mr-96 pb-44 text-lg font-medium" >
            Discover barber shops near you, view their services,<br/> and pick a 
            time slot that fits your schedule perfectly.<br/> With Aura Cut, you have the freedom to choose<br/>
            your favorite barber and book a haircut or grooming<br/>session in just a few clicks.</p>
        </div>
        <div className="w-3/4 flex flex-col items-center justify-center">
          <img src="../designs/y.png" alt="" className="w-full"/>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
