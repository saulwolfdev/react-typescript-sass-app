import { IItemsTaskNames } from "../Entidades/IItemsTaskNames";
import { v4 as uuidv4 } from 'uuid';

class Mocks{
	public GetItemsTaskNames(): IItemsTaskNames[] {
	return [
		{ id: uuidv4(), category: "", nameTask: "NUEVA TAREA ESTÁNDAR" },
		{ id: uuidv4(), category: "", nameTask: "NUEVA TAREA EXTENDIDA" },
		{ id: uuidv4(), category: "Extendida", nameTask: "TAREA EXTENDIDA ASOCIADA" }
	];
}
}

export default Mocks;
