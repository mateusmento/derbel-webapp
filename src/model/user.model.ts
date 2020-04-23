export class User {
	public profile = {
		name: "",
		photo: "/public/logo.png"
	};

	public constructor(public id: number, name: string) {
		this.profile.name = name;
	}
}
