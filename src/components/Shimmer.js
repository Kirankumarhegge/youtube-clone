const Shimmer = () => {
  return (
    <>
      <div className="bg-neutral-950 flex flex-wrap justify-center">
        {Array(40)
          .fill("")
          .map((e, index) => {
            return (
              <div
                className="w-[23rem] h-74 p-2 m-2 bg-white-100 animate-pulse rounded flex justify-between "
                key={index}
              >
                <div className="flex-1 space-y-4 py-4 ">
                  <div className="space-y-2">
                    <div className="grid grid-cols-8 gap-2">
                      <div className="h-[13rem] col-span-8 bg-slate-200 rounded-lg"></div>
                      <div className="h-8 col-span-1 mr-2 bg-slate-200 rounded-full"></div>
                      <div className="h-8 col-span-7 bg-slate-200 rounded"></div>
                    </div>
                  </div>  
                  <div className="space-y-2">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Shimmer;

export const CardShimmer = () => {
  const shimmer_card_unit = 15;
  return (
    <div className="restaurant-menu pt-10">
       {/* <div className="restaurant-menu-content"> 
        <div className="menu-items-container">
          <div className="menu-items-list ml-[-25rem] h-38">
            {Array(shimmer_card_unit)
              .fill("")
              .map((element, index) => (
                <div role="status" class="space-y-8 animate-pulse space-y-0 my-2 space-x-8 flex items-center">
                    <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                        <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                        </svg>
                    </div>
                    <div class="w-full">
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                    </div>
                    <span class="sr-only">Loading...</span>
                </div>

              ))}
          </div>
         </div>
       </div> */}
     </div>
  );
};
