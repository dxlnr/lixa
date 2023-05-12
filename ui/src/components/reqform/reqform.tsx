const ReqForm = () => {
  return (
    <div class="m-1">
      <p class="text-neutral-500 text-center px-8 text-md">
        Welcome to{' '}
        <strong class="text-white"> the future of contextual content.</strong>{' '}
        Get Early Access.
      </p>
      <div class="items-center justify-center m-4 border-neutral-600 border rounded-full p-2">
        <div class="flex flex-row space-x-2">
          <input
            type="text"
            id="website-admin"
            class="appearance-none bg-transparent rounded-full border border-neutral-600 text-white focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-md p-2.5"
            placeholder=" Name "
          />
          <input
            type="text"
            id="website-admin"
            class="appearance-none bg-transparent rounded-full border border-neutral-600 text-whit block flex-1 min-w-0 w-full text-md p-2.5"
            placeholder=" Email "
          />
          <button
            type="submit"
            class="text-black bg-slate-50 bg-opacity-25 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-slate-400 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReqForm
