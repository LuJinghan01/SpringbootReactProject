let jobs = [
    {id: "123", name: "A31_1234567890", status: false, creationTime: "6/26/2024, 9:00am", userName: "jl001",},
    {id: "124", name: "A31_1234567890", status: false, creationTime: "6/26/2024, 9:00am", userName: "jl001",},
    {id: "125", name: "A31_1234567890", status: false, creationTime: "6/26/2024, 9:00am", userName: "jl001",}
];

const div = document.getElementById("myList");
const search_div = document.getElementById("search");
var input = document.getElementById("input");
let count = 0;


for (let job in jobs) {
    let {id, name, status, creationTime, userName} = jobs[job];
    let html = `<table id="myDict">`;
    if(count=0){
        html += `<thead><tr>
                    <th>Job ID</th> 
                    <th>Name</th>
                    <th>Status</th>
                    <th>Creation Time</th>
                    <th>User Name</th>    
                </tr></thead>`;
    }else{
        html += `<tr> 
        
        <td align="center">
            <label class="container", id=${id}>
            <input type="checkbox">
            </label>
            ${id} </td>
        <td align="center">${name} </td>
        <td align="center">
            <label class="container">
            <input type="checkbox" checked="checked">
            </label>
            Completed </td>
        <td align="center">${creationTime} </td>
        <td align="center">${userName} </td>
        </tr>
        `;
    }
    html += `</table>`;
    
    div.insertAdjacentHTML("beforeend", html);
   
  }

function search(){
    var id = input.value;
	for (let i=0; i<jobs.length; i++)
	{
		if(id == jobs[i].id)
		{
            console.log("found the job:",jobs[i]);
            
		}
	}
}

search_div.addEventListener("click", search);