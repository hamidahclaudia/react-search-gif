import _ from "lodash";
import { useCallback } from 'react'


const SearchBar = ({ onEnter }) => {

  const onKeyUp = (e) => {
    debounce(e.target.value)
  }

  const debounce = useCallback(
    _.debounce((value) => {
      onEnter(value);
    }, 300), [onEnter]
  );

  return (
    <div>
      <input type='text'      
        className='form-control' 
        onKeyUp={(e) => onKeyUp(e)} 
        placeholder='Please enter keyword'/>
    </div>
  )
}

export default SearchBar
