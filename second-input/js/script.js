function changeColor(getColor) {
    let bg = document.querySelector('.bg');
    let selectColor = getColor.value; // value is from <option> value="" </option>
    let text = getColor.options[getColor.selectedIndex].text;

    bg.style.background = selectColor;
    bg.innerHTML = text;
}