document.getElementById("loadUsers").addEventListener("click", function() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
      let userList = document.getElementById("userList");
      userList.innerHTML = ""; // Clear previous list
      
      users.forEach(user => {
        let listItem = document.createElement("li");
        listItem.innerText = `${user.name} - ${user.email}`;
        
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", function() {
          listItem.remove(); // Remove from UI (fake delete)
        });

        listItem.appendChild(deleteBtn);
        userList.appendChild(listItem);
      });
    })
    .catch(error => console.error("Error:", error));
});
