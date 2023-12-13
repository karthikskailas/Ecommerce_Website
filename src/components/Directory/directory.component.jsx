import CategoryItems from "../categoryItems/categoryItems.components";
import "./directory.style.scss";
import { category } from "../../constants/constants";

export default function Directory() {
	return (
		<div className="directory-container">
			{category.map((item) => {
				return <CategoryItems key={item.id} {...item} />;
			})}
		</div>
	);
}
