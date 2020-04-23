export interface Stage {
	next(): Stage;
	previous(): Stage;
	toJson(): string;
}

export class Todo implements Stage {
	public next(): Stage {
		return new Doing() as Stage;
	}

	public previous(): Stage {
		return new Todo() as Stage;
	}

	public toJson(): string {
		return "TODO";
	}
};

export class Doing implements Stage {
	public next(): Stage {
		return new Done() as Stage;
	}

	public previous(): Stage {
		return new Todo() as Stage;
	}

	public toJson(): string {
		return "TODO";
	}
};

export class Done implements Stage {
	public next(): Stage {
		return new Done() as Stage;
	}

	public previous(): Stage {
		return new Doing() as Stage;
	}

	public toJson(): string {
		return "DONE";
	}
};
