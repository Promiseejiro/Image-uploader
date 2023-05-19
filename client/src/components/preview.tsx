import Header from "./header";
import Btn from "./btn"
interface text{
  imageUrl: String;
  onclickHandler:any;
  title: String;
}



function ImagePreview ({imageUrl,onclickHandler,title}:text){
  return (
    <div> 
   <div className="flex justify-center"> <svg className="bg-[green]  rounded-full p-0"xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m421 758 283-283-46-45-237 237-120-120-45 45 165 166Zm59 218q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Zm0-60q142 0 241-99.5T820 576q0-142-99-241t-241-99q-141 0-240.5 99T140 576q0 141 99.5 240.5T480 916Zm0-340Z"/></svg></div>
    <Header title="Uploaded Successfully"/>
    <img className="w-full  mt-4" src={`${imageUrl}`} alt="image" />
    
    <div className="flex auto 1 py-4"><p className="overflow-hidden whitespace-nowrap text-ellipsis bg-[#f4f4f4] rounded p-2">{imageUrl}</p>  <Btn title={title} onclickHandler={onclickHandler}/></div>
    </div>
    )
}
export default ImagePreview