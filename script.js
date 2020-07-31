function addPage () {
  const pages = Array.from(document.getElementsByClassName('page'));
  const template = pages.pop().cloneNode(true);
  document.body.appendChild(template);
}