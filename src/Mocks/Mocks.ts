import { IItemsTaskNames } from "../Entidades/IItemsTaskNames";
import { v4 as uuidv4 } from 'uuid';

class Mocks{
	public GetItemsTaskNames(): IItemsTaskNames[] {
	return [
		{ id: uuidv4(), category: "Extendida", nameTask: "NUEVA TAREA ESTÁNDAR1", saludarMetodo(){return "hola"}},
		{ id: uuidv4(), category: "Extendida", nameTask: "NUEVA TAREA ESTÁNDAR2", saludarMetodo(){return "hola tengo sueño"}},
		{ id: uuidv4(), category: "Extendida", nameTask: "NUEVA TAREA ESTÁNDAR3",  saludarMetodo: () => 'hola' },

	];
}
}

export default Mocks;
