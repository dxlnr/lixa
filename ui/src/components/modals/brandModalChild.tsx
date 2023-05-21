import { Component, createSignal } from 'solid-js';


const BrandModalChild: Component = () => {
  const [formData, setFormData] = createSignal({});

  const handleSubmit = async (prompt) => {
    const formData = {
        'name': 'nike',
        'industry': 'sports',
    };
    try {
        // const response = await fetch('http://192.168.88.18:5000/api/brand/create_brand',
        const response = await fetch('http://127.0.0.1:5000/api/brand/create_brand',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify(formData),
        }
      );
      
      if (response.ok) {
        // Request was successful
        console.log('POST request succeeded');
      } else {
        // Request failed
        console.error('POST request failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // setFormData((prevData) => ({ ...prevData, [name]: value }));

  };

  return (
    <div>
      <div class="pb-2 px-4">
        <div class="flex justify-center mb-8 md:mb-0 mt-2">
          <img
            src="/undraw_design_team_re_gh2d.svg"
            class="w-80"
            alt="Phone image"
          />
        </div>

        <div class="mt-12">
          <form>
            <div>
              <input
                class="w-full py-2 border-b border-gray-300 focus:outline-none focus:border-fuchsia-300"
                type=""
                placeholder="Brand Name"
                name="name" 
                id="name"
                onInput={handleChange}
              />
            </div>
            <div class="mt-8">
              <input
                class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-fuchsia-300"
                type=""
                placeholder="Industry"
                name="industry" 
                id="industry"
                onInput={handleChange}
              />
            </div>
            <div class="mt-10">
              <button
                type="submit"
                class="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-20 sm:px-40 py-3 text-center"
                onClick={handleSubmit}
              >
                Create new Brand
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BrandModalChild;
