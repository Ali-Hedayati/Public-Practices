
///////////quera answer
function timeit(fn) {
	const t = () => new Date().getTime();

	return function (...args) {
		const start = t();

		return new Promise((res, rej) => {
			Promise.resolve(fn(...args))
				.then((value) => {
					res({ value, time: t() - start });
				})
				.catch((err) => rej(err));
		});
	};
}
///////////////another answer
function timeit(fn) {
	return async function (...args) {
	  const start = performance.now();
	  const value = await fn(...args);
	  const end = performance.now();
	  const time = end - start;
  
	  return { value, time };
	}
  }
  /////////////////
  