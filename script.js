
// Array to store the data
let data = [];
// Handle form submission
const form = document.getElementById('crud-form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const nameInput = document.getElementById('name-input');
  const emailInput = document.getElementById('email-input');
  const ageInput=document.getElementById('age-input');
  const gradeInput=document.getElementById('grade-input');
  const degreeInput=document.getElementById('degree-input');

  const name = nameInput.value;
  const email = emailInput.value;
  const age = ageInput.value;
  const grade = gradeInput.value;
  const degree = degreeInput.value;

  // Create new data
      createData(name, email, age, grade, degree);

  // Reset form inputs
    nameInput.value = '';
    emailInput.value = '';
    ageInput.value = '';
    gradeInput.value = '';
    degreeInput.value = '';
    
    
});

// Function to render the data in the table
function renderData() {
  
  const tableBody = document.getElementById('data-body');
  tableBody.innerHTML = '';

  data.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index+1}</td>
      <td>${item.name}</td>
      <td>${item.email}</td>
      <td>${item.age}</td>
      <td>${item.grade}</td>
      <td class="degree-table">
        <div>${item.degree}</div>
        <div>
          <button id="crud-delete"onclick="deleteData(${index})"><span class="material-symbols-outlined">
          edit_square
          </span></button>

          <button id="crud-edit" onclick="editData(${index})"><span class="material-symbols-outlined">
          delete
          </span></button>
          
        </div>
        
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// Function to add new data
function createData(name, email, age, grade, degree) {
  const newData = {
    name: name,
    email: email,
    age: age,
    grade: grade,
    degree: degree
  };
  if(form.querySelector('button[type="submit"]').innerText === 'Edit Student'){
    form.querySelector('button[type="submit"]').innerText = 'Add Student';
  }
  data.push(newData);
  renderData();
}

// Function to edit existing data
function editData(index) {
  const item = data[index];
  const nameInput = document.getElementById('name-input');
  const emailInput = document.getElementById('email-input');
  const ageInput=document.getElementById('age-input');
  const gradeInput=document.getElementById('grade-input');
  const degreeInput=document.getElementById('degree-input');

  nameInput.value = item.name;
  emailInput.value = item.email;
  ageInput.value = item.age;
  gradeInput.value = item.grade;
  degreeInput.value= item.degree;

  // Remove the item from the array
  data.splice(index, 1);

  renderData();
  form.querySelector('button[type="submit"]').innerText = 'Edit Student';
}

// Function to delete data
function deleteData(index) {
  data.splice(index, 1);
  renderData();
}



//search
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', renderData);


function renderData() {
  const tableBody = document.getElementById('data-body');
  tableBody.innerHTML = '';

  const searchInput = document.getElementById('search-input');
  const searchTerm = searchInput.value.toLowerCase();

  data.forEach((item, index) => {
    const itemName = item.name.toLowerCase();
    const itemEmail = item.email.toLowerCase();
    const itemDegree=item.degree.toLowerCase();

    if (itemName.includes(searchTerm) || itemEmail.includes(searchTerm)||itemDegree.includes(searchTerm)) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${index+1}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.age}</td>
        <td>${item.grade}</td>
        <td class="degree-table">
          <div>${item.degree}</div>
          <div>
            <button id="edit" onclick="editData(${index})">
              <span class="material-symbols-outlined">edit_square</span>
            </button>
            <button id="delete" onclick="deleteData(${index})">
              <span class="material-symbols-outlined">delete</span>
            </button>
          </div>
        </td>
      `;
      tableBody.appendChild(row);
    }
  });
}

 
