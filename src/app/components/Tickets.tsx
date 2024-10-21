import React from 'react';

const Tickets = () => {
  return (
    <div className="section bg-beige py-12">
      <div className="container mx-auto px-2 py-28 md:px-10 lg:w-3/4">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <div className="mb-8 flex flex-col lg:mb-0 lg:w-1/3">
            <h1 className="text-5xl font-bold uppercase tracking-tighter text-semidark lg:text-7xl">
              Tickets
            </h1>
            <h2 className="mt-4 text-xl font-normal uppercase tracking-tighter text-herotext lg:text-2xl">
              Secure your spot at Upscale Conf 2024
            </h2>
            <p className="mt-4 text-lg font-bold uppercase text-semidark">
              Come to malaga to experience first hand talks about ai, creativity
              and tech, interactive workshops and much more.
            </p>
            <p className="mt-4 text-lg font-bold uppercase text-semidark">
              The after party is also not one to miss out on.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row lg:w-2/3">
            <div className="flex flex-1 flex-col rounded-md bg-hero uppercase text-beige transition-all duration-300 ease-in-out hover:scale-105">
              <div className="flex h-full flex-col justify-between p-8 sm:p-12">
                <div>
                  <h1 className="whitespace-pre-line text-3xl sm:text-4xl">
                    Single{'\n'}Tickets
                  </h1>
                  <p className="mt-6 text-lg font-semibold">
                    Two-day conference pass
                  </p>
                  <p className="text-lg font-semibold">After party entry</p>
                  <p className="text-lg font-semibold">
                    Lunch & snacks at the conf
                  </p>
                </div>
                <div>
                  <h2 className="mt-6 text-2xl font-medium line-through sm:text-4xl">
                    199€ sold out
                  </h2>
                  <div className="mt-4 flex items-end justify-between">
                    <h2 className="text-4xl font-bold text-herotext sm:text-6xl">
                      345€
                    </h2>
                    <p className="sm:text-md text-sm font-bold text-herotext">
                      full price
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full border-t-2 border-dashed border-beige py-4 text-center">
                <h2 className="text-md font-semibold">Get ticket</h2>
              </div>
            </div>
            <div className="flex flex-1 flex-col rounded-md bg-ticket uppercase text-semidark transition-all duration-300 ease-in-out hover:scale-105">
              <div className="flex h-full flex-col justify-between p-8 sm:p-12">
                <div>
                  <h1 className="whitespace-pre-line text-3xl sm:text-4xl">
                    Group{'\n'}Tickets
                  </h1>
                  <p className="mt-6 text-lg font-semibold">
                    Buy 3 or more tickets for the same company and get a 40%
                    discount.
                  </p>
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <h2 className="text-4xl font-bold text-semidark sm:text-6xl">
                    210€
                  </h2>
                  <p className="sm:text-md text-sm font-bold text-semidark">
                    full price
                  </p>
                </div>
              </div>
              <div className="w-full border-t-2 border-dashed border-beige py-4 text-center">
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
