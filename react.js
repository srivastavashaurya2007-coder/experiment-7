let notes = [];
let editIndex = -1;

function addNote() {
    let title = document.getElementById("title").value.trim();
    let content = document.getElementById("content").value.trim();

    if (title === "" || content === "") {
        alert("Please enter title and content");
        return;
    }

    if (editIndex === -1) {
        notes.push({ title: title, content: content });
    } else {
        notes[editIndex] = { title: title, content: content };
        editIndex = -1;
        document.querySelector("button").innerText = "Add Note";
    }

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    displayNotes();
}

function displayNotes() {
    let notesDiv = document.getElementById("notes");
    notesDiv.innerHTML = "";

    notes.forEach(function(note, index) {
        let div = document.createElement("div");
        div.className = "note";

        let heading = document.createElement("h3");
        heading.textContent = note.title;

        let paragraph = document.createElement("p");
        paragraph.textContent = note.content;

        let editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = function() {
            document.getElementById("title").value = note.title;
            document.getElementById("content").value = note.content;
            editIndex = index;
            document.querySelector("button").innerText = "Update Note";
        };

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            notes.splice(index, 1);
            if (editIndex === index) {
                editIndex = -1;
                document.getElementById("title").value = "";
                document.getElementById("content").value = "";
                document.querySelector("button").innerText = "Add Note";
            }
            displayNotes();
        };

        function Save(){
            
        }

        div.appendChild(heading);
        div.appendChild(paragraph);
        div.appendChild(editButton);
        div.appendChild(deleteButton);

        notesDiv.appendChild(div);
    });
}
