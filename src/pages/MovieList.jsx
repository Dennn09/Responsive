import React from 'react'
// import { useMovieDataQuery } from '../services/User/get-data-movie'
import { useState } from 'react'
import { Carasuel } from '../assets/components/Carasuel'
import { useMovieDataPopulerQuery } from '../services/User/get-data-movie-populer'
import { useNavigate } from 'react-router-dom'
import { useMovieDataQuerySearch } from '../services/User/get-data-movie-search'
import SearchImage from '../assets/img/Search.svg'


export const MovieList = () => {


  const navigate = useNavigate()
  const [dataPopuler, setdataPopuler] = useState(1)
  
   const {data : fetchUser} = useMovieDataPopulerQuery({
    page : dataPopuler
   })

   const [SearchData, setSearchData] = useState("")
   const [simpanDataSearch, setsimpanDataSearch] = useState("")
   

   
   const handleSearchInputChange = (e) => {
    setSearchData(e.target.value);
  };

   

   const handleSimpanClick = () => {
    
    setsimpanDataSearch(SearchData);
    navigate(`/HasilSearch`,{
      state:{
        query : SearchData
      }
    })
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      handleSimpanClick();
    }
  };
  console.log(SearchData, "tesss")
//    const filteredMovies = SearchMovie?.filter((movie) =>
//    movie.title.toLowerCase().includes(SearchData.toLowerCase())
//  );


  //  console.log(fetchUser)

  
   const renderDataPupuler4 = () => {
    const dataToRender = fetchUser?.results?.slice(14,19); // Batasi hanya 4 data pertama
  
    return dataToRender?.map((value) => (
      <div key={value.id} className='w-[20rem] h-[75%] mt-5 mx-4 flex flex-col hover:border border-emerald-50'
      onClick={() => {
        navigate(`/DetailMovie/${value.id}`,{
          state:{
            idMovie : value.id
          }
        })

      }}>
        <img src={`https://image.tmdb.org/t/p/original/${value.poster_path}`} alt={value.title} className='w-full h-full' />
       
      </div>
    ));
  }

  // console.log(SearchMovie, "search")

  return (
    <div className='bg-[#595959]  items-center flex flex-col space-y-5' >

     <div className='w-[95%] rounded-fu mt-2 relatif'><Carasuel />
     <div className='absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-red-500 rounded-full px-3 flex justify-center'>
      <input
        type="text"
        className='w-64 p-2 bg-transparent  shadow-md  font-bold'
        placeholder='What do you want to watch?'
        value={SearchData}
        onChange={handleSearchInputChange}
        onKeyDown={handleEnterPress}
      />
     <button className='' onClick={handleSimpanClick}><img src={SearchImage} alt="Search" className="w-[1.5em]" /></button>
    </div>
     </div> 
    <div className='   h-[38rem] w-[95%]  bg-white  rounded-[1rem] mb-3'  >
      <div className='pt-4  flex justify-between items-center px-4' >
        <h2 className='font-bold text-[1.5rem]'>Populer Movie</h2>
        <a href='/PopulerMovie' className='text-red-500 font-semibold text-[1.5em]'>See All Movie </a>
      </div>
      <div className='flex justify-between'>
        {renderDataPupuler4()}
      </div>
    </div>

    </div>
  )
}
