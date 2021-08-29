import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
// import Navbar from "./components/navbar/Navbar";
import CreateBlog from "./components/blog/CreateBlog";
import Admin from "./components/blog/Admin";
import Blog from "./components/blog/Blog";
import UpdateBlog from "./components/blog/UpdateBlog";
import Registration from "./components/registration/Registration";

function App() {
    return (
        <>
            <Router>
                {/* <Navbar /> */}
                <Switch>
                    {/* {localStorage.getItem("document") ? ( */}
                    <>
                        <Route
                            exact
                            render={() => (localStorage.getItem("document") ? <Home /> : <Redirect to="/login" />)}
                            path="/"
                            // component={Home}
                        />
                        <Route
                            render={() => (localStorage.getItem("document") ? <Blog /> : <Redirect to="/login" />)}
                            exact
                            path="/blog"
                            // component={Blog}
                        />
                        <Route
                            render={() => (localStorage.getItem("document") ? <Admin /> : <Redirect to="/login" />)}
                            exact
                            path="/admin"
                            // component={Admin}
                        />
                        <Route
                            render={() =>
                                localStorage.getItem("document") ? <CreateBlog /> : <Redirect to="/login" />
                            }
                            exact
                            path="/create-blog"
                            // component={CreateBlog}
                        />
                        <Route
                            render={() =>
                                localStorage.getItem("document") ? (
                                    <Route exact component={UpdateBlog} path="/update-blog/:id" />
                                ) : (
                                    <Redirect to="/login" />
                                )
                            }
                            exact
                            path="/update-blog/:id"
                            // component={UpdateBlog}
                        />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/registration" component={Registration} />
                    </>
                    {/* ) : ( */}
                    <></>
                    {/* )} */}
                </Switch>
            </Router>
        </>
    );
}

export default App;
