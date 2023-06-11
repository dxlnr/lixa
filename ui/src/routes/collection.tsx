import { Component, createSignal } from 'solid-js';

import Navbar from '../components/navbar/navbar';
import Collect from '../components/collect/collect';
import Card from '../components/cards/card';

const Collection: Component = () => {
  const [userCollection, setUserCollection] = createSignal(null);

  return (
    <>
      <Navbar />
      <div class="flex flex-col md:h-screen mx-10 md:mx-32 my-10">
        <h1 class="text-xl font-bold py-8"> Content Collection </h1>
        <p class="text-md font-light py-4"> All Collections </p>
        <div class="flex flex-row">
          <Collect />
          <For each={userCollection()}>{(c) => <Card data={c} />}</For>
        </div>
      </div>
    </>
  );
};

export default Collection;
