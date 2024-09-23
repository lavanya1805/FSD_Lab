function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const password = document.getElementById("password").value;
    
    if (name === "" || email === "" || age === "" || password === "") {
      alert("All fields must be filled out");
      return false;
    }
    
    if (age < 18) {
      alert("You must be at least 18 years old");
      return false;
    }
    
    return true;
  }
  