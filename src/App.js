import LoginForm from "./components/LoginForm";
import useFetchData from "./hooks/useFetchData";


function App() {

  const [userList,current,loading,next,previous] = useFetchData("https://randomuser.me/api/")

  return (
    <div className="App">
      <LoginForm/>
      <div>
        <h1>All users:</h1>
        { loading ? <h1>Loading...................</h1>:<div>
        {userList.length>0 && 
        
          userList.map((user)=>
            user?.name === current?.name ? (
              <b>{user?.name}</b>
            ):(
              <span>{user?.name}</span>
            )
          )
        }

        <div>
          <img src={current?.picture}/>
        </div>
        </div>
      }
      </div>

      <button onClick={()=>{previous()}}>
        previous
      </button>
      <button onClick={()=>{next()}}>
        Next
      </button>
    </div>
  );
}

export default App;
