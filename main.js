const keyBox = document.querySelector('.key');
const codeBox = document.querySelector('.code');
const descBox = document.querySelector('.desc');

document.onkeydown = (e) => {

  // function for displaying key info
  displayInfo = (key = e.key, keyCode = e.keyCode, code = e.code) => {
    keyBox.innerHTML = key;
    codeBox.innerHTML = `${keyCode} [ ${code} ]`;
  }

  // exception of tab - disabling its use
  if (e.keyCode === 9) {
    displayInfo();
    return false
  }
  // exception of spacebar - not showing its name
  if (e.keyCode === 32) {
    displayInfo(key = "spacebar");
    return false;
  }

  displayInfo();

}