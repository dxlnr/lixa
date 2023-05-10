
const ReqForm = () => {

    return (
        <div class="items-center justify-center m-4 border-neutral-600 border rounded-full p-2.5">
        <div class="flex flex-row space-x-2">
          <div class="bg-opacity-5">
          <input 
            type="text" 
            id="website-admin" 
            class="rounded-full border border-white text-white focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-md p-2.5" 
            placeholder=" Name " />
          </div>
          <div>
          <input 
            type="text" 
            id="website-admin" 
            class="rounded-full text-whit block flex-1 min-w-0 w-full text-md p-2.5" 
            placeholder=" Email " />
          </div>
          <div>
          <button 
            type="submit" 
            class="text-white focus:ring-4 focus:outline-none font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center">
            Join
            </button>
          </div>
        </div>
        </div>
    );
};

export default ReqForm;
