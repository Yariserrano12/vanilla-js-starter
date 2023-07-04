



function post(tarea) {
    

    fetch("http://localhost:3000/api/task", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      //body: JSON.stringify({ id: tarea }),
      body: JSON.stringify({ task: tarea }),
    })
      .then((response) => response.json())
      .then((response) => console.log(JSON.stringify(response)));
  }




export{post} 