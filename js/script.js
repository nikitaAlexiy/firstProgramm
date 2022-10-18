let numberOfFilms; 

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function(){
        for (let i = 0; i < 2; i++){
            const a = prompt('Какой ваш последний просмотренный фильм?', '').trim(),   
                b = prompt('На сколько оцените его?', '').trim();

            if(a != null && b != null && a != '' && b != '' && a.length <= 50) {
                personalMovieDB.movies[a] = b;
            } else {
                alert('Введите название фильма не длинее чем 50 символов'); 
                i--;
            }
        }    
    },
    detectPersonalLevel: function() {
        if(personalMovieDB.count < 10 ){
            alert('Вы просто любитель');
        }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            alert('Вы обычный зритель');
        }else if(personalMovieDB.count >= 30){
            alert('Вы киноман');
        }else{
            alert('Ошибочка');
        }  
    },
    showMyDB: function(hidden) {
       if (!hidden){
            console.log(personalMovieDB);
        } 
    },
    writeYourGenres: function() {
         for(let i = 1; i <= 3; i++){
           let genre = prompt(`Ваш любимый жанр под номером ${i}`);
           if (genre == null || genre.trim() === '') {
                console.log('Некорректные данные');
                i--;
           }else {
                this.genres[i-1] = genre;
           }
        }
        this.genres.forEach(function(value, i) {
            console.log(`Любимый жанр ${i+1} - это ${value}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (this.privat === false) {
            this.privat = true;
        }else{
            this.privat = false;
        }
    },

};

personalMovieDB.writeYourGenres();






