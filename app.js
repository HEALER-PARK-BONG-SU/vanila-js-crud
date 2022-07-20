let users = [
  { id: 1, name: "sangraiz", age: 24, mobile: 0123124 },
  { id: 2, name: "hamza", age: 21, mobile: 123123 },
  { id: 3, name: "sadiq", age: 20, mobile: 43545 },
  { id: 4, name: "maaz", age: 19, mobile: 25 },
];
let deletedUser = [];
let id = 3;
let ID;

// --------------------------------------
// Add user
window.addUser = function () {
  let name = document.getElementById("name");
  let age = document.getElementById("age");
  let mobile = document.getElementById("mobile");
  if (ID) {
    let user = users.find(function (user) {
      return user.id === ID;
    });
    user.name = name.value;
    user.age = age.value;
    user.mobile = mobile.value;
    document.getElementById("submit").innerText = "Update";
    ID = null;
    name.value = "";
    age.value = "";
    mobile.value = "";
  } else {
    users.push({ id, name: name.value, age: age.value, mobile: mobile.value });
    id++;
    name.value = "";
    age.value = "";
    mobile.value = "";
  }
  setUser();
};
// -------------------------------------------
// Deleting User
window.deleteUser = function (id) {
  users = users.filter(function (user) {
    if (user.id === id) {
      deletedUser.push({
        id,
        name: user.name,
        age: user.age,
        mobile: user.mobile,
      });
    }
    return user.id !== id;
  });
  setUser();
};
// ----------------------------------
// Editing User
window.editUser = function (id) {
  ID = id;
  let name = document.getElementById("name");
  let age = document.getElementById("age");
  let mobile = document.getElementById("mobile");
  document.querySelector("#submit").innerText = "Update";
  let user = users.find(function (user) {
    return user.id === id;
  });
  name.value = user.name;
  age.value = user.age;
  mobile.value = user.mobile;
};

// -------------------------- //
// setting User
window.setUser = function () {
  const displaying = users.map(function (user) {
    return `<tr>
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.age}</td>
      <td>${user.mobile}</td>
      <td><button class="btn btn-danger" onclick='deleteUser(${user.id})'>Delete</button> |
      <button class="btn btn-primary" onclick='editUser(${user.id})'>Edit</button></td>
      </tr>`;
  });
  if (users.length <= 0) {
    document.getElementById("lottie").style.display = "none";
    document.getElementById(
      "file"
    ).innerHTML = `<lottie-player src="https://assets3.lottiefiles.com/packages/lf20_a7vr2ghs.json"  background="#1b1b1b"  speed="1"  style="width: 600px; height: 300px;"  loop  autoplay></lottie-player>`;
  } else {
    document.getElementById("put").innerHTML = displaying.join("");
  }
  deletedUserArray();
};
setUser();
// -----------------------------------------
// printing delted users
function deletedUserArray() {
  const usersDeleted = deletedUser.map(function (user) {
    return `<tr>
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.age}</td>
    <td>${user.mobile}</td>
    </tr>`;
  });
  document.getElementById("deleted").innerHTML = usersDeleted.join("");
}
