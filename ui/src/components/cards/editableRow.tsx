import { Component, Setter, createSignal } from 'solid-js';

type ModalProps = {
  svg: JSX.Element;
  type: string;
  setEditSocials: Setter<string>;
};

const EditableRow: Component = (props) => {
    const [formData, setFormData] = createSginal({});

    const handleChange = (event: any) => {
      const { name, value } = event.target;
      props.setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
      try {
        const response = await fetch(`${API_BASE}/brand/update_brand/${auth.user?.email}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify(formData()),
        });
        if (response.ok) {
          console.log('POST request succeeded.');
          props.setEditSocials(null);
        } else {
          console.log('error');
        }
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <tr>
      <th
        scope="row"
        class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        {props.svg()}
        <div class="pl-3 font-medium opacity-60">
          <input
            type="text"
            id={props.type}
            name={props.type}
            required="required"
            placeholder="enter a new link"
            class="block w-full outline-none text-sm"
            onInput={handleChange}
          ></input>
        </div>
      </th>
      <td></td>
      <td class="px-6 py-4">
        <button
          class="font-medium text-black hover:underline"
          onClick={handleSubmit}
        >
          Save
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
