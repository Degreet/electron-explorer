export default async function renderDir(dir) {
	const req = await fetch('http://localhost:5858/api/read-dir', {
		method: 'POST',
		body: JSON.stringify({ dir }),
	});

	const data = await req.json();

	if (data.success) {
		build(data.dir);
	} else {
		console.error(data.msg);
	}
}

function build(dir) {
	function buildItem(item) {
		return /*html*/ `
            <li data-type="${item.type}">
                <img src="icons/${item.type == 'folder' ? 'min-folder' : 'file'}.svg">
                <span>${item.name}</span>
            </li>
        `;
	}

	return (foundResults.innerHTML = dir.map(buildItem).join(''));
}
