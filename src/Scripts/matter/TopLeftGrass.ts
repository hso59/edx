class TopLeftGrass extends Ground {
	constructor(x: number, y: number, level: any) {
		var blocking = GroundBlocking.left + GroundBlocking.top;
		super(x, y, blocking, level);
		this.setImage(images.objects, 854, 404);
	}
};