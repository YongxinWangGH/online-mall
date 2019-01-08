//to avoid triggering search by every single letter you type
export const debounce = (func, delay = 200) => {
	let timer = null;

	return function(...args){
		timer && clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, args);
		})
	}
}