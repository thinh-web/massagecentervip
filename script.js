function changeMap(link) {

    alert(link);

    document.getElementById("googleMap").src = link;

}
const maps = {
  1: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d812.9423523892302!2d19.23878874132387!3d42.43759786985361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDI2JzE1LjciTiAxOcKwMTQnMjIuMiJF!5e1!3m2!1svi!2s!4v1786638545467!5m2!1svi!2s" ,
  2: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1755.9958052867644!2d19.237350879507538!3d42.439623298894425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDI2JzI1LjQiTiAxOcKwMTQnMjEuMCJF!5e1!3m2!1svi!2s!4v1786638611590!5m2!1svi!2s" ,
  3: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d399.7022783651598!2d18.83688030484707!3d42.28296002378868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDE2JzU5LjAiTiAxOMKwNTAnMTQuNCJF!5e1!3m2!1svi!2s!4v1786638644656!5m2!1svi!2s",
  4: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d559.7653820730184!2d18.841833677655757!3d42.29233054650481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134dd57b5c745d77%3A0x2bb9c61c971cab20!2sBravarija%20Ivankovic!5e1!3m2!1svi!2s!4v1786638671040!5m2!1svi!2s"  ,
  5: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d705.3356777527865!2d18.84111605330979!3d42.285590124431984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDE3JzEwLjciTiAxOMKwNTAnMzQuNCJF!5e1!3m2!1svi!2s!4v1786638694818!5m2!1svi!2s" 
};

document.querySelectorAll(".location-card").forEach(card => {
  card.addEventListener("click", () => {
    document.getElementById("googleMap").src = maps[card.dataset.map];
  });
});
