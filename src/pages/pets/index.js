import React from "react";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "ovv3c751", // process.env.NEXT_APP_NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-08-31",
  useCdn: false,
});

const Pets = ({ pets }) => {
  pets.forEach((element) => {
    console.log(element.name);
  });

  return (
    <>
      <header>
        <h1>Sanity + Next.js</h1>
      </header>
      <main>
        <h2>pets</h2>
        {pets.length > 0 && (
          <ul>
            {pets.map((pet) => (
              <li key={pet._id}>{pet?.name}</li>
            ))}
          </ul>
        )}
        {!pets.length > 0 && <p>No pets to show</p>}
        {pets.length > 0 && (
          <div>
            <pre>{JSON.stringify(pets, null, 2)}</pre>
          </div>
        )}
        {!pets.length > 0 && (
          <div>
            <div>¯\_(ツ)_/¯</div>
            <p>Your data will show up here when you've configured everything correctly</p>
          </div>
        )}
      </main>
    </>
  );
};

export async function getStaticProps() {
  const revalidate = 10; // In seconds
  const pets = await client.fetch(`*[_type == "pet"]` /* , { next: { revalidate } } */);

  return {
    props: {
      pets,
    },
    revalidate,
  };
}

export default Pets;