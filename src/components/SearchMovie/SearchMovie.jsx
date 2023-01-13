import React, { useEffect , useState} from 'react'
import './SearchMovies.css'
import { useSelector ,useDispatch } from 'react-redux';
import { getSearch } from '../../store/reducers/Movies/thunks';
import { SearchCard } from '../SearchCard/SearchCard';
const SearchMovie = () => {
  const {busqueda} = useSelector(state => state.movie)
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const [form , setForm] = useState('')

  const handleSubmit= (e)=>{
    e.preventDefault()
    setForm(input)
  }
  useEffect(()=>{
   dispatch(getSearch(form))
  },[form])
  return (
    <div className={busqueda?'busqueda':'Cerrar'}>
      <form action=""
      onSubmit={(e)=>handleSubmit(e)}
      >
      <input 
      type="text" 
      className='busqueda__input'
      name={input}
      onChange={(e)=>setInput(e.target.value)}
      />
      </form>
      <SearchCard/>
    </div>
  )
}

export default SearchMovie