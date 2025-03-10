import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function HomePage(){
	return(
		<div>
			<Header/>
			<div className="homeContents">
				<Outlet/>
			</div>
		</div>
	)
}