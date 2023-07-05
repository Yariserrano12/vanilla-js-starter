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

async function get() {
  const response = await fetch(
    "http://localhost:4000/api/task",
    configuration("GET")
  );
  const tasks = await response.json();
  return tasks;
}

async function deleteTask(id) {
  const response = await fetch("http://localhost:4000/api/task/" + id, {
    method: "DELETE",
  });
  const deleteTask = await response.json();
  return deleteTask;
}

export { post, deleteTask, get };
