// The fetch api allows javascript to get data from servers, APIs or databases (it replaced XMLHTTPRequest)
/*
GOALS
✅ Fetch data from an API
✅ Handle responses properly (JSON & text)
✅ Catch errors and debug Fetch requests
✅ Perform POST, PUT, and DELETE requests
✅ Build a small project using Fetch
 */





                   //

//Fetch syntax
fetch(url)
  .then(response => response.json()) // Convert response to JSON
  .then(data => console.log(data))  // Do something with the data
  .catch(error => console.error("Error:", error)); // Handle errors
//🔹 fetch(url) - Sends a request to the given URL
//🔹 .then(response => response.json()) - Converts the response to JSON
//🔹 .then(data => console.log(data)) - Logs the data received
//🔹 .catch(error => console.error(...)) - Catches and logs any errors

//Example: fetching a list of posts

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json()) // Convert to JSON
  .then(posts => {
    posts.slice(0, 5).forEach(post => {  // Display only first 5 posts
      console.log(`Title: ${post.title}`);
      console.log(`Body: ${post.body}`);
    });
  })
  .catch(error => console.error("Error fetching data:", error));


                    //




  //HANDLING ERROR PROPERLY
  //Not all fetch requests succeed. We should handle server errors and network issues.
  fetch("https://jsonplaceholder.typicode.com/invalid-url")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error("Fetch failed:", error));

  //🔹 response.ok checks if the request was successful.
  // response.status gives the HTTP status (e.g., 404 for Not Found).



                //


  //POST
  //We can send data to an API using a POST request.
  // Example: Adding a New Post

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "My New Post",
      body: "This is the body of my new post",
      userId: 1
    })
  })
    .then(response => response.json())
    .then(data => console.log("Created Post:", data))
    .catch(error => console.error("Error:", error));

    /**
🔹 method: "POST" tells fetch to send data.
🔹 headers define the type of data (JSON).
🔹 body is where we send the actual data (converted to JSON).

🧐 Quick Question: What does JSON.stringify() do?
✅ Answer: It converts a JavaScript object into a JSON string.
     */





                  //

//PUT
//A PUT request is used to update an existing record.
//Example: Updating a Post
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 1,
    title: "Updated Post Title",
    body: "This is the updated post body",
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => console.log("Updated Post:", data))
  .catch(error => console.error("Error:", error));





              //
//DELETE
//A DELETE request removes data from an API.
// Example: Deleting a Post
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE"
})
  .then(response => {
    if (response.ok) {
      console.log("Post deleted successfully!");
    } else {
      console.error("Error deleting post:", response.status);
    }
  })
  .catch(error => console.error("Error:", error));

  
