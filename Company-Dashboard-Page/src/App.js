import MainComponent from "./pages/Dashboard";
import {
	BrowserRouter as Router,
	useHistory,
	Route,
	Switch,
} from "react-router-dom";
function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" component={MainComponent} />
					<Route path="*" component={NotFound} />
				</Switch>
			</Router>
		</>
	);
}

const NotFound = () => {
	const history = useHistory();
	setTimeout(() => {
		history.push("/");
	}, 3000);
	return (
		<>
			<section className="h-screen flex items-center justify-center">
				<h2 className="text-4xl font-bold">Page Not Found</h2>
			</section>
		</>
	);
};
export default App;
