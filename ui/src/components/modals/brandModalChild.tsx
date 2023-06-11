import { Component, createSignal } from 'solid-js';
import { API_BASE } from '../../api';

const BrandModalChild: Component = () => {
  const [formData, setFormData] = createSignal({});

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${API_BASE}/brand/create_brand`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(formData()),
      });

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

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
                placeholder="brand name"
                name="name"
                id="name"
                onInput={handleChange}
              />
            </div>
            <div class="mt-6">
              <input
                class="w-full py-2 border-b border-gray-300 focus:outline-none focus:border-fuchsia-300"
                type=""
                placeholder="website"
                name="website"
                id="website"
                onInput={handleChange}
              />
            </div>
            <div class="mt-6">
              <input
                class="w-full py-2 border-b border-gray-300 focus:outline-none focus:border-fuchsia-300"
                type=""
                placeholder="industry"
                name="industry"
                id="industry"
                onInput={handleChange}
              />
            </div>
            <div class="mt-6">
              <input
                class="w-full py-2 border-b border-gray-300 focus:outline-none focus:border-fuchsia-300"
                type=""
                placeholder="location"
                name="location"
                id="location"
                onInput={handleChange}
              />
            </div>
            <div class="mt-6">
              <input
                class="w-full py-2 border-b border-gray-300 focus:outline-none focus:border-fuchsia-300"
                type=""
                placeholder="link to social profile"
                name="social"
                id="social"
                onInput={handleChange}
              />
            </div>

            <div class="mt-10">
              <button
                type="submit"
                class="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-20 sm:px-40 py-3 text-center"
                onClick={handleSubmit}
              >
                create new brand
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BrandModalChild;
