export interface IUseCaseError<T> {
	value: T;
}

export class BadRequest implements IUseCaseError<string[]> {

	readonly value: string[];

  constructor(errors: string[]){
		this.value = errors;
	}
}
