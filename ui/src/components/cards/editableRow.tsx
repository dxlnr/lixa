import { Component, Setter } from 'solid-js';

type ModalProps = {
  svg: JSX.Element;
  setEditSocials: Setter<string>;
};

const EditableRow: Component = (props) => {
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
            required="required"
            placeholder="enter a new link"
            name=""
            class="block w-full outline-none text-sm"
          ></input>
        </div>
      </th>
      <td></td>
      <td class="px-6 py-4">
        <button
          class="font-medium text-black hover:underline"
          onClick={() => props.setEditSocials(null)}
        >
          Save
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
