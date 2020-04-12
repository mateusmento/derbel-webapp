import { Stage } from './stage.enum';
import { Step } from './step.model';
import { User } from './user.model';

export class Task {
	public constructor(
		public title: string,
		public owner: User,
		public stage: Stage = Stage.TODO,
		public steps: Step[] = [ new Step("Step 1") ]
	) {}
}
