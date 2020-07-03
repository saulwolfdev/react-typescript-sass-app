interface Privacy{
	privacy?:string;
	cookie?:string;
	terms?:string;
	legal?:string
	contact?:string
}


export interface IItemsFooter {
	id:string;
	urlFace?:string;
	urlYoutube?:string;
	urlInstagram?:string;
	urlTwitter?:string;
	urlTwitterText?:string;
	urlBons?:string;
	urlBonsText:string;
    privacyItems?:Array<Privacy>;
}