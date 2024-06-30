// Modificando o nome do som para azul quando clicado
document.getElementById("soundName").addEventListener("click", function () {
  this.style.color = "blue";
});

// Renomeando os botões e alterando suas funções
var playButton = document.getElementById("playButton");
var pauseButton = document.getElementById("pauseButton");
var stopButton = document.getElementById("stopButton");

playButton.addEventListener("click", playMusic);
pauseButton.addEventListener("click", pauseMusic);
stopButton.addEventListener("click", stopMusic);

// Adicionando função playMusic
function playMusic() {
  var audio = document.getElementById("som");
  audio.play();
}

// Adicionando função pauseMusic
function pauseMusic() {
  var audio = document.getElementById("som");
  audio.pause();
}

// Adicionando função stopMusic
function stopMusic() {
  var audio = document.getElementById("som");
  audio.pause();
  audio.currentTime = 0;
}

const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const elements = document.querySelectorAll(".hidden");

elements.forEach((element) => myObserver.observe(element));
