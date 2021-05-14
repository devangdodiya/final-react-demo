function Logout()
{
    return(
        window.localStorage.clear()
        // sessionStorage.clear()   
    )
}
export default Logout;