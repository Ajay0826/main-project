// Notepad functionality
const noteForm = document.querySelector(".notepad-form");
const noteInput = document.getElementById("note-input");
const noteBtn = document.getElementById("note-btn");
const notesList = document.querySelector(".notes-list");

// Load notes from localStorage when page loads
document.addEventListener("DOMContentLoaded", () => {
  loadNotes();
});

// Handle form submission
noteForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const noteText = noteInput.value.trim();

  if (noteText === "") {
    alert("Please enter a note!");
    return;
  }

  addNote(noteText);
  noteInput.value = "";
  noteInput.focus();
});

// Add a new note
function addNote(noteText) {
  // Remove "No notes yet" message if it exists
  const emptyMsg = notesList.querySelector(".note-msg");
  if (emptyMsg) {
    emptyMsg.remove();
  }

  // Create new note element
  const noteItem = document.createElement("li");
  noteItem.classList.add("note-item");

  const noteContent = document.createElement("div");
  noteContent.classList.add("note-content");

  const noteDate = document.createElement("small");
  noteDate.classList.add("note-date");
  noteDate.textContent = new Date().toLocaleString();

  const noteTextSpan = document.createElement("p");
  noteTextSpan.classList.add("note-text");
  noteTextSpan.textContent = noteText;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-note-btn");
  deleteBtn.textContent = "×";
  deleteBtn.addEventListener("click", () => {
    deleteNote(noteItem);
  });

  noteContent.appendChild(noteDate);
  noteContent.appendChild(noteTextSpan);
  noteContent.appendChild(deleteBtn);

  noteItem.appendChild(noteContent);
  notesList.appendChild(noteItem);

  // Save notes to localStorage
  saveNotes();
}

// Delete a note
function deleteNote(noteItem) {
  noteItem.remove();

  // Show "No notes yet" message if list is empty
  if (notesList.children.length === 0) {
    const emptyMsg = document.createElement("li");
    emptyMsg.classList.add("note-msg");
    emptyMsg.textContent = "No notes yet --- add your first one above!";
    notesList.appendChild(emptyMsg);
  }

  saveNotes();
}

// Save notes to localStorage
function saveNotes() {
  const notes = [];
  const noteItems = document.querySelectorAll(".note-item");

  noteItems.forEach((item) => {
    const text = item.querySelector(".note-text").textContent;
    const date = item.querySelector(".note-date").textContent;
    notes.push({ text, date });
  });

  localStorage.setItem("notes", JSON.stringify(notes));
}

// Load notes from localStorage
function loadNotes() {
  const savedNotes = localStorage.getItem("notes");

  if (savedNotes) {
    const notes = JSON.parse(savedNotes);

    // Clear the "No notes yet" message
    const emptyMsg = notesList.querySelector(".note-msg");
    if (emptyMsg) {
      emptyMsg.remove();
    }

    // Load each note
    notes.forEach((note) => {
      const noteItem = document.createElement("li");
      noteItem.classList.add("note-item");

      const noteContent = document.createElement("div");
      noteContent.classList.add("note-content");

      const noteDate = document.createElement("small");
      noteDate.classList.add("note-date");
      noteDate.textContent = note.date;

      const noteTextSpan = document.createElement("p");
      noteTextSpan.classList.add("note-text");
      noteTextSpan.textContent = note.text;

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-note-btn");
      deleteBtn.textContent = "×";
      deleteBtn.addEventListener("click", () => {
        deleteNote(noteItem);
      });

      noteContent.appendChild(noteDate);
      noteContent.appendChild(noteTextSpan);
      noteContent.appendChild(deleteBtn);

      noteItem.appendChild(noteContent);
      notesList.appendChild(noteItem);
    });
  }
}
