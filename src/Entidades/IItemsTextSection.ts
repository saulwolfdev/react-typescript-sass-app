interface IIcono {
iconUrl: string;
description: string;
}

export interface IItemsTextSection {
	id:string;
	identify?:string;
	title?:string;
	img?:string;
	description?:string;
	addText?:string;
	textTip?:string;
  icons?: Array<IIcono>;
  propTip?:string;
}