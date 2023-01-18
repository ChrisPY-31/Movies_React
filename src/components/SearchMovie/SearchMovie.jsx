import React, { useEffect , useState} from 'react'
import './SearchMovies.css'
import { useSelector ,useDispatch } from 'react-redux';
import { getSearch } from '../../store/reducers/Movies/thunks';
import { SearchCard } from '../SearchCard/SearchCard';
const SearchMovie = () => {  
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const [form , setForm] = useState('')

  const handleSubmit= (e)=>{
    e.preventDefault()
    setForm(input)
  }
  useEffect(()=>{
    if(Object.keys(form).length > 0){
      dispatch(getSearch(form))
    }
  },[form])
  return (
    <div className='busqueda'>
      <form className='busqueda__formulario'
      onSubmit={(e)=>handleSubmit(e)}
      >
      <input 
      type="text" 
      className='busqueda__input text-white font-bold'
      name={input}
      onChange={(e)=>setInput(e.target.value)}
      />
      <button className="busqueda__button btn btn-outline-danger  ">Search</button>
      </form>
      <SearchCard />
    </div>
  )
}

export default SearchMovie