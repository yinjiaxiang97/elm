import axios from "vue-axios";



export default async (url)=>{
	let res = await axios.get(url);
	const {errno,data} = res.data;
	if(errno === 0){
		return data;
	}else{
		window.console.log("没找到")
	}
}