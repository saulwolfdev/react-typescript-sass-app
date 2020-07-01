import { IItemsTaskNames, IItemsTextSection,IItemHeader } from "../Entidades";
import logo from "../img/svg/logo.svg";
import { v4 as uuidv4 } from 'uuid';
class Mocks {

	public GetItemsTaskNames(): IItemsTaskNames[] {
		return [
			{ id: uuidv4(), category: "Extendida", nameTask: "NUEVA TAREA ESTÁNDAR1", saludarMetodo() { return "hola" } },
			{ id: uuidv4(), category: "Extendida", nameTask: "NUEVA TAREA ESTÁNDAR2", saludarMetodo() { return "hola tengo sueño" } },
			{ id: uuidv4(), category: "Extendida", nameTask: "NUEVA TAREA ESTÁNDAR3", saludarMetodo: () => 'hola' },

		];
	}

	public GetItemsHeader(): IItemHeader {
		return {
			logoSvg: logo,
			produkt: "Product",
			pricing: "Pricing",
			compare: "Compare",
			solutions: "Solutions",
			help: "Help",
		};
	}

	public GetItemsTextSection(): IItemsTextSection[] {
		return [
			{
				id: uuidv4(),
				identify: "Enter",
				title: "The Enterprise solution for efficient teams",
				img: "https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5ccdb5010b9ef2d361ee0b85_Enterprise-Hero%402x.png",
				description: "Produck allows you to build at scale, bringing your whole organization to a single place to collaborate, innovate, and move work forward.", 
				textTip: "FREE Asana & Jira Migration! Transfer everything in seconds!",
				addText: "Free forever version with Unlimited Users. Free 14-days trial to test Premium. No credit card required. Cancel anytime."
			},
			{ id: uuidv4(),
			identify:"Whole", 
			title: "Your whole organization on Produck",
			img:"https://assets.website-files.com/5bcf7ff0a798ce3b3ec5cb6a/5ccdb52633f0ea753709d2c5_Folder-tree-enterprise%402x.png",
			description: "Produck offers the flexibility to organize your departments, platforms, projects, or products in a way that fits your organization’s unique needs.",
			iconSvg: ["", ""], 
			iconDescription: "", 
			},
		];
	}
}
export default Mocks;
