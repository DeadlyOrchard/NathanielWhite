function drop(dropper_id, content_id) {
  // show content
  let content = document.getElementById(content_id);
  content.classList.toggle("dropped-content");

  // switch icon
  let dropper = document.getElementById(dropper_id);
  let icon = dropper.children[0];
  icon.classList.toggle("fa-folder-closed");
  icon.classList.toggle("fa-folder-open");
}

