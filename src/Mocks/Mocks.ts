import {IItemsTaskNames,IItemsTextSection} from "../Entidades";
import { v4 as uuidv4 } from 'uuid';

class Mocks{
	public GetItemsTaskNames(): IItemsTaskNames[] {
	return [
		{ id: uuidv4(), category: "Extendida", nameTask: "NUEVA TAREA ESTÁNDAR1", saludarMetodo(){return "hola"}},
		{ id: uuidv4(), category: "Extendida", nameTask: "NUEVA TAREA ESTÁNDAR2", saludarMetodo(){return "hola tengo sueño"}},
		{ id: uuidv4(), category: "Extendida", nameTask: "NUEVA TAREA ESTÁNDAR3",  saludarMetodo: () => 'hola' },

	];
}
	public GetItemsTextSection(): IItemsTextSection[] {
	return [
		{ id: uuidv4(),title:"1",description:"",img:"",iconSvg:["",""],iconDescription:"",textTip:""},
		{ id: uuidv4(),title:"2",description:"",img:"",iconSvg:["",""],iconDescription:"",textTip:""},
		{ id: uuidv4(),title:"3",description:"",img:"",iconSvg:["",""],iconDescription:"",textTip:""},
		{ id: uuidv4(),title:"4",description:"",img:"",iconSvg:["",""],iconDescription:"",textTip:""},
		{ id: uuidv4(),title:"5",description:"",img:"",iconSvg:["",""],iconDescription:"",textTip:""},
		{ id: uuidv4(),title:"6",description:"",img:"",iconSvg:["",""],iconDescription:"",textTip:""},

		
	];
}

}

export default Mocks;
