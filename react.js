let notes = JSON.parse(localStorage.getItem("notes")) || [];

function displayNotes() {
    let notesDiv = document.getElementById("notes");
    notesDiv.innerHTML = "";

    notes.forEach(function(note) {
        let div = document.createElement("div");

        let heading = document.createElement("h3");
        heading.textContent = note.title;

        let paragraph = document.createElement("p");
        paragraph.textContent = note.content;

        div.appendChild(heading);
        div.appendChild(paragraph);

        notesDiv.appendChild(div);
    });
}

function addNote() {
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;

    if (title === "" || content === "") {
        alert("Please enter both title and content!");
        return;
    }

    notes.push({
        title: title,
        content: content
    });

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    displayNotes();
}

function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
    alert("Notes saved successfully!");
}

window.onload = displayNotes;

function saveNote() {
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;

    if (title.trim() === "" && content.trim() === "") {
        alert("Please enter a note first!");
        return;
    }

    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    notes.push({
        title: title,
        content: content
    });

    localStorage.setItem("notes", JSON.stringify(notes));

    alert("Note saved successfully!");

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
}
