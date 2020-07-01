import {IItemsTaskNames,IItemsTextSection,IItemHeader} from "../Entidades";
import logo from "../img/svg/logo.svg";
import { v4 as uuidv4 } from 'uuid';
class Mocks{

	public GetItemsTaskNames(): IItemsTaskNames[] {
	return [
		{ id: uuidv4(), category: "Extendida", nameTask: "NUEVA TAREA ESTÁNDAR1", saludarMetodo(){return "hola"}},
		{ id: uuidv4(), category: "Extendida", nameTask: "NUEVA TAREA ESTÁNDAR2", saludarMetodo(){return "hola tengo sueño"}},
		{ id: uuidv4(), category: "Extendida", nameTask: "NUEVA TAREA ESTÁNDAR3",  saludarMetodo: () => 'hola' },

	];
}

	public GetItemsHeader(): IItemHeader {
		return { 
			logoSvg:logo,
			produkt:"Poduckt",
			pricing:"Pricing",
			compare:"Compare",
			solutions:"Solutions",
			help:"Help",
			};
	}

	public GetItemsTextSection(): IItemsTextSection[] {
	return [
		{ id: uuidv4(),title:"1",identify:"Enter",description:"",img:"",iconSvg:["",""],iconDescription:"",textTip:""},
		{ id: uuidv4(),title:"2",identify:"EnterImage",description:"",img:"",iconSvg:["",""],iconDescription:"",textTip:""},
		{ id: uuidv4(),title:"3",identify:"Whole",description:"",img:"",iconSvg:["",""],iconDescription:"",textTip:""},
		{ id: uuidv4(),title:"4",identify:"WholeImage",description:"",img:"",iconSvg:["",""],iconDescription:"",textTip:""},
		{ id: uuidv4(),title:"5",identify:"Portfolio",description:"",img:"",iconSvg:["",""],iconDescription:"",textTip:""},
		{ id: uuidv4(),title:"6",identify:"PortfolioImage",description:"",img:"",iconSvg:["",""],iconDescription:"",textTip:""},
		{ id: uuidv4(),title:"7",identify:"Granular",description:"",img:"",iconSvg:["",""],iconDescription:"",textTip:""},
		{ id: uuidv4(),title:"8",identify:"GranularImage",description:"",img:"",iconSvg:["",""],iconDescription:"",textTip:""},
		{ id: uuidv4(),title:"9",identify:"Plan",description:"",img:"",iconSvg:["",""],iconDescription:"",textTip:""},
		{ id: uuidv4(),title:"10",identify:"PlanImage",description:"",img:"",iconSvg:["",""],iconDescription:"",textTip:""},
		{ id: uuidv4(),title:"11",identify:"Live",description:"",img:"",iconSvg:["",""],iconDescription:"",textTip:""},		
	];
}
}
export default Mocks;
