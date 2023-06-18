import { Component, Setter, createSignal } from 'solid-js';
import { useNavigate } from '@solidjs/router';

import { useAuth0 } from '../auth0-solidjs';
import { API_BASE } from '../../api';

type ModalProps = {
  svg: JSX.Element;
  type: string;
  setEditSocials: Setter<string>;
  setUserData: Setter;
};

const EditableRow: Component = (props) => {
  const { state: auth } = useAuth0();
  const [formData, setFormData] = createSignal({});
  const navigate = useNavigate();

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `${API_BASE}/brand/update_brand/${auth.user?.email}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify(formData()),
        }
      );
      if (response.ok) {
        props.setEditSocials(null);
        navigate('/copilot');
      } else {
        console.log('500. Internal error.');
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
      <td class="px-6 py-4">
        <button
          class="font-medium text-black hover:underline"
          onClick={() => props.setEditSocials(null)}
        >
          Close
        </button>
      </td>
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
