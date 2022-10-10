let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; ){
    const a = prompt('Какой ваш последний просмотренный фильм?', ''),   
          b = prompt('На сколько оцените его?', '');

    if(a != null && b != null && a != '' && b != '' && a.length <= 50) {
        personalMovieDB.movies[a] = b;
        i++; 
    } else {
        alert('Введите название фильма не длинее чем 50 символов'); continue;
    }
}


if(personalMovieDB.count < 10 ){
    alert('Вы просто любитель');
}else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    alert('Вы обычный зритель');
}else if(personalMovieDB.count >= 30){
    alert('Вы киноман');
}else{
    alert('Ошибочка');
}
console.log(personalMovieDB);



