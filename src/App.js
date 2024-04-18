import React from 'react';

const list = () => {
  const endpoint = '/data-api/rest/Person';

  fetch(endpoint)
    .then(response => response.json())
    .then(data => console.table(data.value));
}

const get = () => {
  const id = 1;
  const endpoint = `/data-api/rest/Person/Id`;

  fetch(`${endpoint}/${id}`)
    .then(response => response.json())
    .then(data => console.table(data.value));
}

const update = () => {
  console.log('update');

  const id = 1;
  const data = {
    Name: "Molly"
  };
  const endpoint = '/data-api/rest/Person/Id';

  fetch(`${endpoint}/${id}`, { method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)})
    .then(response => response.json())
    .then(data => console.table(data.value));
}

const create = () => {
  console.log('create');

  const data = {
    Name: "Pedro"
  };
  const endpoint = `/data-api/rest/Person/`;

  fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => console.table(data.value));
}

const del = () => {
  console.log('delete');

  const id = 3;
  const endpoint = '/data-api/rest/Person/Id';

  const response = fetch(`${endpoint}/${id}`, {
    method: "DELETE"
  });

  if(response.ok) {
    console.log(`Record deleted: ${ id }`)
  } else {
    console.log(response);
  }
}

function App() {
  return (
    <>
      <div>
        <h1>Static Web Apps Database Connections</h1>
        <blockquote>
          Open the console in the browser developer tools to see the API responses.
        </blockquote>
        <div>
          <button id="list" onClick={() => {list();}}>List</button>
          <button id="get" onClick={() => {get();}}>Get</button>
          <button id="update" onClick={() => {update();}}>Update</button>
          <button id="create" onClick={() => {create();}}>Create</button>
          <button id="delete" onClick={() => {del();}}>Delete</button>
        </div>
      </div>
    </>
  );
}

export default App;
