const Home = () => {

  return (
    <div className="h-screen bg-[#fceecb] grid items-center">
      <div className="h-[80%] w-[80%] grid grid-cols-10 justify-self-center gap-6">

        <div className="bg-[#70d9d2] col-span-2"></div>


        <div className="bg-[#fbe7b2] grid col-span-6">

          <div className="col-span-6 grid-flow-col gap-6 grid">
            <div className="bg-[#efa09c] col-span-3"></div>
            <div className="bg-[#efa09c] col-span-3"></div>
          </div>

          <div className="bg-[#f39770] col-span-2"></div>

          <div className="bg-[#f9d77e] grid col-span-4 ml-6">
            <div className="col-span-4 grid gap-6 grid-flow-col">
              <div className="bg-[#efa09c]"></div>
              <div className="bg-[#efa09c]"></div>
            </div>
            <div className="bg-[#eba1c4] col-span-4"></div>
          </div>

        </div>

        <div className="bg-[#70d9d2] col-span-2"></div>

      </div>
    </div>
  );
}

export default Home