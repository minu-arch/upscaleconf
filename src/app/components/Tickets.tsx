import React from 'react';

const Tickets = () => {
  return (
    <div className="section bg-beige py-12">
      <div className="container mx-auto px-2 md:px-10 lg:w-3/4 py-28">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 ">
          <div className="flex flex-col lg:w-1/3 mb-8 lg:mb-0">
            <h1 className="text-5xl lg:text-7xl font-bold uppercase text-semidark tracking-tighter">
              Tickets
            </h1>
            <h2 className="text-xl lg:text-2xl font-normal text-herotext tracking-tighter uppercase mt-4">
              Secure your spot at Upscale Conf 2024
            </h2>
            <p className="font-bold text-lg text-semidark uppercase mt-4">
              Come to malaga to experience first hand talks about ai, creativity
              and tech, interactive workshops and much more.
            </p>
            <p className="font-bold text-lg text-semidark uppercase mt-4">
              The after party is also not one to miss out on.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 lg:w-2/3">
            <div className="bg-hero flex flex-col text-beige uppercase rounded-md flex-1 transition-all duration-300 ease-in-out hover:scale-105">
              <div className="flex flex-col p-8 sm:p-12 h-full justify-between">
                <div>
                  <h1 className="text-3xl sm:text-4xl whitespace-pre-line">
                    Single{'\n'}Tickets
                  </h1>
                  <p className="mt-6 font-semibold text-lg">
                    Two-day conference pass
                  </p>
                  <p className="font-semibold text-lg">After party entry</p>
                  <p className="font-semibold text-lg">
                    Lunch & snacks at the conf
                  </p>
                </div>
                <div>
                  <h2 className="line-through text-2xl sm:text-4xl mt-6 font-medium">
                    199€ sold out
                  </h2>
                  <div className="flex justify-between items-end mt-4">
                    <h2 className="text-4xl sm:text-6xl font-bold text-herotext">
                      345€
                    </h2>
                    <p className="text-sm sm:text-md font-bold text-herotext">
                      full price
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full text-center border-t-2 border-dashed border-beige py-4">
                <h2 className="text-md font-semibold">Get ticket</h2>
              </div>
            </div>
            <div
              className="bg-ticket flex flex-col text-semidark uppercase rounded-md flex-1
              transition-all duration-300 ease-in-out hover:scale-105
            "
            >
              <div className="flex flex-col p-8 sm:p-12 h-full justify-between">
                <div>
                  <h1 className="text-3xl sm:text-4xl whitespace-pre-line">
                    Group{'\n'}Tickets
                  </h1>
                  <p className="mt-6 font-semibold text-lg">
                    Buy 3 or more tickets for the same company and get a 40%
                    discount.
                  </p>
                </div>
                <div className="flex justify-between items-end mt-4">
                  <h2 className="text-4xl sm:text-6xl font-bold text-semidark">
                    210€
                  </h2>
                  <p className="text-sm sm:text-md font-bold text-semidark">
                    full price
                  </p>
                </div>
              </div>
              <div className="w-full text-center border-t-2 border-dashed border-beige py-4">
                <h2 className="text-md font-semibold">Get ticket</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
