class TopRightGrass extends Ground {
	constructor(x: number, y: number, level: any) {
		var blocking = GroundBlocking.top + GroundBlocking.right;
		super(x, y, blocking, level);
		this.setImage(images.objects, 922, 404);
	}
};