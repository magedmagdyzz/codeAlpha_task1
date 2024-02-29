
function showAlert() {
  alert("This is my Resume");
}
document.getElementById('toggleButton').addEventListener('click', function () {
  var sidebar = document.getElementById('myleftPanel');
  var content = document.getElementById('myrightPanel');
  button = document.getElementById('toggleButton');

  if (sidebar.style.width === '15%') {
    sidebar.style.width = '0';
    sidebar.style.visibility = 'hidden';
    content.style.paddingLeft = '150px';
    button.innerHTML = 'Open';
  } else {
    sidebar.style.width = '15%';
    sidebar.style.visibility = 'visible';
    sidebar.style.padding = '0.7cm';
    content.style.marginLeft = '20px';
    button.innerHTML = 'Close';
  }
});

