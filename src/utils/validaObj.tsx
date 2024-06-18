export function ehObjeto(obj: any) {
	if (
		typeof obj !== 'object' ||
		(typeof obj === 'object' && obj === null) ||
		(typeof obj === 'object' && Array.isArray(obj))
	) {
		return false;
	} else {
		return true;
	}
}

export function ehObjetoVazio(obj: any) {
	const props = Object.entries(obj);

    if (props.length === 0) {
        return true;
    }

	if (props.every(item => item[1] === '')) {
		return true;
	} else {
		return false;
	}

}
