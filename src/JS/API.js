function configuration(metodo, data) {
  return {
    method: metodo,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
}

async function post(task) {
  const response = await fetch("http://localhost:4000/api/task", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const post = await response.json();
  return post;
}

// async function post(tarea) {
//   return await fetch("http://localhost:4000/api/task", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     //body: JSON.stringify({ id: tarea }),
//     body: JSON.stringify(tarea),
//   })
//     .then(async (response) => await response.json())
//     .then((response) => console.log(JSON.stringify(response)));
// }

async function getApi() {
  const response = await fetch("http://localhost:4000/api/task", {
    method: "GET",
  });
  const getPostApi = await response.json();
  return getPostApi;
}

async function getById(id) {
  const response = await fetch("http://localhost:4000/api/task" + id, {
    method: "GET",
  });
  const getPostApi = await response.json();
  return getPostApi;
}


async function deleteTask(id) {
  const response = await fetch("http://localhost:4000/api/task/" + id, {
    method: "DELETE",
  });
  const deleteTask = await response.json();
  return deleteTask;
}

async function updateTask(id, task) {
  const response = await fetch("http://localhost:4000/api/task/" + id, {
    method: "PUT",
    headers: {
      Accept : "application/json",
      "Content-Type":"application/json",
    },
    body: JSON.stringify(task)
  });
  const updatedTask = await response.json();
  return updatedTask;
} 




export { post, deleteTask, getApi, updateTask };
