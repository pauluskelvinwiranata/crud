const userForm=document.getElementById("form"),userTable=document.getElementById("table");let users=JSON.parse(localStorage.getItem("users"))||[];function renderTable(){userTable.innerHTML=`
      <tr>
        <th>Nama</th>
        <th>Email</th>
        <th>Aksi</th>
      </tr>
      ${users.map(e=>`
        <tr>
          <td>${e.name}</td>
          <td>${e.email}</td>
          <td>
            <button class="btn-edit" onclick="editUser('${e.id}')">Edit</button>
            <button class="btn-delete" onclick="deleteUser('${e.id}')">Hapus</button>
          </td>
        </tr>
      `).join("")}
    `}function createUser(e,t){let r={id:Date.now().toString(),name:e,email:t};users.push(r),updateLocalStorage(),renderTable()}function editUser(e){let t=users.find(t=>t.id===e);t&&(document.getElementById("userId").value=t.id,document.getElementById("name").value=t.name,document.getElementById("email").value=t.email)}function updateUser(e,t,r){let n=users.find(t=>t.id===e);n&&(n.name=t,n.email=r,updateLocalStorage(),renderTable())}function deleteUser(e){users=users.filter(t=>t.id!==e),updateLocalStorage(),renderTable()}function updateLocalStorage(){localStorage.setItem("users",JSON.stringify(users))}userForm.addEventListener("submit",function(e){e.preventDefault();let t=document.getElementById("userId").value,r=document.getElementById("name").value,n=document.getElementById("email").value;t?updateUser(t,r,n):createUser(r,n),userForm.reset()}),renderTable();