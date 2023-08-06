

const loginbutton=()=>{
 const handlelogin=()=>{
    alert('login successful');
 };
 return(
    <button className='bg-blue-500 hover:bg-blue-700 text-white' onClick={handlelogin}>
        login
    </button>
 )
};
export default loginbutton;