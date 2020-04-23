import { Stage } from "./stage.enum";
import { Task } from "./task.model";

export class Tasks extends Array<Task> {
	public constructor(...items: Task[]) {
		super(...items);
	}

	public get todo() {
		return this.filter(t => t.stage === Stage.TODO);
	}

	public get doing() {
		return this.filter(t => t.stage === Stage.DOING);
	}

	public get done() {
		return this.filter(t => t.stage === Stage.DONE);
	}
}
