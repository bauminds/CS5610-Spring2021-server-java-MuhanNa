var $usernameFld
var $passwordFld
var $firstNameFld
var $lastNameFld
var $roleFld
var $createBtn
var addUserBtn
var theTableBody
var $updateBtn
var userService = new UserServiceClient()

function addUser() {
  createUser({
    username: 'Alice',
    password: '123',
    firstName: 'Alice',
    lastName: 'A',
    roleName: 'Student'
  })
}
var users = [];

function createUser(user) {
  userService.createUser(user)
    .then(function (actualUser) {
      users.push(actualUser)
      renderUsers(users)
    })
}

var selectedUser = null
function selectUser(event) {
  var selectBtn = jQuery(event.target)
  var theId = selectBtn.attr("id")
  selectedUser = users.find(user => user._id === theId)
  $usernameFld.val(selectedUser.username)
  $passwordFld.val(selectedUser.password)
  $firstNameFld.val(selectedUser.firstName)
  $lastNameFld.val(selectedUser.lastName)
  $roleFld.val(selectedUser.role)
}

function deleteUser(event) {
//    console.log(event.target)
    var deleteBtn = jQuery(event.target)
    var theClass = deleteBtn.attr("class")
    var theIndex = deleteBtn.attr("id")
    var theId = users[theIndex]._id
//    console.log(theClass)
//    console.log(theIndex)

    userService.deleteUser(theId)
      .then(function (status) {
        users.splice(theIndex, 1)
        renderUsers(users)
      })
}

function renderUsers(users) {
  theTableBody.empty()
  for (var i = 0; i < users.length; i++) {
    var user = users[i]
    theTableBody
      .append(`
    <tr>
        <td>${user.username}</td>
        <td>${user.password}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.role}</td>
        <td>
            <i class="fa-2x fas fa-times wbdv-delete" id="${i}"></i>
            <i class="fa-2x fas fa-edit wbdv-select" id="${user._id}"></i>
        </td>
    </tr>
  `)
  }
  jQuery(".wbdv-delete")
    .click(deleteUser)
  jQuery(".wbdv-select")
    .click(selectUser)
}

function updateUser() {
  console.log(selectedUser)
  selectedUser.username = $usernameFld.val()
  selectedUser.password = $passwordFld.val()
  selectedUser.firstName = $firstNameFld.val()
  selectedUser.lastName = $lastNameFld.val()
  selectedUser.role = $roleFld.val()
  userService.updateUser(selectedUser._id, selectedUser)
    .then(function (status) {
      var index = users.findIndex(user => user._id === selectedUser._id)
      users[index] = selectedUser
      renderUsers(users)
    })

   $usernameFld.val("")
   $passwordFld.val("")
   $firstNameFld.val("")
   $lastNameFld.val("")
   $roleName.val("")
}

function init() {
  $usernameFld = $(".wbdv-username-fld")
  $passwordFld = $(".wbdv-password-fld")
  $firstNameFld = $(".wbdv-first-name-fld")
  $lastNameFld = $(".wbdv-last-name-fld")
  $roleFld = $(".wbdv-role-fld")

  $createBtn = $(".wbdv-create-btn")
  addUserBtn = jQuery("#wbdv-create-user")
  addUserBtn.click(addUser)
  $updateBtn = $(".wbdv-update-btn")
  theTableBody = jQuery("tbody")

  $updateBtn.click(updateUser)
  $createBtn.click(() => {
      createUser({
        username: $usernameFld.val(),
        password: $passwordFld.val(),
        firstName: $firstNameFld.val(),
        lastName: $lastNameFld.val(),
        role: $roleFld.val(),
      })
      $usernameFld.val("")
      $passwordFld.val("")
      $firstNameFld.val("")
      $lastNameFld.val("")
      $roleName.val("")
    }
  )

  userService.findAllUsers()
    .then(function (actualUsersFromServer) {
      users = actualUsersFromServer
      renderUsers(users)
    })
}
jQuery(init)