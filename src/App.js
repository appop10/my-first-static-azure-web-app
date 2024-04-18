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
  const id = 1;
  const data = {
    Name: "Sunny"
  };
  const endpoint = '/data-api/rest/Person/Id';

  fetch(`${endpoint}/${id}`, { method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)})
    .then(response => response.json())
    .then(data => console.table(data.value));
}

const create = () => {
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
  const id = 4;
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
      <div className="overall-container">
        <h1>Static Web Apps Database Connections</h1>
        <blockquote>
          Open the console in the browser developer tools to see the API responses.
        </blockquote>

        <div className="button-container">
          <button id="list" onClick={() => {list();}}>List</button>
          <button id="get" onClick={() => {get();}}>Get</button>
          <button id="update" onClick={() => {update();}}>Update</button>
          <button id="create" onClick={() => {create();}}>Create</button>
          <button id="delete" onClick={() => {del();}}>Delete</button>
        </div>

        <div className="links-container">
          <h2>Tutorial Links</h2>
          <ul>
            <li>
              <a href="https://learn.microsoft.com/en-us/azure/static-web-apps/getting-started?tabs=react#next-steps" target="_blank">Quickstart: Build your first static site with Azure Static Web Apps</a>
            </li>
            <li>
              <a href="https://learn.microsoft.com/en-us/azure/static-web-apps/database-azure-sql?tabs=bash&pivots=static-web-apps-rest" target="_blank">Tutorial: Add an Azure SQL database connection in Azure Static Web Apps (preview)</a>
            </li>
            <li>
              <a href="https://learn.microsoft.com/en-us/azure/static-web-apps/database-configuration?source=recommendations" target="_blank">Database connection configuration in Azure Static Web Apps (preview)</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
