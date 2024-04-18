import React from 'react';

const list = () => {
  const endpoint = '/data-api/rest/Person';

  fetch(endpoint)
    .then(response => response.json())
    .then(data => console.table(data));
}

const get = () => {
  console.log('get');
}

const update = () => {
  console.log('update');
}

const create = () => {
  console.log('create');
}

const del = () => {
  console.log('delete');
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
