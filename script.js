function changeMap(link) {

    alert(link);

    document.getElementById("googleMap").src = link;

}
const maps = {
  1: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2410.5622110584077!2d20.400264099999998!3d44.806243499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6f84b3349807%3A0x7cd75bcea2613d92!2sUro%C5%A1a%20Martinovic%CC%81a%2023%2C%20Beograd%2011000%2C%20Serbia!5e1!3m2!1svi!2s!4v1785838415390!5m2!1svi!2s" ,
  2: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2410.107529142765!2d20.461193076238903!3d44.81712297107075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDQ5JzAxLjYiTiAyMMKwMjcnNDkuNiJF!5e1!3m2!1svi!2s!4v1785838558211!5m2!1svi!2s" ,
  3: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2410.5435535597458!2d20.397623076238354!3d44.806689971070774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDQ4JzI0LjEiTiAyMMKwMjQnMDAuNyJF!5e1!3m2!1svi!2s!4v1785838594506!5m2!1svi!2s",
  4: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2410.168593254466!2d20.465177076238838!3d44.81566197107074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDQ4JzU2LjQiTiAyMMKwMjgnMDMuOSJF!5e1!3m2!1svi!2s!4v1786179657987!5m2!1svi!2s"  ,
  5: "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1342.3733665443713!2d19.83247155098191!3d45.2525815636057!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDXCsDE1JzA5LjciTiAxOcKwNDknNTguNCJF!5e1!3m2!1svi!2s!4v1786298942493!5m2!1svi!2s" ,
  6: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d287.6284656234555!2d19.847846502214363!3d45.26381521002541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDXCsDE1JzQ5LjYiTiAxOcKwNTAnNTMuMiJF!5e1!3m2!1svi!2s!4v1786298965381!5m2!1svi!2s"
};

document.querySelectorAll(".location-card").forEach(card => {
  card.addEventListener("click", () => {
    document.getElementById("googleMap").src = maps[card.dataset.map];
  });
});
