//your JS code here. If required.
const output = document.querySelector('#output');

function getData (){
	return new Promise ((resolve,reject)=>{
		setTimeout(()=>resolve([1,2,3,4]),3000);
	})
}

getData().then(data =>{
	data = data.filter(num=> num % 2 === 0);
	console.log(data)
	return new Promise((resolve,reject)=>{
	   setTimeout(()=>{
		output.textContent = data.join();
		   resolve(data)
		   
	   },1000)})
}).then(data=> {
	
		setTimeout(()=>{
		     output.textContent = data.map(num => num * 2).join()
			
		},2000)
	})
