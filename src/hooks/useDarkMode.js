import {useLocalStorage} from './useLocalStorage'

const useDarkMode = (key,initialValue) => {

    const [values,setValues] = useLocalStorage(key,initialValue)
    
    const toggleMode = e => {
        setValues(!values);
      };
      return [values,toggleMode]
    


}
export default useDarkMode