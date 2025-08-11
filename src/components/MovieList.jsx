import React from 'react'
import  movies  from '../data/movies';
const MovieList = () => {
  return (
    <div className='flex flex-col items-center gap-10 '>
        <h1 className='font-kanit font-normal text-[40px] leading-[18px] tracking-normal align-middle'>Movie List Section</h1>
        {movies.map((movie, index) => (
        <div className='bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden  px-5 py-7 ' 
            key = {movie.title}
            style={{
            width: '400px',
            height: '250px',
            borderRadius: '10px',
            opacity: 1
        }}>
            <div className=' flex flex-row gap-x-10'>
                <img className=''
                src={movie.image} 
                alt={movie.title} 
                style={{
                    width: '102px',
                    height: '100px',
                    borderRadius: '10px',
                    opacity: 1
                }}
                />
                <div className='flex flex-col font-kanit font-normal text-xl leading-[18px] align-middle gap-y-3 overflow-x-auto '>
                    <div>Title:{movie.title}</div>
                    <div>Year:{movie.year}</div>
                    <div>Runtime:{movie.runtime}</div>
                    <div className='flex flex-row items-center'>
                    Genres:
                    {movie.genres.map((genre,i) => {
                        return(
                        <div
                            key={i}
                           
                          className='bg-[#eaac99] rounded-[10px] text-base px-[10px] ml-[10px] mt-[5px] '>
                            {genre}
                          </div>)
                    })}
                    </div>
                    <div>IMDB Ratings:{movie.imdbRating}</div>
                    <div>IMDB Votes:{movie.imdbVotes}</div>
                </div>
            </div>
        </div>
          ))}
    </div>
  )
}

export default MovieList
