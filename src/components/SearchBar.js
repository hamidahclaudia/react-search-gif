import _ from "lodash";
import { useMemo, useCallback } from 'react'


const SearchBar = ({ onEnter }) => {

  const debounce = useMemo(() => 
    _.debounce(value => {
      onEnter(value);
    }, 300), 
  [onEnter]);

  const onKeyUp = useCallback((e) => {
    debounce(e.target.value)
  }, 
  [debounce])

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
