import React from "react";
import "./app.css";
import Home from "./views/Home";
import UseAsyncView from "./views/UseAsyncView";
import UseRouterView from "./views/UseRouterView";
import UsePostsView from "./views/UsePostsView";
import UseGiphyView from "./views/UseGiphyVIew";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// import UseGiphyView from "./views/UseGiphyView";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/"> 
            <Home />
          </Route>
          <Route exact path="/use-async">
            <UseAsyncView />
          </Route>
          <Route exact path="/use-router">
            <UseRouterView />
          </Route>
          <Route exact path="/use-giphy">
            <UseGiphyView />
          </Route>
          <Route exact path="/use-posts">
            <UsePostsView />
          </Route>
        </Switch>
    </Router>
  );
}

//TODO: ADICIONAR AQUI UM EXEMPLO DE USO DO USELOCALSTORAGE PARA GRAVAR INFORMACOES DIGITTADAS EM UM TEXTBOX QUANDO O CARA SAIR DA PAGINA E VOLTAR POR EXEMPLO, COLOCCAR UM USEDEBOUNCE TBMM
// INSPIRACAO: https://www.youtube.com/watch?v=YKmiLcXiMMo

//TODO: USAR O USECONTEXT PARA CRIAR UM THEME, talvez um USETHEME

// An async function for testing our hook.
// Will be successful 50% of the time.

export default App;

/*



import "./styles.css";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

class DataFetcher extends React.Component {
  state = {
    isLoading: false,
    error: null,
    posts: []
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    fetch(this.props.url)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("Error fetching posts!")
        }
      })
      .then(posts => this.setState({ posts, isLoading: false }))
      .catch(error => this.setState({ error }))
  }

  render() {
    return this.props.children(this.state)
  }
}

class AppRenderProps extends React.Component {
  render() {
    return (
      <div>
        <h1>With Render Props</h1>
        <DataFetcher url={BASE_URL}>
          {({ error, isLoading, posts }) => {
            if (error) {
              return <p style={{ color: 'red' }}>{error.message}</p>
            }
        
            if (isLoading) {
              return <p>Loading posts...</p>
            }
        
            return (
              <div>
                <h1>App</h1>
                {posts.map(post => (
                  <>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                  </>
                ))}
              </div>
            ); 
          }}
        </DataFetcher>
      </div>
    )
  }
}

function useDataFetcher(url) {
  const [posts, setPosts] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  
  React.useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("Error fetching posts!")
        }
      })
      .then(posts => {
        setPosts(posts);
        setIsLoading(false)
      })
      .catch(error => {
        setError(error)
      })
  }, [url])

  return { posts, isLoading, error }
}

function AppHooks() {
  const { posts, isLoading, error } = useDataFetcher(BASE_URL)

  if (error) {
    return <p style={{ color: 'red' }}>{error.message}</p>
  }

  if (isLoading) {
    return <p>Loading posts...</p>
  }

  return (
    <div>
      <h1>App</h1>
      {posts.map(post => (
        <>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        </>
      ))}
    </div>
  ); 
}

const rootElement = document.getElementById("root");
ReactDOM.render(<AppHooks />, rootElement);


*/
