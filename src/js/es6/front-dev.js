ready(() => {
	
	var objDefault = new ObjectDefault();

	var addElement = document.querySelector('#add');
	var removeElement = document.querySelector('#remove');
	var undoChanges = document.querySelector('[data-undo-changes]');
	
	addElement.addEventListener('click', objDefault.addItem);
	removeElement.addEventListener('click', objDefault.removeAllSelected);
	undoChanges.addEventListener('click', objDefault.undoChanges);
});
