// 1-task 


let textarea = document.getElementById("myTextarea");
let input = document.getElementById("myInput");
let resultDiv = document.getElementById("result");

input.addEventListener("keyup", function() {
  let inputValue = input.value.toLowerCase();
  let textareaValue = textarea.value.toLowerCase();

  if (textareaValue.indexOf(inputValue) !== -1) {
    resultDiv.textContent = "Matnda so'z mavjud";
  } else {
    resultDiv.textContent = "Matnda so'z mavjud emas";
  }
}
)

textarea.addEventListener("keyup", function() {
  let inputValue = input.value.toLowerCase();
  let textareaValue = textarea.value.toLowerCase();

  if (textareaValue.indexOf(inputValue) !== -1) {
    resultDiv.textContent = "Matnda so'z mavjud";
  } else {
    resultDiv.textContent = "Matnda so'z mavjud emas";
  }
}
)


// 2-task 


let  fileInput = document.getElementById('myFileInput');
let  fileSizedisplay = document.getElementById('fileSize');

fileInput.addEventListener('change', function() {
  let  file = this.files[0]

  if (file) {
    var fileSizeInKB = file.size / 1024
    fileSizedisplay.textContent = 'Fayl o\'lchami: ' + fileSizeInKB.toFixed(2) + ' KB';
  } else {
    fileSizedisplay.textContent = 'Fayl tanlanmagan';
  }
}
)


// 3-task 


function bracket_date(matn) {
    let opener = 0;
    let covering = 0;
    for (let i = 0; i < matn.length; i++) {
        if (matn[i] === '(') {
            opener++;
        } else if (matn[i] === ')') {
            covering++;
        }
    }
    return opener === covering;
}

function count() {
    const text = document.getElementById('matn').value;
    if (bracket_date(text)) {
        alert("Jami ochuvchi va yopuvchi qavslar soni teng.");
    } else {
        alert("Jami ochuvchi va yopuvchi qavslar soni teng emas.");
    }
}
